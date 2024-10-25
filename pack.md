# 1. docker 命令

```sh
# 打包镜像
docker build -t next-app:1.0 .

# 运行镜像
docker run -d --restart=always -p 3000:3000 --name=next-app next-app:1.0
```
