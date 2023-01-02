import getFrontendPage from "@/functions/wordpress/postTypes/getFrontendPage";

// Import React.js dependencies
import React, { ReactElement, ReactNode } from "react";

// Import functions
import { convertMenu } from "@/components/atomic-design/molecules/Navigation/Navigation.wordpress";

// Import types
import PropTypes from "prop-types";

// Import component dependencies
import Header from "@/components/atomic-design/organisms/Header/Header";
import Footer from "@/components/atomic-design/organisms/Footer/Footer";

// Import styles
import "@/styles/atomic-design/style.scss";
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
      <Header
        menu={convertMenu(frontpageData?.menus?.primary_menu, {
          pathPrefix: "/wordpress",
        })}
      />
      {children}
      <Footer
        menu={convertMenu(frontpageData?.menus?.primary_menu, {
          pathPrefix: "/wordpress",
        })}
      />
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
