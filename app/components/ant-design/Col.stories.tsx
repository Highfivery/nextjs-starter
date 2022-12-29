// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { Row, Col as ColComponent, ConfigProvider } from "antd";

export default {
  title: "Ant Design System/Components/Layout/Grid/Col",
  component: ColComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/grid#col' target='_blank'>Col</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    flex: {
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "Flex layout style.",
      control: "string",
      table: {
        type: {
          summary: "string | number",
        },
        defaultValue: { summary: undefined },
      },
    },
    offset: {
      type: { name: "number", required: false },
      defaultValue: 0,
      description: "The number of cells to offset Col from the left.",
      control: "number",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 0 },
      },
    },
    order: {
      type: { name: "number", required: false },
      defaultValue: 0,
      description: "Raster order.",
      control: "number",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 0 },
      },
    },
    pull: {
      type: { name: "number", required: false },
      defaultValue: 0,
      description: "The number of cells that raster is moved to the left.",
      control: "number",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 0 },
      },
    },
    push: {
      type: { name: "number", required: false },
      defaultValue: 0,
      description: "The number of cells that raster is moved to the right.",
      control: "number",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 0 },
      },
    },
    span: {
      type: { name: "number", required: false },
      defaultValue: "none",
      description:
        "Raster number of cells to occupy, 0 corresponds to <code>display: none</code>.",
      control: "number",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "none" },
      },
    },
    xs: {
      type: { name: "number", required: false },
      defaultValue: undefined,
      description:
        "<code>screen < 576px</code> and also default setting, could be a span value or an object containing above props.",
      control: "object",
      table: {
        type: {
          summary: "number | object",
        },
        defaultValue: { summary: undefined },
      },
    },
    md: {
      type: { name: "number", required: false },
      defaultValue: undefined,
      description:
        "<code>screen < 768px</code> and also default setting, could be a span value or an object containing above props.",
      control: "object",
      table: {
        type: {
          summary: "number | object",
        },
        defaultValue: { summary: undefined },
      },
    },
    lg: {
      type: { name: "number", required: false },
      defaultValue: undefined,
      description:
        "<code>screen < 992px</code> and also default setting, could be a span value or an object containing above props.",
      control: "object",
      table: {
        type: {
          summary: "number | object",
        },
        defaultValue: { summary: undefined },
      },
    },
    xg: {
      type: { name: "number", required: false },
      defaultValue: undefined,
      description:
        "<code>screen < 1200px</code> and also default setting, could be a span value or an object containing above props.",
      control: "object",
      table: {
        type: {
          summary: "number | object",
        },
        defaultValue: { summary: undefined },
      },
    },
    xxl: {
      type: { name: "number", required: false },
      defaultValue: undefined,
      description:
        "<code>screen < 1600px</code> and also default setting, could be a span value or an object containing above props.",
      control: "object",
      table: {
        type: {
          summary: "number | object",
        },
        defaultValue: { summary: undefined },
      },
    },
  },
} as ComponentMeta<typeof ColComponent>;

const Template: ComponentStory<typeof ColComponent> = (args) => {
  const { theme, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <Row>
        <ColComponent {...props}>
          Maecenas sed diam eget risus varius blandit sit amet non magna.
          Maecenas faucibus mollis interdum.
        </ColComponent>
      </Row>
    </ConfigProvider>
  );
};

export const Col = Template.bind({});
