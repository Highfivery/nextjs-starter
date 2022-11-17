// Import Next.js dependencies
import { notFound } from "next/navigation";

// Import WordPress dependencies
import getPostTypeStaticPaths from "@/functions/wordpress/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";

// Import component dependencies
import RichText from "@/components/atoms/RichText";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) {
  // Retreive dynamic page data
  let page = await getPostTypeStaticProps(params, "page");
  if (page.notFound) {
    page = await getPostTypeStaticProps(params, "post");
  }

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

export async function generateStaticParams() {
  const posts = await getPostTypeStaticPaths("page");

  return posts?.paths?.map((post) => ({
    slug: post.params.slug[0],
  }));
}
