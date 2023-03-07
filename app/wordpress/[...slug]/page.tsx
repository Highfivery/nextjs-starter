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
import Article from "@/components/atomic-design/templates/Article/Article";

/**
 * Import type definitions
 */
import { GutenbergGlobalBlockProps } from "@/types/gutenberg";

export default async function Page({ params }: { params: { slug: string } }) {
  let entity;
  let postType;
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  const { page } = await connector(queryPageById, { id: slug });
  if (!page) {
    const { post } = await connector(queryPostById, { id: slug });
    if (post) {
      entity = post;
      postType = "post";
    } else {
      notFound();
    }
  } else {
    entity = page;
    postType = "page";
  }

  const blocks = entity?.blocksJSON
    ? await formatBlockData(JSON.parse(entity?.blocksJSON))
    : [];

  return (
    <>
      {postType === "page" && (
        <Blocks blocks={blocks as GutenbergGlobalBlockProps[]} />
      )}
      {postType === "post" && (
        <Article article={entity}>
          <Blocks blocks={blocks as GutenbergGlobalBlockProps[]} />
        </Article>
      )}
    </>
  );
}
