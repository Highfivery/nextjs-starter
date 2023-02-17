// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as PageComponent } from ".";

/** @TODO: This won't work as the component is a next13 async component. 
 *  Storybook components should not have any sideEffects.
 */
{/* @ts-expect-error Server Component */}
export default {
  title: "Atomic Design/Templates/Single Column",
  component: PageComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<any>;

{/* @ts-expect-error Server Component */}
const Template: ComponentStory<typeof PageComponent> = (args) => (
  <>
  {/* @ts-expect-error Server Component */}
  <PageComponent {...args}>
    <p>
      Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula
      porta felis euismod semper. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Sed
      posuere consectetur est at lobortis. Cras mattis consectetur purus sit
      amet fermentum. Donec id elit non mi porta gravida at eget metus.
    </p>
  </PageComponent>
  </>
);

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  menu: [
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
