// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as LayoutParagraphsComponent } from ".";

export default {
  title: "Design System/Drupal/Layout Paragraphs",
  component: LayoutParagraphsComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof LayoutParagraphsComponent>;

const Template: ComponentStory<typeof LayoutParagraphsComponent> = (args) => (
  <LayoutParagraphsComponent {...args} />
);

export const RichText = Template.bind({});
