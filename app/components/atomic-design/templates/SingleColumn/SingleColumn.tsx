/**
 * Import React.js dependencies
 */
import React, { ReactElement, ReactNode } from "react";

/**
 * Import type definitions
 */
import { NavigationItemProps } from "@/components/atomic-design/molecules/Navigation/Navigation";

/**
 * Import internal dependencies
 */
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import getMenus from "@/functions/wordpress/menus/getMenus";
import formatNavigationMenu from "@/functions/wordpress/menus/formatNavigationMenu";

/**
 * Import internal component dependencies
 */
import Header from "@/components/atomic-design/organisms/Header/Header";
import Footer from "@/components/atomic-design/organisms/Footer/Footer";

/**
 * Import scoped styles
 */
//import styles from "./SingleColumn.module.scss";

/**
 * Render the Header component.
 */
export default async function SingleColumn({
  children,
}: SingleColumnTemplateProps) {
  const { menus } = await connector(queryPageById, { id: "/" });

  const allMenus = getMenus(menus);
  const primaryMenu = formatNavigationMenu(allMenus?.primary_menu);

  return (
    <>
      <Header menu={primaryMenu} />
      {children}
      <Footer menu={primaryMenu} />
    </>
  );
}

export interface SingleColumnTemplateProps {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
}
