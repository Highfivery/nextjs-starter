// Import dependencies
import { request, Variables } from "graphql-request";

// Retrieve default SEO and other page data.
// @TODO: Improve the type definition for the query & variables parameter
const connector = async (
  query: string,
  variables: Variables | undefined = undefined
) => {
  return await request(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql/`,
    query,
    variables || undefined
  )
    .then((data) => data)
    .catch((error) => {
      return { notFound: true, error: error };
    });
};

export default connector;
