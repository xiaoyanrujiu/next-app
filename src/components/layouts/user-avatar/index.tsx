"use client";

import type { FC } from "react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import PageMenu from "@/components/layouts/page-menu";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import LoginDialog from "@/components/layouts/login-dialog";

/**
 * @description 用户头像
 */
const UserAvatar: FC = () => {
  const router = useRouter();
  const [loginVisible, setLoginVisible] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <Button variant="outline" onClick={() => setLoginVisible(true)}>
        登录
      </Button>
      {/* 登录弹窗 */}
      {loginVisible && <LoginDialog visible={loginVisible} setVisible={setLoginVisible}/>}
    </div>
  );
};

export default UserAvatar;
