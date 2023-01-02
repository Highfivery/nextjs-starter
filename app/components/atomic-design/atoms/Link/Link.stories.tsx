// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as LinkComponent } from ".";

export default {
  title: "Atomic Design/Atoms/Link",
  component: LinkComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof LinkComponent>;

const Template: ComponentStory<typeof LinkComponent> = (args) => (
  <LinkComponent {...args}>{args.children}</LinkComponent>
);

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  href: "https://www.google.com",
  children: `External Link`,
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  href: "/",
  children: `Internal Link`,
};
