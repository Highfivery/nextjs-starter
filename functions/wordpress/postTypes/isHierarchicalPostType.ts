import { hierarchicalPostTypes } from "@/lib/wordpress/_config/postTypes";

export default function isHierarchicalPostType(postType: string) {
  return hierarchicalPostTypes.includes(postType);
}
