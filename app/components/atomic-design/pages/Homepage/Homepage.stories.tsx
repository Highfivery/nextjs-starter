/**
 * Import React.js dependencies
 */
import React from "react";

/**
 * Import @storybook dependencies
 */
import { ComponentStory, ComponentMeta } from "@storybook/react";

/**
 * Import internal component dependencies
 */
import { default as PageComponent } from ".";

export default {
  title: "Atomic Design/Pages/Homepage",
  component: PageComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageComponent>;

const Template: ComponentStory<typeof PageComponent> = (args) => (
  <PageComponent />
);

export const Homepage = Template.bind({});
