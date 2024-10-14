import type { Metadata } from "next";

import PageHead from "@/components//layouts/page-head";
import "./globals.css";

export const metadata: Metadata = {
  title: "笑颜如旧",
  description: "笑颜如旧的网站",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageHead />
        <main>{children}</main>
      </body>
    </html>
  );
}
