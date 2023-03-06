const mutationSubmitForm = `
  mutation submitForm($id: ID!, $fieldValues: [FormFieldValuesInput]!) {
    submitGfForm(input: {
      id: $id
      fieldValues: $fieldValues
    }) {
      entry {
        id
      }
      confirmation {
        type    
        message # The message HTML - if the confirmation type is a "MESSAGE".
        url     # The redirect URL - if the confirmation type is a "REDIRECT".
      }
      errors {
        id # The field that failed validation.
        message
      }
    }
  }
`;

export default mutationSubmitForm;
