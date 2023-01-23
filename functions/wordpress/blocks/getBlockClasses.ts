// Import types
import { BlockProps } from "@/types/wordpress/blocks";

/**
 * Converts WP GraphQL Gutenberg blocks attributes response to WP classes.
 */
export default function getBlockClasses(block: BlockProps) {
  //@TODO: Needs a type annotation of combined type since block variable can have any type assigned. 
  const { attributes }: any = block;

  const classes = [];

  if (attributes?.visibility) {
    for (const [screenSize] of Object.entries(attributes.visibility)) {
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
