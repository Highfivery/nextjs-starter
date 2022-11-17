// Import WordPress dependencies
import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";

// Import component dependencies
import Meta from "@/components/molecules/Meta/Meta";

export default async function Head() {
  // Retreive dynamic page data
  let page = await getPostTypeStaticProps({ slug: "/" }, "page");
  return <Meta seo={page?.props?.post?.seo} />;
}
