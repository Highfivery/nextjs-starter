// Import React.js dependencies
import { ReactElement, ReactNode } from "react";

// Import functions
import getFrontendPage from "@/functions/wordpress/postTypes/getFrontendPage";
import { convertMenu } from "@/components/atomic-design/molecules/Navigation/Navigation.wordpress";

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
  const frontpageData = await getFrontendPage("/");

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
        <Page
          menu={convertMenu(frontpageData?.menus?.primary_menu, {
            pathPrefix: "/wordpress",
          })}
        >
          {children}
        </Page>
      </body>
    </html>
  );
}
