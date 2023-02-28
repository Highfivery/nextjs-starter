// Component dependencies
import { Form, Checkbox as CheckboxComponent } from "antd";
import getGfFieldId from "@/functions/wordpress/gravityForms/getGfFieldId";

// Types
interface CheckboxProps {
  checkboxChoices: {
    isSelected: string;
    text: string;
    value: string;
  }[];
  label: string;
  errorMessage?: string;
  visibility?: string;
  isRequired?: boolean;
  description?: string;
  id: number;
}

export const Checkbox = ({
  checkboxChoices,
  label,
  errorMessage,
  visibility,
  isRequired,
  id,
  description,
}: CheckboxProps) => {
  // unique id for label.
  let uniqueId = getGfFieldId(id) as string;

  // manage input visibility based on value
  const isHidden = visibility === "VISIBLE" ? false : true;

  return (
    <Form.Item
      name={uniqueId}
      label={label}
      rules={[{ required: isRequired, message: errorMessage ?? "" }]}
      hidden={isHidden}
      id={uniqueId}
      extra={description}
    >
      <CheckboxComponent.Group>
        {checkboxChoices?.length &&
          checkboxChoices.map((checkboxChoice, index) => (
            <CheckboxComponent value={checkboxChoice.value} key={index}>
              {checkboxChoice.text}
            </CheckboxComponent>
          ))}
      </CheckboxComponent.Group>
    </Form.Item>
  );
};
