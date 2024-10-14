"use client";

import type { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx";

/**
 * @description 页面头部菜单
 */
const PageMenu: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuList = [
    {
      name: "首页",
      path: "/",
    },
    {
      name: "工具",
      path: "/tool",
    },
    {
      name: "代码对比",
      path: "/diff",
    },
  ];

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex gap-10 text-foreground/60">
      {menuList.map((item) => (
        <div
          key={item.path}
          className={clsx(
            "cursor-pointer hover:text-foreground/80 ",
            pathname === item.path && "text-foreground/80"
          )}
          onClick={() => handleNavigate(item.path)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default PageMenu;
