// Import types
import { MenuItemProps } from "types/wordpress/menus";
import { NavigationItemProps } from "@/components/molecules/Navigation/Navigation";

// Import functions
import { isRelativeUrl } from "@/functions/isRelativeUrl";

/**
 * Converts a WordPress menu response to a Navigation component menu prop
 */
export function convertMenu(
  menuArray: MenuItemProps[],
  args?: { pathPrefix?: string }
) {
  const convertMenuArray = (
    menuArray: MenuItemProps[]
  ): NavigationItemProps[] => {
    return menuArray.map((item) => {
      return {
        label: item.label,
        path:
          args?.pathPrefix && isRelativeUrl(item.path)
            ? args?.pathPrefix + item.path
            : item.path,
        target: item?.target,
        children: {
          items: item?.children ? convertMenuArray(item.children) : [],
        },
      };
    });
  };

  return convertMenuArray(menuArray);
}
