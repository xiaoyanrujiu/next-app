import { useState, type FC } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

/**
 * @description 页面头部
 */
export const LoginDialog: FC<Props> = (props) => {
  const { visible, setVisible } = props;
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [confirmLoading, setComfirmLoading] = useState(false);

  const submit = () => {
    console.log("点击保存了");
  };

  return (
    <Dialog open={visible} onOpenChange={setVisible}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>登录</DialogTitle>
          <DialogDescription>
            在此处填写您的个人资料。完成后单击保存。
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="account" className="text-right">
              账号
            </Label>
            <Input
              id="account"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="col-span-5"
              placeholder="请输入账号"
              autoComplete="off"
            />
          </div>
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              密码
            </Label>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-5"
              placeholder="请输入密码"
              autoComplete="off"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" loading={confirmLoading} onClick={submit}>
            保存
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
