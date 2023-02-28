// Define Gravity Form field names and unique props.

/** Ts tip: Here, we are using the Record utility type to create
 * a type that describes an object with string keys and string values.
 **/
const fieldProps: Record<string, string> = {
  AddressField: `
    label
    adminLabel
    addressType
    defaultCountry
    defaultProvince
    defaultState
    description
    errorMessage
    inputs {
      id
      label
    }
    isRequired
    labelPlacement
    subLabelPlacement
    visibility
  `,
  NameField: `
    label
    adminLabel
    description
    errorMessage
    inputs {
      ... on NameInputProperty {
        id
        name
        key
        label
        customLabel
        placeholder
        isHidden
      }
    }
    isRequired
    visibility
  `,
  TextField: `
    label
    adminLabel
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    maxLength
    placeholder
    visibility
  `,
  TextAreaField: `
    label
    adminLabel
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    maxLength
    placeholder
    size
    visibility
  `,
  CheckboxField: `
  label
  adminLabel
  checkboxChoices: choices {
    ... on CheckboxFieldChoice {
      isSelected
      text
      value
    }
  }
  description
  errorMessage
  inputName
  isRequired
  visibility
`,
  SelectField: `
  label
  adminLabel
  selectChoices: choices {
    ... on SelectFieldChoice {
      isSelected
      text
      value
    }
  }
  description
  errorMessage
  inputName
  isRequired
  placeholder
  size
  visibility
`,
  NumberField: `
    label
    adminLabel
    defaultValue
    description
    errorMessage
    inputName
    isRequired
    numberFormat
    placeholder
    rangeMax
    rangeMin
    size
    visibility
  `,
  RadioField: `
    label
    adminLabel
    radioChoices: choices {
      ... on RadioFieldChoice {
        isSelected
        text
        value
      }
    }
    description
    errorMessage
    inputName
    isRequired
    visibility
`,
};

export default fieldProps;
