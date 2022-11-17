// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as PageComponent } from ".";

export default {
  title: "Design System/Templates/Page",
  component: PageComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageComponent>;

const Template: ComponentStory<typeof PageComponent> = (args) => (
  <PageComponent {...args} />
);

export const Page = Template.bind({});
Page.args = {
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
