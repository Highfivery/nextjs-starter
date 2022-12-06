// Import React.js dependencies
import { ReactElement } from "react";

// Import types
import PropTypes from "prop-types";
import { NavigationItemProps } from "@/components/molecules/Navigation/Navigation";

// Import component dependencies
import Navigation from "@/components/molecules/Navigation/Navigation";

// Import styles
import styles from "./Footer.module.scss";

/**
 * Render the Footer component.
 */
export default function Footer({ menu }: FooterProps): ReactElement {
  return (
    <footer>
      <Navigation menu={menu} />
    </footer>
  );
}

export interface FooterProps {
  menu?: NavigationItemProps[];
}

Footer.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};
