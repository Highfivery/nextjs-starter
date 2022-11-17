// Import Next.js dependencies
import { notFound } from "next/navigation";

// Import WordPress dependencies
import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";

// Import library dependencies
import parse from "html-react-parser";

// Import component dependencies
import Meta from "app/components/molecules/Meta/Meta";

export default async function Head({ params }: { params: { slug: string } }) {
  // Retreive dynamic page data
  let page = await getPostTypeStaticProps(params, "page");
  if (page.notFound) {
    page = await getPostTypeStaticProps(params, "post");
  }

  if (page.notFound) {
    notFound();
  }

  return <Meta seo={page?.props?.post?.seo} />;
}
