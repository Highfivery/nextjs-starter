// Component dependencies
import { Form, Input } from "antd";
import getGfFieldId from "@/functions/wordpress/gravityForms/getGfFieldId";

// Types
interface TextProps {
  label: string;
  errorMessage: string;
  visibility: string;
  maxLength: number;
  isRequired: boolean;
  placeholder: string;
  id: number;
  description?: string;
}

export const Text = ({
  errorMessage,
  label,
  maxLength,
  visibility,
  isRequired,
  placeholder,
  id,
  description,
}: TextProps) => {
  // unique id for label.
  const uniqueId = getGfFieldId(id) as string;

  // manage input visibility based on value
  const isHidden = visibility === "VISIBLE" ? false : true;

  // @TODO: Add more options based on Wordpress data
  return (
    <Form.Item
      label={label}
      htmlFor={uniqueId}
      name={uniqueId}
      rules={[{ required: isRequired, message: errorMessage ?? "" }]}
      hidden={isHidden}
      extra={description}
    >
      <Input
        id={uniqueId}
        maxLength={maxLength > 0 ? maxLength : 255}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};
