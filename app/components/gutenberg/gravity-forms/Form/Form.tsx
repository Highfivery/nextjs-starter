"use client";

/**
 * Import React dependencies
 */
import { useState, useEffect } from "react";
import React from "react";

/**
 * Import antd dependencies
 */
import { Form as FormComponent, Button, message } from "antd";

/**
 * Import Component dependencies
 */
import AntForm from "./AntForm";
import getGfFormById from "@/functions/wordpress/gravityForms/getGfFormById";
import processGfFormSubmission from "@/functions/wordpress/gravityForms/processGfFormSubmission";

export default function Form(props: { formId: string }) {
  const { formId } = props;

  // Form state values
  const [formData, setFormData] = useState([]);
  const [form] = FormComponent.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  // Form success and error message.
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your form was successfully submitted',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Something went wrong please try again',
    });
  };


  // On form Submit.
  // @TODO: Add type for function parameter
  const onFinish = async (values: any) => {
    setLoading(true)
    const response = await processGfFormSubmission(formId, values, formData);
    /**
     * @TODO: Find a way to add support for server side validation error if possible.
     * Look at Remix framework and check if we can implement something similar for next forms.
     */
    if (response?.errors?.length > 0) {
      // Set form error as per the requirement.
      error()
    } else {
      // Navigate user to success page or set a success message as required
      success()
      form.resetFields();
    }
    setLoading(false)
  };

  // Form Layout for Fields
  // Refer Ant docs for the layout options https://ant.design/components/form
  const layout = {
    layout: "vertical",
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
      form={form}
      onFinish={onFinish}
      style={style}
      layout={layout}
    >
      {contextHolder}
      <FormComponent.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </FormComponent.Item>
    </AntForm>
  );
}
