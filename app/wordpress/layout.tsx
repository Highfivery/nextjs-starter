/**
 * Import react dependencies
 */
import { ReactElement, ReactNode } from "react";

/**
 * Import internal dependencies
 */
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import getMenus from "@/functions/wordpress/menus/getMenus";
import { Providers } from "../providers";

export default async function RootLayout({
  children,
}: {
  children: ReactElement | ReactNode;
}) {
  const { menus } = await connector(queryPageById, { id: "/" });

  const parsedMenus = getMenus(menus);

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
