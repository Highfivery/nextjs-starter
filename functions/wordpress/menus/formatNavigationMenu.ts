/**
 * Import type definitions
 */
import { WordPressMenuItemProps } from "@/types/wordpress/menus";

export default function formatNavigationMenu(
  menuItems: WordPressMenuItemProps[]
): {} {
  return menuItems?.map((item: WordPressMenuItemProps) => {
    const { children, ...itemProps } = item;

    return {
      ...itemProps,
      children: children
        ? {
            items: formatNavigationMenu(children),
          }
        : [],
    };
  });
}
