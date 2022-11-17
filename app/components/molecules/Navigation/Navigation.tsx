// @TODO: Fix TS warning for pathname ~line 56
// @ts-nocheck

import PropTypes from "prop-types";

// Import React.js dependencies
import { ReactElement } from "react";

// Import Next.js dependencies
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import functions
import cn from "classnames";
import isLinkActive from "@/functions/isLinkActive";

// Import styles
import styles from "./Navigation.module.scss";

/**
 * Render the NavigationMenu component.
 *
 * Recursively displays a menu and its children.
 */
function NavigationMenu({
  menu,
}: {
  menu: NavigationItemProps[];
}): ReactElement | null {
  const pathname = usePathname();

  if (!menu || !menu?.length) {
    return null;
  }

  return (
    <>
      {menu.map((item, index) => {
        const children =
          item.children && item.children.length > 0 ? item.children : "";

        return (
          <li
            key={index}
            className={cn(
              children && children?.length ? styles.hasChildren : ""
            )}
          >
            <Link
              href={item.path}
              target={item.target ? item.target : "_self"}
              className={cn(isLinkActive(pathname, item.path) && styles.active)}
            >
              {item.label}
            </Link>

            {!!children && !!children.length && (
              <ul className={cn(styles.subMenu, styles[`subMenu${index + 1}`])}>
                <NavigationMenu menu={children} />
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}

export interface NavigationItemProps {
  label: string;
  path: string;
  target?: "_blank" | "_self";
  children?: NavigationItemProps[];
}

NavigationMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};

/**
 * Render the Navigation component.
 *
 * @param  {object}  props           Navigation props.
 * @param  {Array}   props.menu      Array of menu items.
 * @param  {string}  props.className Optional classname for the element.
 * @return {Element}                 The Navigation component.
 */
export default function Navigation({
  menu,
  className,
}: NavigationProps): ReactElement {
  return (
    <>
      {!!menu?.length && (
        <nav className={cn(styles.navigation, className)}>
          <ul className={styles.menu}>
            <NavigationMenu menu={menu} />
          </ul>
        </nav>
      )}
    </>
  );
}

export interface NavigationProps {
  /** Array of menu items. */
  menu?: NavigationItemProps[];
  /** Navigation container class name. */
  className?: string;
}

Navigation.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.object),
};
