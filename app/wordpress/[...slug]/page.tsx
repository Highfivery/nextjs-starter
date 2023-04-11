/**
 * Import Next.js dependencies
 */
import { notFound } from "next/navigation";

/**
 * Import @wordpress dependencies
 */
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import queryPostById from "@/lib/wordpress/posts/queryPostById";
import formatBlockData from "@/functions/gutenberg/formatBlockData";

/**
 * Import internal component dependencies
 */
import Blocks from "@/components/gutenberg/Blocks/Blocks";

/**
 * Import type definitions
 */
import { GutenbergGlobalBlockProps } from "@/types/gutenberg";
import { WordPressPostProps } from "@/types/wordpress/posts";

export default async function Page({ params }: { params: { slug: string } }) {
  let entity;
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  const { page } = (await connector(queryPageById, {
    id: slug,
  })) as WordPressPostProps;
  if (!page) {
    const { post } = (await connector(queryPostById, {
      id: slug,
    })) as WordPressPostProps;
    if (post) {
      entity = post;
    } else {
      notFound();
    }
  } else {
    entity = page;
  }

  const blocks = entity?.blocksJSON
    ? await formatBlockData(JSON.parse(entity?.blocksJSON))
    : [];

  return (
    <>
      <Blocks blocks={blocks as GutenbergGlobalBlockProps[]} />
    </>
  );
}
