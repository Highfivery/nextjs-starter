/**
 * Import external dependencies
 */
import { gql } from "graphql-request";

/**
 * Import internal dependencies
 */
import fieldProps from "./fieldProps";

/**
 * Partial: retrieve basic data on all form fields.
 */
function getFormFieldsPartial() {
  return (
    Object.keys(fieldProps)
      // Build individual query partials by field type.
      .map(
        (field) => `
          ... on ${field} {
            ${fieldProps[field]}
          }
        `
      )
      // Connect query partial pieces.
      .join("")
  );
}

// Fragment: retrieve single form fields.
const singleFormFragment = gql`
  fragment SingleFormFields on GfForm {
    formId
    title
    description
    formFields {
      edges {
        node {
          id
          type
           ${getFormFieldsPartial()}
        }
      }
    }
  }
`;

const queryFormById = gql`
  query GET_FORM_BY_ID($id: ID!) {
    gfForm(id: $id, idType: DATABASE_ID) {
      ...SingleFormFields
    }
  }
  ${singleFormFragment}
`;

export default queryFormById;
