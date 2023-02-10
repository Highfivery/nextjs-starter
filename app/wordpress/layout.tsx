/**
 * Import react dependencies
 */
import { ReactElement, ReactNode } from "react";

/**
 * Import internal dependencies
 */
import { Providers } from "../providers";

/**
 * Import internal component dependencies
 */
import SingleColumn from "@/components/atomic-design/templates/SingleColumn";

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
        <Providers>
          <SingleColumn>{children}</SingleColumn>
        </Providers>
      </body>
    </html>
  );
}
