// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as ButtonComponent } from ".";

export default {
  title: "Design System/Atoms/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>{args.children}</ButtonComponent>
);

export const Button = Template.bind({});
Button.args = {
  tag: "button",
  children: "Button",
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  tag: "a",
  href: "https://www.google.com",
  children: "External Link",
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  tag: "a",
  href: "/",
  children: "Internal Link",
};
