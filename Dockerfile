

# 使用 node 作为基础镜像
FROM node:18.17-alpine AS base
# 添加源
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
# 了解为什么需要安装插件，https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat 
WORKDIR /app

# 设置 npm 源地址
RUN npm config set registry http://registry.npmmirror.com

# 升级 npm 版本
RUN npm install -g npm

# 使用 PNPM 包管理工具安装依赖包
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml\* ./

# 安装 pnpm
RUN npm install -g pnpm

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi

# 增加国内源解决安装报错问题
RUN pnpm config set sharp_binary_host=https://npmmirror.com/mirrors/sharp
RUN pnpm config set sharp_libvips_binary_host=https://npmmirror.com/mirrors/sharp-libvips
RUN pnpm add sharp

# 开始打包
FROM node:18.17-alpine as builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

# 构建应用
ENV NEXT_TELEMETRY_DISABLED 1

RUN \
    if [ -f yarn.lock ]; then SKIP_ENV_VALIDATION=1 yarn build; \
    elif [ -f package-lock.json ]; then SKIP_ENV_VALIDATION=1 npm run build; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && SKIP_ENV_VALIDATION=1 pnpm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi

# 开始运行
FROM node:18.17-alpine as runner
WORKDIR /app

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制必要的文件
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# 使用 standalone 模式打包，不需要依赖 next 环境运行
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]