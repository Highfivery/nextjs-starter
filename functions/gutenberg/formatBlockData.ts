// Import TypeScript definitions
import { GutenbergGlobalBlockProps } from "@/types/gutenberg";

/**
 * Creates a hierarchical array from the WP GraphQL Gutenberg blocks response.
 */
export default async function formatBlockData(
  blocks: GutenbergGlobalBlockProps[] | undefined
): Promise<GutenbergGlobalBlockProps[]> {
  if (!blocks || !blocks.length) {
    return [];
  }

  /**
   * using Promise.all() would not be the best option since the innerBlocks of each block may be
   * dependent on each other, so the function should wait for the innerBlocks to be formatted before
   * returning the final data.
   */
  const formattedData: GutenbergGlobalBlockProps[] = [];
  for (const block of blocks) {
    const { name, attributes, innerBlocks } = block;
    const innerBlocksFormatted = (await formatBlockData(
      innerBlocks
    )) as GutenbergGlobalBlockProps[];
    formattedData.push({ name, attributes, innerBlocks: innerBlocksFormatted });
  }
  return formattedData;
}
