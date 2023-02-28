// Component dependencies
import { Select as SelectList, Form } from "antd";
import getGfFieldId from "@/functions/wordpress/gravityForms/getGfFieldId";

const { Option } = SelectList;

// Types
interface SelectProps {
  selectChoices: {
    isSelected: string;
    text: string;
    value: string;
  }[];
  label: string;
  errorMessage?: string;
  visibility?: string;
  isRequired?: boolean;
  description?: string;
  placeholder?: string;
  id: number;
}

export const Select = ({
  label,
  selectChoices,
  errorMessage,
  placeholder,
  isRequired,
  visibility,
  id,
  description,
}: SelectProps) => {
  // unique id for label.
  const uniqueId = getGfFieldId(id) as string;

  // manage input visibility based on value
  const isHidden = visibility === "VISIBLE" ? false : true;

  return (
    <Form.Item
      name={uniqueId}
      label={label}
      hasFeedback
      rules={[{ required: isRequired, message: errorMessage ?? "" }]}
      hidden={isHidden}
      extra={description}
    >
      <SelectList placeholder={placeholder}>
        {selectChoices?.length &&
          selectChoices.map((selectChoice, index) => (
            <Option value={selectChoice.value} key={index}>
              {selectChoice.text}
            </Option>
          ))}
      </SelectList>
    </Form.Item>
  );
};
