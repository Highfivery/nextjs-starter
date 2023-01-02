// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as SocialComponent } from ".";

export default {
  title: "Atomic Design/Molecules/Social",
  component: SocialComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SocialComponent>;

const Template: ComponentStory<typeof SocialComponent> = (args) => (
  <SocialComponent {...args} />
);

export const Social = Template.bind({});
Social.args = {
  networks: ["facebook", "twitter", "linkedin", "reddit"],
  href: "https://www.google.com",
  hashtags: ["testing", "test"],
  via: "testuser",
  text: "This is a test",
};
