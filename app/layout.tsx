/**
 * Import react dependencies
 */
import { ReactElement, ReactNode } from "react";

/**
 * Import internal dependencies
 */
import { Providers } from "./providers";

/**
 * Import application global styles/CSS framework below.
 */
import "@/styles/atomic-design/style.scss";
import "@/styles/ant-design/style.scss";

export default function RootLayout({
  children,
}: {
  children: ReactElement | ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
