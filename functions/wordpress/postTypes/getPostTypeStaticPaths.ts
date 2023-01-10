// Import package dependencies
import { gql } from "graphql-request";

// Import library dependencies
import { postTypes } from "@/lib/wordpress/_config/postTypes";
import connector from "@/lib/wordpress/connector";

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

  const posts = await connector(`query GET_SLUGS {
    ${pluralName}(first: 10000) {
      edges {
        node {
          ${pathField}
        }
      }
    }
  }`).then((response) => response?.[pluralName]?.edges ?? []);

  const paths = posts
    .map((post) => {
      // Trim leading and trailing slashes then split into array on inner slashes.
      const slug = post.node[pathField].replace(/^\/|\/$/g, "");

      return {
        slug,
      };
    })
    // Filter out certain posts with custom routes (e.g., homepage).
    .filter((post) =>
      Array.isArray(post.slug)
        ? !!post.slug.join("/").length
        : !!post.slug.length
    );

  return paths;
}
