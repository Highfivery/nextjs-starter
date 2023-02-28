"use client";

/**
 * Import React dependencies
 */
import { useState, useEffect } from "react";
import React from "react";

/**
 * Import antd dependencies
 */
import type { FormInstance } from "antd/es/form";
import { Form as FormComponent, Button } from "antd";

/**
 * Import internal dependencies
 */
import getGfFormById from "@/functions/wordpress/gravityForms/getGfFormById";
import AntForm from "./AntForm";

export default function Form(props: { formId: string }) {
  const { formId } = props;

  // Form state values
  const [formData, setFormData] = useState([]);
  const formRef = React.useRef<FormInstance>(null);

  // On form Submit.
  // @TODO: Add type for function parameter
  const onFinish = (values: any) => {
    // @TODO: Add form submission functionality
  };
  

  // Form Layout for Fields
  // Refer Ant docs for the layout options https://ant.design/components/form
  const layout = {
    layout: 'vertical', 
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
  };

  // Form Tail Layout(Anthing that gets rendered as children)
  // Refer Ant docs for the layout options https://ant.design/components/form
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  // Form styles.
  const style = {};

  useEffect(() => {
    const fetchData = async () => {
      const response = await getGfFormById(formId);
      if (response) {
        setFormData(response.gfForm);
      }
    };

    fetchData();
  }, [formId]);


  /**
   * Note: This is just an example for how you can dynamically render gravity form fields.
   * Dynamically changing the form Layout is not supported yet. 
   * Niether are all the field Options supported yet. 
   * If you need a more granular
   * control over the form layout we recommend using this file and 
   * creating a switch statement to render the form based on unique form parameter like formID.
   */

  return (
    <AntForm
      formData={formData}
      formRef={formRef}
      onFinish={onFinish}
      style={style}
      layout={layout}
    >
      <FormComponent.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormComponent.Item>
    </AntForm>
  );
}
