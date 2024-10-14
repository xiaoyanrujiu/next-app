"use client";

import type { FC } from "react";
import type { Diff2HtmlUIConfig } from "diff2html/lib/ui/js/diff2html-ui";

import { useRef, useEffect } from "react";
import { createTwoFilesPatch } from "diff";
import { Diff2HtmlUI } from "diff2html/lib/ui/js/diff2html-ui";
import "highlight.js/styles/googlecode.css";
import "diff2html/bundles/css/diff2html.min.css";

/**
 * @description 代码对比
 */
const DiffPage: FC = () => {
  const diffRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 差异字符串（通常通过diff算法生成）
    // 定义两个JSON对象（作为示例）
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 3, c: { d: 4 } };

    // 将JSON对象转换为字符串进行比较
    const text1 = JSON.stringify(obj1, null, 2);
    const text2 = JSON.stringify(obj2, null, 2);

    const diffOutput = createTwoFilesPatch(
      "text1.json", // 左侧文件名（仅用于标识）
      "text2.json", // 右侧文件名（仅用于标识）
      text1,
      text2,
      "", // 补丁标题（可选）
      "" // 补丁标题前缀（可选）
    );

    // 初始化diff2htmlUI并配置
    const configuration: Diff2HtmlUIConfig = {
      drawFileList: false, // 是否在差异之前显示文件列表
      fileListToggle: false, // 是否允许切换文件列表的显示
      fileListStartVisible: false, // 文件列表是否初始时可见
      matching: "lines", // 匹配级别：行
      outputFormat: "side-by-side", // 输出格式：并排显示
      highlight: true, // 是否高亮显示代码
      renderNothingWhenEmpty: false, // 如果没有差异，是否渲染空内容
    };

    // 创建并绘制diff
    const diff2htmlUi = new Diff2HtmlUI(
      diffRef.current!,
      diffOutput,
      configuration
    );
    diff2htmlUi.draw();
    diff2htmlUi.highlightCode();
  }, [diffRef.current]);

  return (
    <div className="layout-container mt-5">
      <h2>代码差异</h2>
      <div ref={diffRef}></div>
    </div>
  );
};

export default DiffPage;
