// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as HeaderComponent } from ".";

export default {
  title: "Design System/Organisms/Header",
  component: HeaderComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <HeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
  menu: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
      children: [
        {
          label: "Our Story",
          path: "/about/our-story",
        },
      ],
    },
  ],
};
