// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { default as RichTextComponent } from ".";

export default {
  title: "Atomic Design System/Atoms/Rich Text",
  component: RichTextComponent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof RichTextComponent>;

const Template: ComponentStory<typeof RichTextComponent> = (args) => (
  <RichTextComponent {...args} />
);

export const ContentSamples = Template.bind({});
ContentSamples.args = {
  tag: "div",
  children: `<h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <h3>H3</h3>
  <h4>H4</h4>
  <h5>H5</h5>
  <h6>H6</h6>
  <p>Paragraph tag <strong>with</strong> <a href="https://example.com">linked content</a>.</p>
  <ul>
    <li>UL List item 1</li>
    <li>UL List item 2
      <ul>
        <li>UL List item 1</li>
        <li>UL List item 2</li>
        <li>UL List item 3</li>
      </ul>
    </li>
    <li>UL List item 3</li>
  </ul>
  <ol>
    <li>OL List item 1</li>
    <li>OL List item 2
      <ol>
        <li>OL List item 1</li>
        <li>OL List item 2</li>
        <li>OL List item 3</li>
      </ol>
    </li>
    <li>OL List item 3</li>
  </ol>
  <blockquote>Blockquote tag with dummy text. Nullam quis risus eget urna mollis ornare vel eu leo.</blockquote>
  <button type="button">Button Element</button>`,
};

export const Tag = Template.bind({});
Tag.args = {
  tag: "h2",
  children: `This heading has <strong>Bold Content</strong> and <i>Italics</i>`,
};

export const DataAttributes = Template.bind({});
DataAttributes.args = {
  tag: "h2",
  children: `This heading has a data attribute applied to it`,
  attributes: {
    "data-att": true,
  },
};

export const ParsedImage = Template.bind({});
ParsedImage.args = {
  tag: "div",
  children: `This is a parsed image <img src="https://picsum.photos/200/300" alt="Test image" />`,
};

export const ParsedExternalLink = Template.bind({});
ParsedExternalLink.args = {
  tag: "div",
  children: `This is a <a href="https://www.google.com">parsed external link</a>.`,
};
