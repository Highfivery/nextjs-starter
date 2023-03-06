// @TODO: Setup the missing types and replace the usage of any as per gravity form schema.
export const formatGFSubmissionData = (values: any, formData: any) => {
  const fields = formData?.formFields?.edges;

  if (!(fields.length > 0)) {
    return null;
  }

  // Format the field values as per the required gravity form submission schema
  const fieldValues: {
    id: number;
    value?: any;
    checkboxValues?: any;
  }[] = Object.keys(values).map((key, index) => {
    const value = values[key];
    return {
      id: parseInt(key.replaceAll("field-", "")),
      value: value.toString(),
    };
  });

  const formFields = formData.formFields.edges;
  formFields.forEach((formField: { node: any }) => {
    const { type, id } = formField.node;

    // Determine checkbox input IDs based on available data.
    if (type === "CHECKBOX") {
      const filteredValue = fieldValues.find(
        (fielValue) => fielValue.id === id
      );

      if (filteredValue) {
        const filteredValueIndex = fieldValues.indexOf(filteredValue);
        const selectedValues = filteredValue.value.split(",");
        const checkboxInputs = formField.node.inputs;
        const checkboxChoices = formField.node.checkboxChoices;

        // filter out the selected choices from the checkboxChoices array.
        // This will give us an array filteredChoices that contains only the choices that are selected by the user.
        const filteredChoices = checkboxChoices.filter(
          (checkboxChoice: { value: unknown }) =>
            selectedValues.includes(checkboxChoice.value)
        );

        // Filter out the input elements that correspond to the selected choices.
        // This will give us an array filteredInputs that contains only the input elements that correspond to the selected choices.
        const filteredInputs = checkboxInputs.filter(
          (checkboxInput: { label: string }) =>
            filteredChoices.some(
              (filteredChoice: { text: string }) =>
                filteredChoice.text === checkboxInput.label
            )
        );
        // Create a mapping between the text property and the value property of the elements in filteredChoices.
        // This will give us an object filteredChoicesMap that maps the text property to the corresponding value property.
        const filteredChoicesMap = filteredChoices.reduce(
          (
            map: { [x: string]: any },
            choice: { text: string | number; value: any }
          ) => {
            map[choice.text] = choice.value;
            return map;
          },
          {}
        );

        // Finally, we create a new array filteredInputsMap as per the gravity form submission schema
        const filteredInputsMap = filteredInputs.map(
          (input: { id: number | string; label: string | number }) => {
            return {
              inputId: parseFloat(input.id.toString()),
              value: filteredChoicesMap[input.label],
            };
          }
        );

        fieldValues[filteredValueIndex] = {
          id: id,
          checkboxValues: filteredInputsMap,
        };
      }
    }
  });

  return fieldValues;
};
