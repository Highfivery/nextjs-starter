import getFrontendPage from "@/functions/wordpress/postTypes/getFrontendPage";

// Import React.js dependencies
import React, { ReactElement, ReactNode } from "react";

// Import types
import PropTypes from "prop-types";

// Import component dependencies
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";

// Import styles
import styles from "./page.module.scss";

/**
 * Render the Header component.
 */
export default async function Page({
  children,
}: PageProps): Promise<ReactElement> {
  const frontpageData = await getFrontendPage("/");

  return (
    <>
      <Header menu={frontpageData?.menus?.primary_menu} />
      {children}
      <Footer menu={frontpageData?.menus?.primary_menu} />
    </>
  );
}

export interface PageProps {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]).isRequired,
};
