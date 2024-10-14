"use client";

import type { FC } from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import PageMenu from "@/components/layouts/page-menu";
import UserAvatar from "@/components/layouts/user-avatar";

/**
 * @description 页面头部
 */
const PageHead: FC = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <header className="border-b border-slate-300">
      <div className="layout-container h-14 flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => handleNavigate("/")}
          >
            <Image src={Logo} alt="logo" width={30} height={30} />
            <div>笑颜如旧</div>
          </div>
          <div className="ml-10">
            <PageMenu />
          </div>
        </div>
        <div>
          <UserAvatar />
        </div>
      </div>
    </header>
  );
};

export default PageHead;
