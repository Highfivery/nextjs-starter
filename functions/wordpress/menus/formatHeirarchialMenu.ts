/**
 * Format a flat list WP nav menu into a heirarchial list.
 *
 * @param  {Array}  data             The array containing menu data.
 * @param  {object} keys             Object keys.
 * @param  {string} keys.idKey       ID key.
 * @param  {string} keys.parentKey   Parent key.
 * @param  {string} keys.childrenKey Children key.
 * @return {Array}                   Array containing a updated menu list.
 */
export default function formatHeirarchialMenu(
  data: {
    [key: string]: [];
  }[] = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
) {
  const tree: {}[] = [];
  const childrenOf: { [key: string]: {} } = {};

  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;

    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
}
