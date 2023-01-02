export interface MenuItemProps {
  __typename: "MenuItem";
  id: string;
  parentId?: string;
  label: string;
  path: string;
  target?: string;
  children?: MenuItem[];
}
