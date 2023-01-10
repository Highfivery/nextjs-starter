// Import Next.js dependencies
import { notFound } from "next/navigation";

// Import WordPress dependencies
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import formatBlockData from "@/functions/wordpress/blocks/formatBlockData";

// Import component dependencies
import Blocks from "@/components/wordpress/Blocks/Blocks";

// Import styles

export default async function Page() {
  // @TODO: Looking at the console, it appears this component is getting called twice. Likely for a good reason, but would like to find out why.
  const { page } = await connector(queryPageById, { id: "/" });
  if (!page) {
    notFound();
  }

  const blocks = page?.blocksJSON
    ? await formatBlockData(JSON.parse(page?.blocksJSON))
    : [];

  return <Blocks blocks={blocks} />;
}
