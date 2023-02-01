"use client";

/**
 * Import React.js dependencies
 */
import { ReactElement, ReactNode } from "react";

/**
 * Import @antd dependencies
 */
import { ConfigProvider } from "antd";

export function Providers({
  children,
}: {
  children: ReactElement | ReactNode;
}) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
