// Import TypeScript definitions
import { GutenbergGlobalBlockProps, GutenbergBlockProps } from "@/types/gutenberg";

/**
 * Creates a hierarchical array from the WP GraphQL Gutenberg blocks response.
 */
export default async function formatBlockData(
  blocks: GutenbergGlobalBlockProps[] | undefined
): Promise<GutenbergGlobalBlockProps[]> {
  if (!blocks || !blocks.length) {
    return [];
  }


  const formattedData: GutenbergGlobalBlockProps[]  = [];
  for (const block of blocks) {
    const { name, attributes, innerBlocks } = block;
    const innerBlocksFormatted= await formatBlockData(innerBlocks) as GutenbergBlockProps[];
    formattedData.push({ name, attributes, innerBlocks: innerBlocksFormatted });
  }
  return formattedData;
}
