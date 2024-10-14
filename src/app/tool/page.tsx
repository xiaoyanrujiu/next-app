import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * @description 工具
 */
const ToolPage: FC = () => {
  return (
    <div className="layout-container">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">上传文件</Label>
        <Input id="picture" type="file" />
      </div>
    </div>
  );
};

export default ToolPage;
