// Import React.js dependencies
import { ReactElement, ReactNode } from "react";

// Import global styles
import "normalize.css/normalize.css";
import "@/scss/base.scss";
import "@/scss/themes/default.scss";

// Import component dependencies
import Page from "@/components/templates/Page";

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
        {/* @TODO: See https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
        {/* @ts-expect-error Server Component */}
        <Page>{children}</Page>
      </body>
    </html>
  );
}
