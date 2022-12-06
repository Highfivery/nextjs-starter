// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as FooterComponent } from ".";

export default {
  title: "Design System/Organisms/Footer",
  component: FooterComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FooterComponent>;

const Template: ComponentStory<typeof FooterComponent> = (args) => (
  <FooterComponent {...args} />
);

export const Footer = Template.bind({});
Footer.args = {
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
