// React dependencies
import React, { RefObject } from 'react';

// Antd dependenies
import { Form } from 'antd';
import type { FormInstance } from 'antd/es/form';

// Component dependencies
import { Fields } from './Fields/Fields';

// Types
interface AntFormProps  {
  // @TODO: Add types for form data.
  formData?: any;
  formRef: RefObject<FormInstance<any>>;
  // @TODO: Add type for callback argument
  onFinish: (values: any) => void;
  style?: React.CSSProperties;
  layout: {
    [key: string]: {}
  };
  children: React.ReactNode;
}
const AntForm = (props: AntFormProps) => {
  const {formData, formRef, onFinish, style, layout, children} = props;

  const fields = formData?.formFields?.edges;

  return (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      style={style}
      requiredMark={true}
    >
      <Fields fields={fields} />
      {children}
    </Form>
  );
};

export default AntForm;
