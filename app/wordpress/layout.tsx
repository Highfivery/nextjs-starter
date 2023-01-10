// Import React.js dependencies
import { ReactElement, ReactNode } from "react";

import queryDefaultPageData from "@/lib/wordpress/pages/queryDefaultPageData";

/**
 * Import application global styles/CSS framework below.
 */

/**
 * Entermedia's minimal CSS framework
 * @see https://github.com/Entermedia-LLC/scss
 */
import "@/styles/atomic-design/style.scss";

// Import component dependencies
import Page from "@/components/atomic-design/templates/Page";

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
      <body>
        <Page menu={[]}>{children}</Page>
      </body>
    </html>
  );
}
