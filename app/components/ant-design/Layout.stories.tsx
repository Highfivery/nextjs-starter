// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storybookArgTypes } from "styles/ant-design/storybook";

// Import component dependencies
import { Layout as LayoutComponent, ConfigProvider } from "antd";

const { Header, Footer, Sider, Content } = LayoutComponent;

export default {
  title: "Ant Design/Layout/Layout",
  component: LayoutComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/layout' target='_blank'>Layout</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    theme: storybookArgTypes.theme,
  },
} as ComponentMeta<typeof LayoutComponent>;

const BasicStructureTemplate: ComponentStory<typeof LayoutComponent & typeof ConfigProvider> = (
  args
) => {
  const { theme } = args;

  return (
    <ConfigProvider theme={theme}>
      <>
        <LayoutComponent>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </LayoutComponent>

        <LayoutComponent>
          <Header>Header</Header>
          <LayoutComponent>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </LayoutComponent>
          <Footer>Footer</Footer>
        </LayoutComponent>

        <LayoutComponent>
          <Header>Header</Header>
          <LayoutComponent>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </LayoutComponent>
          <Footer>Footer</Footer>
        </LayoutComponent>

        <LayoutComponent>
          <Sider>Sider</Sider>
          <LayoutComponent>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </LayoutComponent>
        </LayoutComponent>
      </>
    </ConfigProvider>
  );
};

export const Layout = BasicStructureTemplate.bind({});
