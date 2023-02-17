// Types

// Menu Object key value.
type MenuDataItem = { [key: string]: unknown };

// The array containing menu data.
type MenuData = MenuDataItem[];

type MenuOptions = {
  // id key
  idKey?: string;
  // parent key
  parentKey?: string;
  // children key
  childrenKey?: string;
};

/**
 * Format a flat list WP nav menu into a heirarchial list.
 */
export default function formatHeirarchialMenu(
  data: MenuData = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" }: MenuOptions = {}
) {
  const tree: MenuData = [];
  const childrenOf: { [key: string]: MenuDataItem[] } = {};

  data.forEach((item) => {
    const newItem = { ...item };
    const id = newItem[idKey] as string;
    const parentId = newItem[parentKey] as string;

    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
}
