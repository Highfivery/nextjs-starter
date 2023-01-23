// Import types
import { BlockProps } from "@/types/wordpress/blocks";

/**
 * Converts WP GraphQL Gutenberg blocks attributes response to WP classes.
 */
export default function getBlockClasses(block: BlockProps) {
  const { attributes } = block;

  const classes = [];

  // @TODO: Fix TypeScript errors
  if (attributes?.visibility) {
    for (const [screenSize] of Object.entries(attributes.visibility)) {
      // @TODO: Fix TypeScript error
      if (attributes.visibility[screenSize] === "hidden") {
        classes.push(
          `gutenberg-${screenSize}-${attributes.visibility[screenSize]}`
        );
      }
    }
  } else {
    for (const [screenSize] of Object.entries(attributes)) {
      if (attributes[screenSize].visibility === "hidden") {
        classes.push(
          `gutenberg-${screenSize}-${attributes[screenSize].visibility}`
        );
      }
    }
  }

  return classes;
}
