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
fragment SinglePostFields on Post {
  ${globalPostFields}
  blocksJSON
  ${seoPostFields}
  ${authorPostFields}
  ${featuredImagePostFields}
}
`;

// Retrieve page by specified identifier.
const queryPostById = gql`
  query GET_POST_BY_ID(
    $id: ID!
    $idType: PostIdType = URI
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    post(id: $id, idType: $idType) {
      ...SinglePostFields
      revisions(first: 1, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            ${globalPostFields}
            blocksJSON
            excerpt
          }
        }
      }
    }
  }
  ${singlePageFragment}
`;

export default queryPostById;
