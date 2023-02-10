/**
 * Import external dependencies
 */
import { gql } from "graphql-request";

/**
 * Import query partials
 */
import defaultPageData from "../_query-partials/defaultPageData";
import globalPostFields from "../_query-partials/globalPostFields";
import seoPostFields from "../_query-partials/seoPostFields";
import authorPostFields from "../_query-partials/authorPostFields";
import featuredImagePostFields from "../_query-partials/featuredImagePostFields";

export const singlePageFragment = gql`
fragment SinglePageFields on Page {
  ${globalPostFields}
  blocksJSON
  ${seoPostFields}
  ${authorPostFields}
  ${featuredImagePostFields}
}
`;

// Retrieve page by specified identifier.
const queryPageById = gql`
  query GET_PAGE_BY_ID(
    $id: ID!
    $idType: PageIdType = URI
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    page(id: $id, idType: $idType) {
      ...SinglePageFields
      isPostsPage
      revisions(first: 1, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            ${globalPostFields}
            blocksJSON
          }
        }
      }
    }
  }
  ${singlePageFragment}
`;

export default queryPageById;
