// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as NavigationComponent } from ".";

export default {
  title: "Atomic Design System/Molecules/Navigation",
  component: NavigationComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof NavigationComponent>;

const Template: ComponentStory<typeof NavigationComponent> = (args) => (
  <NavigationComponent {...args} />
);

export const Navigation = Template.bind({});
Navigation.args = {
  items: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
      children: {
        items: [
          {
            label: "Our Story",
            path: "/about/our-story",
          },
        ],
      },
    },
  ],
};
