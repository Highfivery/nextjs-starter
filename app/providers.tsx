"use client";

/**
 * Import React.js dependencies
 */
import { ReactElement, ReactNode } from "react";

/**
 * Import @antd dependencies
 */
import { ConfigProvider } from "antd";

// import style dependencies
import light from "../figma/light.json";
import { convertJsonToCssVariables } from "../generate-ant-design-css-vars";

// convert json style object to css variables.
const cssVars = convertJsonToCssVariables(light);

export function Providers({
  children,
}: {
  children: ReactElement | ReactNode;
}) {
  return (
    <ConfigProvider>
      <style jsx global>{`
        ${cssVars}
      `}</style>
      {children}
    </ConfigProvider>
  );
}
