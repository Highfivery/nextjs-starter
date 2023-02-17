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
          {/**
           * Disable type checking for Server component as it is not yet supported.
           * Docs: https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components
           * Open issue: https://github.com/vercel/next.js/issues/42292
           */}
          {/* @ts-expect-error Server Component */}
          <SingleColumn>{children}</SingleColumn>
        </Providers>
      </body>
    </html>
  );
}
