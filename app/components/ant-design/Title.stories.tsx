// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storybookArgTypes } from "styles/ant-design/storybook";

// Import component dependencies
import { Typography as TypographyComponent, ConfigProvider } from "antd";
const { Title: TitleComponent } = TypographyComponent;

export default {
  title: "Ant Design/General/Typography/Title",
  component: TitleComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/typography#typographytitle' target='_blank'>Typography.Title</a> for examples & API documentation.",
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
    level: {
      type: { name: "number", required: false },
      description:
        "Set content importance. Match with <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>.",
      control: "select",
      options: [1, 2, 3, 4, 5],
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 1 },
      },
    },
    mark: storybookArgTypes.mark,
    italic: storybookArgTypes.italic,
    type: storybookArgTypes.type,
    underline: storybookArgTypes.underline,
  },
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<typeof TitleComponent> = (args) => {
  /* @TODO: Fix TypeScript error */
  /*  @ts-ignore */
  const { theme, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <TitleComponent {...props}>
        Dolor Fermentum Ornare Ullamcorper
      </TitleComponent>
    </ConfigProvider>
  );
};

export const Title = Template.bind({});
