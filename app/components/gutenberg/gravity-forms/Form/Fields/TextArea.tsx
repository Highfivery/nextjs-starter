// Component dependencies
import { Form, Input } from "antd";
import getGfFieldId from "@/functions/wordpress/gravityForms/getGfFieldId";

// Types
interface TextAreaProps {
  label: string;
  errorMessage: string;
  visibility: string;
  maxLength: number;
  isRequired: boolean;
  placeholder: string;
  id: number;
  description?: string;
}

export const TextArea = ({
  errorMessage,
  label,
  maxLength,
  visibility,
  isRequired,
  placeholder,
  id,
  description,
}: TextAreaProps) => {
  // unique id for label.
  const uniqueId = getGfFieldId(id) as string;

  // manage input visibility based on value
  const visbile = visibility === "VISIBLE" ? false : true;

  return (
    <Form.Item
      label={label}
      htmlFor={uniqueId}
      name={uniqueId}
      rules={[{ required: isRequired, message: errorMessage ?? "" }]}
      hidden={visbile}
      extra={description}
    >
      <Input.TextArea maxLength={maxLength} placeholder={placeholder} />
    </Form.Item>
  );
};
