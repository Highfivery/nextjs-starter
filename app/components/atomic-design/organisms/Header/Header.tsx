// Import React.js dependencies
import { ReactElement } from "react";

// Import types
import { NavigationItemProps } from "@/components/atomic-design/molecules/Navigation/Navigation";

// Import component dependencies
import Navigation from "@/components/atomic-design/molecules/Navigation/Navigation";

// Import styles
import styles from "./header.module.scss";

/**
 * Render the Header component.
 */
export default function Header({ menu }: HeaderProps): ReactElement {
  return (
    <header>
      <Navigation items={menu} />
    </header>
  );
}

export interface HeaderProps {
  /** Array of menu items. */
  menu?: NavigationItemProps[];
}
