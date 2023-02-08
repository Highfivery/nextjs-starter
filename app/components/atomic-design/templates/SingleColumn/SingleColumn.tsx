/**
 * Import React.js dependencies
 */
import React, { ReactElement, ReactNode } from "react";

/**
 * Import type definitions
 */
import { NavigationItemProps } from "@/components/atomic-design/molecules/Navigation/Navigation";

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
export default function Page({ children, menu }: SingleColumnTemplateProps) {
  return (
    <>
      <Header menu={menu} />
      {children}
      <Footer menu={menu} />
    </>
  );
}

export interface SingleColumnTemplateProps {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Menu used in the header & footer. */
  menu?: NavigationItemProps[];
}
