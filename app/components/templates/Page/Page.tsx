import getFrontendPage from "@/functions/wordpress/postTypes/getFrontendPage";

// Import React.js dependencies
import { ReactElement } from "react";

// Import types
import PropTypes from "prop-types";
import { NavigationItemProps } from "app/components/molecules/Navigation/Navigation";

// Import component dependencies
import Header from "app/components/organisms/Header/Header";
import Footer from "app/components/organisms/Footer/Footer";

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
  menu?: NavigationItemProps[];
  children: React.ReactNode;
}

Page.propTypes = {
  children: PropTypes.object,
};
