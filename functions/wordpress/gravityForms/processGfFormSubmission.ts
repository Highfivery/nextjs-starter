// Internal dependencies.
import mutationSubmitForm from "@/lib/wordpress/gravityForms/mutationSubmit"
import { formatGFSubmissionData } from "./formatGFSubmissionData"

export default async function processGfFormSubmission(
  formId: number | string,
  values: any,
  formData: any
) {

  // Format Gravity form submission data as per the required payload.
  const fieldValues = formatGFSubmissionData(values, formData)

  // Create a fetch request to submit graphql data
  const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: mutationSubmitForm, 
      variables: {
        id: formId,
        fieldValues: fieldValues
    }})
  })  


  const responseData = await response.json(); 

  return responseData.data.submitGfForm
}
