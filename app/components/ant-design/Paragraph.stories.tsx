// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storybookArgTypes } from "styles/ant-design/storybook";

// Import component dependencies
import { Typography as TypographyComponent, ConfigProvider } from "antd";
const { Paragraph: ParagraphComponent } = TypographyComponent;

export default {
  title: "Ant Design System/Components/General/Typography/Paragraph",
  component: ParagraphComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/typography#typographyparagraph' target='_blank'>Typography.Paragraph</a> for examples & API documentation.",
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
    strong: storybookArgTypes.strong,
    italic: storybookArgTypes.italic,
    type: storybookArgTypes.type,
    underline: storybookArgTypes.underline,
  },
} as ComponentMeta<typeof ParagraphComponent>;

const Template: ComponentStory<typeof ParagraphComponent> = (args) => {
  const { theme, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <ParagraphComponent {...props}>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper
        nulla non metus auctor fringilla. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet.
      </ParagraphComponent>
    </ConfigProvider>
  );
};

export const Paragraph = Template.bind({});
