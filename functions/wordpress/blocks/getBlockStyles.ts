// Import functions
import convertVarToCss from "../convertVartoCss";

// Import types
import { CoreBlockProps } from "@/types/wordpress/blocks";

/**
 * Converts a WP block response attributes to inline styles
 */
export default function getBlockStyles(
  attributes: Omit<CoreBlockProps, "innerBlocks" | "name">
) {
  return false;
}
