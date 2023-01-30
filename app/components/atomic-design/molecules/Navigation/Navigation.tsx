"use client";

import PropTypes from "prop-types";

// Import React.js dependencies
import { ReactElement, ReactNode } from "react";

// Import Next.js dependencies
import { usePathname } from "next/navigation";

// Import functions
import cn from "classnames";
import isLinkActive from "@/functions/isLinkActive";

// Import component dependencies
import Link from "@/components/atomic-design/atoms/Link";

// Import styles
import styles from "./Navigation.module.scss";

/**
 * Render the NavigationMenu component.
 *
 * Recursively displays a menu and its children.
 */
function NavigationMenu({
  items,
}: {
  items: NavigationItemProps[];
}): ReactElement | null {
  const pathname = usePathname() as string;

  if (!items || !items?.length) {
    return null;
  }

  return (
    <>
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={cn(
              styles[`menu__item`],
              item?.children?.items?.length
                ? styles[`menu__item--has-children`]
                : ""
            )}
          >
            <Link
              href={item.path}
              target={item.target ? item.target : "_self"}
              className={cn(isLinkActive(pathname, item.path) && styles.active)}
              onClick={(e) => {
                item?.onLinkClick && item.onLinkClick(e, index, item);
              }}
            >
              {item.label}
            </Link>

            {(item?.children?.items && item.children.items.length > 0) && (
              <>
                {item?.children?.Title && item.children.Title}
                <ul
                  className={cn(
                    styles["menu"],
                    item?.children?.className ? item?.children?.className : ""
                  )}
                >
                  <NavigationMenu items={item.children.items} />
                </ul>
              </>
            )}
          </li>
        );
      })}
    </>
  );
}

export interface NavigationItemProps {
  /** Item label. */
  label: string;
  /** Item path. */
  path: string;
  /** Link target. */
  target?: string;
  onLinkClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    itemIndex: number,
    item: NavigationItemProps
  ) => void;
  children?: {
    items: NavigationItemProps[];
    className?: string;
    Title?: ReactElement | ReactNode;
  };
}

NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

/**
 * Render the Navigation component.
 */
export default function Navigation({
  items,
  className,
  listClassName,
  ...props
}: NavigationProps): ReactElement {
  return (
    <>
      {!!items?.length && (
        <nav className={cn(styles.navigation, className)} {...props}>
          <ul className={cn(styles.menu, listClassName)}>
            <NavigationMenu items={items} />
          </ul>
        </nav>
      )}
    </>
  );
}

export interface NavigationProps {
  /** Array of menu items. */
  items?: NavigationItemProps[];
  /** Navigation container class name. */
  className?: string;
  /** List container class name. */
  listClassName?: string;
  /** Inline container styles */
  style?: {};
}

Navigation.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object,
};
