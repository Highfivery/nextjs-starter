/**
 * Import @next dependencies
 */
import { notFound } from "next/navigation";

/**
 * Import @wordpress dependencies
 */
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import formatBlockData from "@/functions/gutenberg/formatBlockData";

/**
 * Import internal component dependencies
 */
import Blocks from "@/components/gutenberg/Blocks/Blocks";

/**
 * Import type definitions
 */
import { GutenbergGlobalBlockProps } from "@/types/gutenberg";

export default async function Page() {
  // @TODO: Looking at the console, it appears this component is getting called twice. Likely for a good reason, but would like to find out why.
  const { page } = await connector(queryPageById, { id: "/" });
  if (!page) {
    // Not found.
    notFound();
  }

  const blocks = page?.blocksJSON
    ? await formatBlockData(JSON.parse(page?.blocksJSON))
    : [];

  return (
    <>
      <Blocks blocks={blocks as GutenbergGlobalBlockProps[]} />
    </>
  );
}
