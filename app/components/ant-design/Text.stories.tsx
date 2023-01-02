// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storybookArgTypes } from "styles/ant-design/storybook";

// Import component dependencies
import { Typography as TypographyComponent, ConfigProvider } from "antd";
const { Text: TextComponent } = TypographyComponent;

export default {
  title: "Ant Design/General/Typography/Text",
  component: TextComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/typography#typographytext' target='_blank'>Typography.Text</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    theme: storybookArgTypes.theme,
    onClick: storybookArgTypes.onClick,
    code: storybookArgTypes.code,
    copyable: storybookArgTypes.copyable,
    delete: storybookArgTypes.delete,
    disabled: storybookArgTypes.disabled,
    editable: storybookArgTypes.editable,
    ellipsis: storybookArgTypes.ellipsis,
    mark: storybookArgTypes.mark,
    keyboard: {
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "Keyboard style.",
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
    strong: storybookArgTypes.strong,
    italic: storybookArgTypes.italic,
    type: storybookArgTypes.type,
    underline: storybookArgTypes.underline,
  },
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => {
  const { theme, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <TextComponent {...props}>
        Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas
        faucibus mollis interdum.
      </TextComponent>
    </ConfigProvider>
  );
};

export const Text = Template.bind({});
