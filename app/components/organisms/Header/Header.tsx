// Import React.js dependencies
import { ReactElement } from "react";

// Import types
import PropTypes from "prop-types";
import { NavigationItemProps } from "app/components/molecules/Navigation/Navigation";

// Import component dependencies
import Navigation from "app/components/molecules/Navigation/Navigation";

// Import styles
import styles from "./header.module.scss";

/**
 * Render the Header component.
 */
export default function Header({ menu }: HeaderProps): ReactElement {
  return (
    <header>
      <Navigation menu={menu} />
    </header>
  );
}

export interface HeaderProps {
  /** Array of menu items. */
  menu?: NavigationItemProps[];
}

Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};
