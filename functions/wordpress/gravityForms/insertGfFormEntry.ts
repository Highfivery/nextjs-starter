// Internal dependencies.
import mutationInsertFormEntry from "@/lib/wordpress/gravityForms/mutationInsertFormEntry"
import { processGfFieldValues } from "./processGfFieldValues"

// Process form submission and submit it via graphql
export default async function insertGfFormEntry(
  formId: number | string,
  values: any,
  formData: any
) {

  // Format Gravity form submission data as per the required payload.
  const fieldValues = processGfFieldValues(values, formData)

  // Create a fetch request to submit graphql data
  const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: mutationInsertFormEntry, 
      variables: {
        id: formId,
        fieldValues: fieldValues
    }})
  })  


  const responseData = await response.json(); 

  return responseData.data.submitGfForm
}
