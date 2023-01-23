/**
 * Last Updated: 2023/01/02
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/button/stories/index.js
 */

// Import React.js dependencies
import React, { ReactElement, ReactNode } from "react";

/**
 * WordPress dependencies
 */
import {
  formatBold,
  formatItalic,
  link,
  more,
  wordpress,
} from "@wordpress/icons";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { Button as ButtonComponent } from "@wordpress/components";

// Import WordPress styles

// @TODO: Ben needs to check which styles need to be imported here.
// import "@/styles/wordpress/style.scss";
// import "@wordpress/block-editor/build-style/style.css";
// import "@wordpress/components/build-style/style.css";

export default {
  title: "WordPress/Components/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "See <a href='https://wordpress.github.io/gutenberg/?path=/docs/components-button--default' target='_blank'>Button</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description:
        "Sets the `aria-label` of the component, if none is provided. Sets the Tooltip content if `showTooltip` is provided.",
    },
    children: {
      control: { type: "text" },
    },
    href: {
      control: { type: "text" },
      description: "If provided, renders `a` instead of `button`.",
    },
    icon: {
      control: { type: "select" },
      description:
        "If provided, renders an `Icon` component inside the button.",
      options: ["wordpress", "link", "more"],
      mapping: {
        wordpress,
        link,
        more,
      },
    },
    iconSize: {
      control: { type: "number" },
      description: "If provided with `icon`, sets the icon size.",
    },
    iconPosition: {
      control: { type: "select" },
      description:
        "If provided with `icon`, sets the position of icon relative to the `text`. Available options are `left|right`.",
      options: ["left", "right"],
      table: {
        defaultValue: { summary: `left` },
      },
    },
    isBusy: {
      control: "boolean",
      description: "Indicates activity while a action is being performed.",
    },
    isDestructive: {
      control: "boolean",
      description:
        "Renders a red text-based button style to indicate destructive behavior.",
    },
    isPressed: {
      control: "boolean",
      description: "Renders a pressed button style.",
    },
    isSmall: {
      control: "boolean",
      description: "Decreases the size of the button.",
    },
    disabled: {
      control: "boolean",
      description:
        "Whether the button is disabled. If `true`, this will force a `button` element to be rendered.",
    },
    shortcut: {
      control: { type: "text" },
      description:
        "If provided with `showTooltip`, appends the Shortcut label to the tooltip content. If an `Object` is provided, it should contain `display` and `ariaLabel` keys.",
    },
    showTooltip: {
      control: "boolean",
      description: "If provided, renders a `Tooltip` component for the button.",
    },
    tooltipPosition: {
      control: { type: "text" },
      description:
        "If provided with `showTooltip`, sets the position of the tooltip.",
    },
    text: {
      control: { type: "text" },
      description:
        "If provided, displays the given text inside the button. If the button contains `children` elements, the text is displayed before them.",
    },
    target: {
      control: { type: "text" },
      description:
        "If provided with `href`, sets the `target` attribute to the `a`.",
    },
    variant: {
      control: { type: "select" },
      description: "Specifies the button's style.",
      options: ["primary", "secondary", "tertiary", "link"],
    },
    __experimentalIsFocusable: {
      control: "boolean",
      description: "Makes the button focusable even when disabled",
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = ({
  children,
  ...props
}) => <ButtonComponent {...props}>{children}</ButtonComponent>;

export const Default = Template.bind({});
Default.args = {
  children: "Code is poetry",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Default.args,
  variant: "tertiary",
};

export const Link = Template.bind({});
Link.args = {
  ...Default.args,
  variant: "link",
};

export const IsDestructive = Template.bind({});
IsDestructive.args = {
  ...Default.args,
  isDestructive: true,
};

export const Icon = Template.bind({});
Icon.args = {
  label: "Code is poetry",
  icon: "wordpress",
};

export const groupedIcons = () => {
  const GroupContainer = ({
    children,
  }: {
    children: ReactElement | ReactNode;
  }) => <div style={{ display: "inline-flex" }}>{children}</div>;

  return (
    <GroupContainer>
      <ButtonComponent icon={formatBold} label="Bold" />
      <ButtonComponent icon={formatItalic} label="Italic" />
      <ButtonComponent icon={link} label="Link" />
    </GroupContainer>
  );
};
