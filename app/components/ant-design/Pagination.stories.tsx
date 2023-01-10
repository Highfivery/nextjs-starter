// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storybookArgTypes } from "styles/ant-design/storybook";

// Import component dependencies
import { Pagination as PaginationComponent, ConfigProvider } from "antd";

export default {
  title: "Ant Design/Navigation/Pagination",
  component: PaginationComponent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/pagination' target='_blank'>Pagination</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    theme: storybookArgTypes.theme,
    current: {
      type: { name: "number", required: false },
      description: "Current page number.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: undefined },
      },
    },
    defaultCurrent: {
      type: { name: "number", required: false },
      description: "Default initial page number.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 1 },
      },
    },
    defaultPageSize: {
      type: { name: "number", required: false },
      description: "Default number of data items per page.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 10 },
      },
    },
    disabled: {
      type: { name: "boolean", required: false },
      description: "Disable pagination.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: undefined },
      },
    },
    hideOnSinglePage: {
      type: { name: "boolean", required: false },
      description: "Whether to hide pager on single page.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    itemRender: {
      type: { name: "string", required: false },
      description: "To customize item's innerHTML.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary:
            "(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode",
        },
        defaultValue: { summary: undefined },
      },
    },
    pageSize: {
      type: { name: "number", required: false },
      description: "Number of data items per page.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: undefined },
      },
    },
    pageSizeOptions: {
      type: { name: "string", required: false },
      description: "Specify the sizeChanger options.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "string[]",
        },
        defaultValue: { summary: [10, 20, 50, 100] },
      },
    },
    responsive: {
      type: { name: "boolean", required: false },
      description:
        "If <code>size</code> is not specified, <code>Pagination</code> would resize according to the width of the window.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: undefined },
      },
    },
    showLessItems: {
      type: { name: "boolean", required: false },
      description: "Show less page items.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    showQuickJumper: {
      type: { name: "boolean", required: false },
      description: "Determine whether you can jump to pages directly.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean | { goButton: ReactNode }",
        },
        defaultValue: { summary: false },
      },
    },
    showSizeChanger: {
      type: { name: "boolean", required: false },
      description:
        "Determine whether to show <code>pageSize</code> select, it will be true when <code>total > 50</code>.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: undefined },
      },
    },
    showTitle: {
      type: { name: "boolean", required: false },
      description: "Show page item's title.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: true },
      },
    },
    showTotal: {
      type: { name: "function", required: false },
      description: "To display the total number and range.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "function(total, range)",
        },
        defaultValue: { summary: undefined },
      },
    },
    simple: {
      type: { name: "boolean", required: false },
      description: "Whether to use simple mode.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: undefined },
      },
    },
    size: {
      type: { name: "boolean", required: false },
      description:
        "Specify the size of <code>Pagination</code>, can be set to <code>small</code>.",
      control: "select",
      options: ["default", "small"],
      table: {
        type: {
          summary: "default | small",
        },
        defaultValue: { summary: "default" },
      },
    },
    total: {
      type: { name: "number", required: false },
      description: "Total number of data items.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: 0 },
      },
    },
    onChange: {
      type: { name: "function", required: false },
      description:
        "Called when the page number or <code>pageSize</code> is changed, and it takes the resulting page number and pageSize as its arguments.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "function(page, pageSize)",
        },
        defaultValue: { summary: undefined },
      },
    },
    onShowSizeChange: {
      type: { name: "function", required: false },
      description: "Called when <code>pageSize</code> is changed",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "function(page, pageSize)",
        },
        defaultValue: { summary: undefined },
      },
    },
  },
} as ComponentMeta<typeof PaginationComponent>;

const Template: ComponentStory<typeof PaginationComponent> = (args) => {
  /* @TODO: Fix TypeScript error */
  /*  @ts-ignore */
  const { theme, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <PaginationComponent {...props} />
    </ConfigProvider>
  );
};

export const Pagination = Template.bind({});
Pagination.args = {
  defaultCurrent: 1,
  total: 50,
};
