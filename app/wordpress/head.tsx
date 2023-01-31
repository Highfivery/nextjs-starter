// Import WordPress dependencies
import connector from "@/lib/wordpress/connector";
import queryPageById from "@/lib/wordpress/pages/queryPageById";
import formatBlockData from "@/functions/gutenberg/formatBlockData";

// Import internal component dependencies
import Meta from "@/components/atomic-design/molecules/Meta/Meta";

export default async function Head() {
  const { page } = await connector(queryPageById, { id: "/" });

  return <Meta seo={page?.seo} />;
}
