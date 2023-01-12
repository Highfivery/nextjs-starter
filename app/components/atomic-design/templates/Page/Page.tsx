// Import React.js dependencies
import React, { ReactElement, ReactNode } from "react";

// Import types
import { NavigationItemProps } from "@/components/atomic-design/molecules/Navigation/Navigation";
import PropTypes from "prop-types";

// Import component dependencies
import Header from "@/components/atomic-design/organisms/Header/Header";
import Footer from "@/components/atomic-design/organisms/Footer/Footer";

// Import styles
import styles from "./page.module.scss";

/**
 * Render the Header component.
 */
export default function Page({ children, menu }: PageProps) {
  return (
    <>
      <Header menu={menu} />
      {children}
      <Footer menu={menu} />
    </>
  );
}

export interface PageProps {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Menu used in the header & footer. */
  menu?: NavigationItemProps[];
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]).isRequired,
  menu: PropTypes.array,
};
