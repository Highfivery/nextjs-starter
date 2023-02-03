/**
 * Import Next.js dependencies
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

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) {
  const { page } = await connector(queryPageById, { id: params?.slug });
  if (!page) {
    // Not found.
    return <>Not found</>;
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
