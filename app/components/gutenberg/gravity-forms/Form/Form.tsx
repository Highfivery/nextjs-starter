/**
 * Import internal dependencies
 */
import getGfFormById from "@/functions/wordpress/gravityForms/getGfFormById";

export default async function Form(props: { formId: string }) {
  const { formId } = props;

  const form = await getGfFormById(formId);
  console.log(form);
  /*try {
    const template = require(`@/components/gutenberg/gravity-forms/form-${formId}`);
  } catch (ex) {
    return (
      <>
        Unable to find form template: $
        {`@/components/gutenberg/gravity-forms/form-${formId}`}
      </>
    );
  }*/

  return <>FORM</>;
}
