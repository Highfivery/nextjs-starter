// @ts-nocheck
// @TODO: Fix TS issue, see https://github.com/storybookjs/storybook/issues/19872

// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as PageComponent } from ".";

export default {
  title: "Atomic Design System/Templates/Page",
  component: PageComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageComponent>;

const Template: ComponentStory<typeof PageComponent> = (args) => (
  <PageComponent {...args}>
    <p>
      Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula
      porta felis euismod semper. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Sed
      posuere consectetur est at lobortis. Cras mattis consectetur purus sit
      amet fermentum. Donec id elit non mi porta gravida at eget metus.
    </p>
  </PageComponent>
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
