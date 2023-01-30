// Import Next.js dependencies
import { notFound } from "next/navigation";

// Import WordPress dependencies
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import formatBlockData from "@/functions/gutenberg/formatBlockData";

// Import component dependencies
import Blocks from "@/components/gutenberg/Blocks/Blocks";

// Import TypeScript definitions
import { GutenbergBlockProps } from "@/types/gutenberg";

export default async function Page() {
  // @TODO: Looking at the console, it appears this component is getting called twice. Likely for a good reason, but would like to find out why.
  const { page } = await connector(queryPageById, { id: "/" });
  if (!page) {
    // Not found.
    return <>Not found</>;
  }

  const blocks = page?.blocksJSON
    ? await formatBlockData(JSON.parse(page?.blocksJSON))
    : [];

  return <Blocks blocks={blocks as GutenbergBlockProps[]} />;
}
