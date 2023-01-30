// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { Col, Row as RowComponent, ConfigProvider } from "antd";

export default {
  title: "Ant Design/Layout/Grid/Row",
  component: RowComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/grid#row' target='_blank'>Row</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    align: {
      type: { name: "string", required: false },
      description: "Vertical alignment.",
      control: "select",
      options: ["top", "middle", "bottom", "stretch"],
      table: {
        type: {
          summary:
            "top | middle | bottom | stretch | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'top' | 'middle' | 'bottom' | 'stretch'}",
        },
        defaultValue: { summary: "top" },
      },
    },
    gutter: {
      type: { name: "string", required: false },
      description:
        "Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time <code>[horizontal, vertical]</code>.",
      control: "object",
      table: {
        type: {
          summary: "number | object | array",
        },
        defaultValue: { summary: 0 },
      },
    },
    justify: {
      type: { name: "string", required: false },
      description: "Horizontal arrangement.",
      control: "select",
      options: [
        "start",
        "end",
        "center",
        "space-around",
        "space-between",
        "space-evenly",
      ],
      table: {
        type: {
          summary:
            "start | end | center | space-around | space-between | space-evenly | {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'}",
        },
        defaultValue: { summary: "start" },
      },
    },
    wrap: {
      type: { name: "boolean", required: false },
      description: "Auto wrap line.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: true },
      },
    },
  },
} as ComponentMeta<typeof RowComponent>;

const Template: ComponentStory<typeof RowComponent & typeof ConfigProvider> = (args) => {
  const { theme, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <RowComponent {...props}>
        <Col span={24}>
          Maecenas sed diam eget risus varius blandit sit amet non magna.
          Maecenas faucibus mollis interdum.
        </Col>
      </RowComponent>
    </ConfigProvider>
  );
};

export const Row = Template.bind({});
