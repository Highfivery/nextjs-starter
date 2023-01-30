// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storybookArgTypes } from "styles/ant-design/storybook";

// Import component dependencies
import { Divider as DividerComponent, ConfigProvider } from "antd";

export default {
  title: "Ant Design/Layout/Divider",
  component: DividerComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/divider' target='_blank'>Divider</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    theme: storybookArgTypes.theme,
    children: {
      type: { name: "string", required: false },
      description: "The wrapped title.",
      control: "text",
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: { summary: undefined },
      },
    },
    className: {
      type: { name: "string", required: false },
      description: "The className of container.",
      control: "text",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: undefined },
      },
    },
    dashed: {
      type: { name: "boolean", required: false },
      description: "Whether line is dashed.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    orientation: {
      type: { name: "string", required: false },
      description: "The position of title inside divider.",
      control: "select",
      options: ["left", "right", "center"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "center",
        },
      },
    },
    orientationMargin: {
      type: { name: "string", required: false },
      description:
        "The margin-left/right between the title and its closest border, while the <code>orientation</code> must be <code>left</code> or <code>right</code>.",
      control: "text",
      table: {
        type: {
          summary: "string | number",
        },
        defaultValue: { summary: undefined },
      },
    },
    plain: {
      type: { name: "boolean", required: false },
      description: "Divider text show as plain style.",
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
    style: {
      type: { name: "string", required: false },
      description: "The style object of container.",
      control: "object",
      table: {
        type: {
          summary: "CSSProperties",
        },
        defaultValue: { summary: undefined },
      },
    },
    type: {
      type: { name: "string", required: false },
      description: "The direction type of divider.",
      control: "select",
      options: ["horizontal", "vertical"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "horizontal",
        },
      },
    },
  },
} as ComponentMeta<typeof DividerComponent>;

const Template: ComponentStory<typeof DividerComponent & typeof ConfigProvider> = (args) => {
  const { theme, children, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <DividerComponent {...props}>{children}</DividerComponent>
    </ConfigProvider>
  );
};

export const Divider = Template.bind({});
