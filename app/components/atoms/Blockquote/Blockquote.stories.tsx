// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as BlockquoteComponent } from ".";

export default {
  title: "Design System/Atoms/Blockquote",
  component: BlockquoteComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof BlockquoteComponent>;

const Template: ComponentStory<typeof BlockquoteComponent> = (args) => (
  <BlockquoteComponent {...args}>{args.children}</BlockquoteComponent>
);

export const Blockquote = Template.bind({});
Blockquote.args = {
  children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit</>,
};
