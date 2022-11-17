// Import Next.js dependencies
import { notFound } from "next/navigation";

// Import WordPress dependencies
import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";

// Import component dependencies
import RichText from "@/components/atoms/RichText";

export default async function Page() {
  // Retreive dynamic page data
  let page = await getPostTypeStaticProps({ slug: "/" }, "page");
  if (page.notFound) {
    notFound();
  }

  return (
    <>
      {page?.props?.post?.content && (
        <RichText>{page.props.post.content}</RichText>
      )}
    </>
  );
}
