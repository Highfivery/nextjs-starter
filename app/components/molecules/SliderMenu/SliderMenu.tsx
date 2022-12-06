// Import React.js dependencies
import { ReactNode, ReactElement, useState } from "react";

// Import functions
import cn from "classnames";

// Import types
import PropTypes from "prop-types";
import { NavigationItemProps } from "../Navigation/Navigation";

// Import component dependencies
import Navigation from "../Navigation";

// Import styles
import styles from "./SliderMenu.module.scss";

/**
 * Render the SliderMenu component.
 */
export default function SliderMenu(props: SliderMenuProps) {
  // Component status
  const [activeLevelKey, setActiveLevelKey] = useState("0");
  const [currentLevel, setCurrentLevel] = useState(0);

  // Component helpers
  const parseItems = (items: NavigationItemProps[], levelKey: string = "0") => {
    const newItems = items.map((item, itemIndex) => {
      const nextLevelKey = `${levelKey}-${itemIndex}`;

      if (item?.children?.items?.length) {
        item.children.items.push({
          label: "Back",
          path: "/",
          onLinkClick: (e, index, item) => {
            e.preventDefault();
            console.log(currentLevel);
            setCurrentLevel(currentLevel - 1);
            setActiveLevelKey(nextLevelKey);
          },
        });

        item.children.className = cn(
          styles["slider-menu-list"],
          activeLevelKey.startsWith(nextLevelKey) ||
            activeLevelKey === nextLevelKey
            ? styles["slider-menu-list--active"]
            : ""
        );
        item.children.Title = (
          <>
            <button
              onClick={(e) => {
                setActiveLevelKey(nextLevelKey);
                setCurrentLevel(currentLevel + 1);
              }}
            >
              Next - {nextLevelKey}
            </button>
          </>
        );
        item.children.items = parseItems(item.children.items, nextLevelKey);
      }

      return item;
    });

    return newItems;
  };

  const parsedItems = parseItems(props.items);

  return (
    <div className={cn(styles["slider-menu"], props?.className)}>
      Active: {activeLevelKey}
      <br />
      Current: {currentLevel}
      <Navigation
        items={parsedItems}
        listClassName={cn(
          styles["slider-menu-list"],
          activeLevelKey === "" ? styles["slider-menu-list--active"] : ""
        )}
        style={{ left: `${currentLevel * -100}%` }}
      />
    </div>
  );
}

export interface SliderMenuProps {
  /** Menu items. */
  items: NavigationItemProps[];
  /** Optional classNames. */
  className?: string;
}

SliderMenu.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};
