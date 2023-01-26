// Import TypeScript definitions
import { GutenbergGlobalBlockProps } from "@/types/gutenberg";

/**
 * Creates a hierarchical array from the WP GraphQL Gutenberg blocks response.
 * @TODO: Fix TypeScript errors.
 */
export default async function formatBlockData(
  blocks: GutenbergGlobalBlockProps[] | undefined
) {
  if (!blocks || !blocks.length) {
    return [];
  }

  return await Promise.all(
    blocks.map(async (block) => {
      const { name, attributes, innerBlocks } = block;

      const innerBlocksFormatted = await formatBlockData(innerBlocks);

      return { name, attributes, innerBlocks: innerBlocksFormatted };
    })
  );
}
