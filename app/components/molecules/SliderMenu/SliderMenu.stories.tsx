// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as SliderMenuComponent } from ".";

export default {
  title: "Design System/Molecules/Slider Menu",
  component: SliderMenuComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SliderMenuComponent>;

const Template: ComponentStory<typeof SliderMenuComponent> = (args) => (
  <SliderMenuComponent {...args} />
);

export const SliderMenu = Template.bind({});
SliderMenu.args = {
  items: [
    {
      label: "Menu Item 1",
      path: "/",
    },
    {
      label: "Menu Item 2",
      path: "/",
      children: {
        items: [
          {
            label: "Sub-menu Item 1 - 1",
            path: "/",
          },
          {
            label: "Sub-menu Item 1 - 2",
            path: "/",
            children: {
              items: [
                {
                  label: "Sub-sub-menu Item 1 - 2 - 1",
                  path: "/",
                },
              ],
            },
          },
          {
            label: "Sub-menu Item 2",
            path: "/",
            children: {
              items: [
                {
                  label: "Sub-sub-menu Item 2 - 1",
                  path: "/",
                  children: {
                    items: [
                      {
                        label: "Sub-sub-menu Item 2 - 1 - 1",
                        path: "/",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Sub-menu Item 3",
            path: "/",
          },
        ],
      },
    },
    {
      label: "Menu Item 2",
      path: "/",
    },
  ],
};
