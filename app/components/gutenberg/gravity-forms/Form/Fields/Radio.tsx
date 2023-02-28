// Component dependencies
import { Form, Radio as RadioComponent, Typography } from "antd";
import getGfFieldId from "@/functions/wordpress/gravityForms/getGfFieldId";

// Types
interface RadioProps {
  radioChoices: {
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

export const Radio = ({
  label,
  radioChoices,
  errorMessage,
  visibility,
  isRequired,
  description,
  id,
}: RadioProps) => {
  // unique id for label.
  const uniqueId = getGfFieldId(id) as string;

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
      <RadioComponent.Group>
        {radioChoices?.length &&
          radioChoices.map((radioChoice, index) => (
            <RadioComponent value={radioChoice.value} key={index}>
              {radioChoice.text}
            </RadioComponent>
          ))}
      </RadioComponent.Group>
    </Form.Item>
  );
};
