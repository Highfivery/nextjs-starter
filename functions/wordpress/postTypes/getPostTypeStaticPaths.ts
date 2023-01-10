// Import library dependencies
import { postTypes } from "@/lib/wordpress/_config/postTypes";

// Import function dependencies
import isValidPostType from "./isValidPostType";
import isHierarchicalPostType from "./isHierarchicalPostType";

export default async function getPostTypeStaticPaths(postType) {
  if (!postType || !isValidPostType(postType)) {
    return null;
  }

  // Retrieve post type plural name.
  const pluralName = postTypes[postType].pluralName;

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType);

  // Determine path field based on hierarchy.
  const pathField = isHierarchical || postType === "post" ? "uri" : "slug";
}
