import { hierarchicalPostTypes } from "@/lib/wordpress/_config/postTypes";

/**
 * Check if post type is hierarchical.
 *
 * @param  {string}  postType WP post type.
 * @return {boolean}          Whether provided post type is hierarchical.
 */
export default function isHierarchicalPostType(postType: string) {
  return hierarchicalPostTypes.includes(postType);
}
