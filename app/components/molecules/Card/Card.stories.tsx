// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as CardComponent } from ".";
import Image from "next/image";
import Link from "app/components/atoms/Link";

export default {
  title: "Design System/Molecules/Card",
  component: CardComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem
      malesuada magna mollis euismod.
    </p>
    <Link href="#">Read More</Link>
  </CardComponent>
);

export const Card = Template.bind({});
Card.decorators = [
  // @TODO: Fix TS warning.
  // @ts-ignore
  (Story: () => {}) => <div style={{ maxWidth: "375px" }}>{Story()}</div>,
];
Card.args = {
  title: {
    Tag: "h1",
    content: `Amet Ullamcorper Sem`,
    link: {
      href: "https://www.google.com",
      target: "_blank",
    },
  },
  Media: (
    <Link href="https://www.google.com" target="_blank">
      <Image
        alt="Example image"
        width={800}
        height={480}
        src="https://picsum.photos/800/480"
      />
    </Link>
  ),
};
