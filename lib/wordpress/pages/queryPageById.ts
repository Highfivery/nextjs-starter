// Import dependencies
import { gql } from "graphql-request";
import defaultPageData from "../_query-partials/defaultPageData";
import globalPostFields from "../_query-partials/globalPostFields";

// Retrieve page by specified identifier.
const queryPageById = gql`
  query GET_PAGE_BY_ID(
    $id: ID!
    $idType: PageIdType = URI
  ) {
    page(id: $id, idType: $idType) {
      ${defaultPageData}
      ${globalPostFields}
      blocksJSON
    }
  }
`;

export default queryPageById;
