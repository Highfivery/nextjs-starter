// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as WrapperCompomemt } from ".";

export default {
  title: "Atomic Design/Atoms/Wrapper",
  component: WrapperCompomemt,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof WrapperCompomemt>;

const Template: ComponentStory<typeof WrapperCompomemt> = (args) => (
  <WrapperCompomemt {...args}>{args.children}</WrapperCompomemt>
);

export const Wrapper = Template.bind({});
Wrapper.args = {
  children: (
    <div>
      Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Maecenas faucibus mollis interdum.
    </div>
  ),
};
