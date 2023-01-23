// Import React.js dependencies
import { ReactElement, ReactNode } from "react";

import queryDefaultPageData from "@/lib/wordpress/pages/queryDefaultPageData";

/**
 * Import application global styles/CSS framework below.
 */

import "@/styles/gutenberg/style.scss";

export default async function RootLayout({
  children,
}: {
  children: ReactElement | ReactNode;
}) {
  //const data = await queryDefaultPageData();
  //console.log(data);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
