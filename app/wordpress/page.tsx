// Import Next.js dependencies
import { notFound } from "next/navigation";

// Import WordPress dependencies
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import formatBlockData from "@/functions/wordpress/blocks/formatBlockData";

// Import component dependencies
import Blocks from "@/components/wordpress/Blocks/Blocks";

// Import styles
import "@/styles/wordpress/style.scss";
import "@wordpress/block-library/src/button/style.scss";

export default async function Page() {
  const { page } = await connector(queryPageById, { id: "/" });
  if (!page) {
    notFound();
  }

  const blocks = page?.blocksJSON
    ? await formatBlockData(JSON.parse(page?.blocksJSON))
    : [];

  return <Blocks blocks={blocks} />;
}
