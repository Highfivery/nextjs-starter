// Import component dependencies
import Meta from "@/components/atomic-design/molecules/Meta/Meta";

export default async function Head({ params }: { params: { slug: string } }) {
  // Retreive dynamic page data
  const page = {};

  return <Meta seo={{}} />;
}
