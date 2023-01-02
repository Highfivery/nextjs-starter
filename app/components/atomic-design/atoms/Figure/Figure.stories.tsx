// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as FigureComponent } from ".";
import { default as BlockquoteComponent } from "../Blockquote";
import { default as ImageComponent } from "next/image";

export default {
  title: "Atomic Design/Atoms/Figure",
  component: FigureComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof FigureComponent>;

const Template: ComponentStory<typeof FigureComponent> = (args) => (
  <FigureComponent {...args}>{args.children}</FigureComponent>
);

export const Blockquote = Template.bind({});
Blockquote.args = {
  children: (
    <BlockquoteComponent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </BlockquoteComponent>
  ),
  caption: "Ultricies Risus Ridiculus",
};

export const Image = Template.bind({});
Image.args = {
  children: (
    <ImageComponent
      src="https://picsum.photos/200/300"
      width={200}
      height={300}
      alt="Example image"
    />
  ),
  caption: "Ultricies Risus Ridiculus",
};
