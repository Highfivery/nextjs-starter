// Component Dependencies
import { Form, InputNumber } from "antd";
import getGfFieldId from "@/functions/wordpress/gravityForms/getGfFieldId";

// Types
interface NumberProps {
  label: string;
  errorMessage: string;
  visibility: string;
  isRequired: boolean;
  rangeMax?: number;
  rangeMin?: number;
  id: number;
  description?: string;
}

export const Number = ({
  errorMessage,
  label,
  visibility,
  isRequired,
  rangeMax,
  rangeMin,
  id,
  description,
}: NumberProps) => {
  // unique id.
  let uniqueId = getGfFieldId(id) as string;

  // manage input visibility based on value
  const isHidden = visibility === "VISIBLE" ? false : true;

  return (
    <Form.Item
      colon={false}
      label={label}
      htmlFor={uniqueId}
      name={uniqueId}
      rules={[{ required: isRequired, message: errorMessage ?? "" }]}
      hidden={isHidden}
      extra={description}
    >
      <InputNumber min={rangeMin} max={rangeMax} id={uniqueId} />
    </Form.Item>
  );
};
