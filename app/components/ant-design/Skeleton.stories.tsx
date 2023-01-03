// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storybookArgTypes } from "styles/ant-design/storybook";

// Import component dependencies
import { Skeleton as SkeletonComponent, ConfigProvider } from "antd";

export default {
  title: "Ant Design/Feedback/Skeleton",
  component: SkeletonComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/skeleton' target='_blank'>Skeleton</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    theme: storybookArgTypes.theme,
    active: {
      type: { name: "boolean", required: false },
      description: "Show animation effect.",
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
    avatar: {
      type: { name: "boolean", required: false },
      description:
        "Show avatar placeholder. See <code><a href='https://ant.design/components/skeleton#skeletonavatarprops'>SkeletonAvatarProps</a></code>.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean | SkeletonAvatarProps",
        },
        defaultValue: { summary: false },
      },
    },
    loading: {
      type: { name: "boolean", required: false },
      description: "Display the skeleton when true.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: undefined },
      },
    },
    paragraph: {
      type: { name: "boolean", required: false },
      description:
        "Show paragraph placeholder. See <code><a href='https://ant.design/components/skeleton#skeletonparagraphprops'>SkeletonParagraphProps</a></code>.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean | SkeletonParagraphProps",
        },
        defaultValue: { summary: true },
      },
    },
    round: {
      type: { name: "boolean", required: false },
      description: "Show paragraph and title radius when true.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: undefined },
      },
    },
    title: {
      type: { name: "boolean", required: false },
      description:
        "Show title placeholder. See <code><a href='https://ant.design/components/skeleton#skeletontitleprops'>SkeletonTitleProps</a></code>.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean | SkeletonTitleProps",
        },
        defaultValue: { summary: true },
      },
    },
  },
} as ComponentMeta<typeof SkeletonComponent>;

const Template: ComponentStory<typeof SkeletonComponent> = (args) => {
  const { theme, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <SkeletonComponent {...props} />
    </ConfigProvider>
  );
};

export const Skeleton = Template.bind({});
