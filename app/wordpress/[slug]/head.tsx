// Import WordPress dependencies
import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";

// Import component dependencies
import Meta from "@/components/atomic-design/molecules/Meta/Meta";

export default async function Head({ params }: { params: { slug: string } }) {
  // Retreive dynamic page data
  let page = await getPostTypeStaticProps(params, "page");

  return <Meta seo={page?.props?.post?.seo} />;
}
