// Import Next.js dependencies
import { notFound } from "next/navigation";

// Import WordPress dependencies
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import formatBlockData from "@/functions/wordpress/blocks/formatBlockData";

// Import component dependencies
import Blocks from "@/components/wordpress/Blocks/Blocks";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) {
  const { page } = await connector(queryPageById, { id: params?.slug });
  if (!page) {
    notFound();
  }

  const blocks = page?.blocksJSON
    ? await formatBlockData(JSON.parse(page?.blocksJSON))
    : [];

  return <Blocks blocks={blocks} />;
}

/*export async function generateStaticParams() {
  return posts?.paths?.map((post) => ({
    slug: post.params.slug[0],
  }));
}*/
