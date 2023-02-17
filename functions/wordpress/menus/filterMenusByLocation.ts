import formatHeirarchialMenu from "./formatHeirarchialMenu";


// @TODO: Set proper types for menu. 
export default function filterMenusByLocation(
  menus: any[] | undefined,
  locations: any[]
) {
  if (typeof menus === "undefined") {
    return undefined;
  }

  const data = {} as any;

  // Loop each menu location.
  locations.forEach((location) => {
    // Convert dashes to underscores.
    const locationName = location.replace(/-/g, "_");

    // Filter menus array by location and assign to new object.
    const wpmenu = menus.filter(function (menu) {
      return menu["locations"].includes(locationName.toUpperCase());
    });

    // Format the returned menu.
    data[locationName] = formatHeirarchialMenu(wpmenu[0]?.menuItems?.nodes);
  });

  return data;
}
