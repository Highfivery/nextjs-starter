// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storybookArgTypes } from "styles/ant-design/storybook";

// Import component dependencies
import {
  Input as InputComponent,
  ConfigProvider,
  Space,
  Cascader,
  Select,
  AutoComplete,
  Button,
  Col,
  DatePicker,
  InputNumber,
  Row,
  Tooltip,
} from "antd";
import { UserOutlined, SettingOutlined, CopyOutlined } from "@ant-design/icons";

const { Option } = Select;

export default {
  title: "Ant Design/Data Entry/Input",
  component: InputComponent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "See <a href='https://ant.design/components/input' target='_blank'>Input</a> for examples & API documentation.",
      },
    },
  },
  argTypes: {
    theme: storybookArgTypes.theme,
    addonAfter: {
      type: { name: "function", required: false },
      description:
        "The label text displayed after (on the right side of) the input field.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: { summary: undefined },
      },
    },
    addonBefore: {
      type: { name: "function", required: false },
      description:
        "The label text displayed before (on the left side of) the input field.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: { summary: undefined },
      },
    },
    allowClear: {
      type: { name: "boolean", required: false },
      description: "If allow to remove input content with clear icon.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean | { clearIcon: ReactNode }",
        },
        defaultValue: { summary: false },
      },
    },
    bordered: {
      type: { name: "boolean", required: false },
      description: "Whether has border style.",
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
    defaultValue: {
      type: { name: "string", required: false },
      description: "The initial input content.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: undefined },
      },
    },
    disabled: {
      type: { name: "boolean", required: false },
      description: "Whether the input is disabled.",
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
    id: {
      type: { name: "string", required: false },
      description: "The ID for input.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: undefined },
      },
    },
    maxLength: {
      type: { name: "number", required: false },
      description: "The max length.",
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
    showCount: {
      type: { name: "boolean", required: false },
      description: "Whether show text count.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary:
            "boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }",
        },
        defaultValue: { summary: false },
      },
    },
    status: {
      type: { name: "string", required: false },
      description: "Set validation status.",
      control: "select",
      options: ["error", "warning"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: undefined },
      },
    },
    prefix: {
      type: { name: "function", required: false },
      description: "The prefix icon for the Input.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: { summary: undefined },
      },
    },
    size: {
      type: { name: "string", required: false },
      description:
        "The size of the input box. Note: in the context of a form, the <code>middle</code> size is used.",
      control: "select",
      options: ["large", "middle", "small"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: undefined },
      },
    },
    suffix: {
      type: { name: "function", required: false },
      description: "The suffix icon for the Input.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: { summary: undefined },
      },
    },
    type: {
      type: { name: "string", required: false },
      description:
        "The type of input, see: <a href='https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types' target='_blank'>MDN</a> ( use <code>Input.TextArea</code> instead of type='textarea').",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "text" },
      },
    },
    value: {
      type: { name: "string", required: false },
      description: "The input content value.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: undefined },
      },
    },
    onChange: {
      type: { name: "function", required: false },
      description: "Callback when user input.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "function(e)",
        },
        defaultValue: { summary: undefined },
      },
    },
    onPressEnter: {
      type: { name: "function", required: false },
      description:
        "The callback function that is triggered when Enter key is pressed.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "function(e)",
        },
        defaultValue: { summary: undefined },
      },
    },
  },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent & typeof ConfigProvider> = (args) => {
  const { theme, ...props } = args;

  return (
    <ConfigProvider theme={theme}>
      <InputComponent placeholder="Basic" />
    </ConfigProvider>
  );
};

export const Basic = Template.bind({});

const SizesTemplate: ComponentStory<typeof InputComponent & typeof ConfigProvider> = (args) => {
  const { theme } = args;

  return (
    <ConfigProvider theme={theme}>
      <InputComponent
        size="large"
        placeholder="large size"
        prefix={<UserOutlined />}
      />
      <br />
      <br />
      <InputComponent placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <InputComponent
        size="small"
        placeholder="small size"
        prefix={<UserOutlined />}
      />
    </ConfigProvider>
  );
};

export const Sizes = SizesTemplate.bind({});

const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const PrePostTabTemplate: ComponentStory<typeof InputComponent & typeof ConfigProvider> = (args) => {
  const { theme } = args;

  return (
    <ConfigProvider theme={theme}>
      <Space direction="vertical">
        <InputComponent
          addonBefore="http://"
          addonAfter=".com"
          defaultValue="mysite"
        />
        <InputComponent
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          defaultValue="mysite"
        />
        <InputComponent
          addonAfter={<SettingOutlined />}
          defaultValue="mysite"
        />
        <InputComponent
          addonBefore="http://"
          suffix=".com"
          defaultValue="mysite"
        />
        <InputComponent
          addonBefore={
            <Cascader placeholder="cascader" style={{ width: 150 }} />
          }
          defaultValue="mysite"
        />
      </Space>
    </ConfigProvider>
  );
};

export const PrePostTab = PrePostTabTemplate.bind({});

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const InputGroupTemplate: ComponentStory<typeof InputComponent & typeof ConfigProvider> = (args) => {
  const { theme } = args;

  return (
    <ConfigProvider theme={theme}>
      <InputComponent.Group size="large">
        <Row gutter={8}>
          <Col span={5}>
            <InputComponent defaultValue="0571" />
          </Col>
          <Col span={8}>
            <InputComponent defaultValue="26888888" />
          </Col>
        </Row>
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <InputComponent style={{ width: "20%" }} defaultValue="0571" />
        <InputComponent style={{ width: "30%" }} defaultValue="26888888" />
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <InputComponent
          style={{ width: "calc(100% - 200px)" }}
          defaultValue="https://ant.design"
        />
        <Button type="primary">Submit</Button>
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <InputComponent
          style={{ width: "calc(100% - 200px)" }}
          defaultValue="git@github.com:ant-design/ant-design.git"
        />
        <Tooltip title="copy git url">
          <Button icon={<CopyOutlined />} />
        </Tooltip>
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <Select defaultValue="Zhejiang">
          <Option value="Zhejiang">Zhejiang</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>
        <InputComponent
          style={{ width: "50%" }}
          defaultValue="Xihu District, Hangzhou"
        />
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <InputComponent.Search
          allowClear
          style={{ width: "40%" }}
          defaultValue="0571"
        />
        <InputComponent.Search
          allowClear
          style={{ width: "40%" }}
          defaultValue="26888888"
        />
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
          <Option value="Option2">Option2</Option>
        </Select>
        <InputComponent style={{ width: "50%" }} defaultValue="input content" />
        <InputNumber />
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <InputComponent style={{ width: "50%" }} defaultValue="input content" />
        <DatePicker style={{ width: "50%" }} />
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <InputComponent style={{ width: "30%" }} defaultValue="input content" />
        <DatePicker.RangePicker style={{ width: "70%" }} />
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <Select defaultValue="Option1-1">
          <Option value="Option1-1">Option1-1</Option>
          <Option value="Option1-2">Option1-2</Option>
        </Select>
        <Select defaultValue="Option2-2">
          <Option value="Option2-1">Option2-1</Option>
          <Option value="Option2-2">Option2-2</Option>
        </Select>
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <Select defaultValue="1">
          <Option value="1">Between</Option>
          <Option value="2">Except</Option>
        </Select>
        <InputComponent
          style={{ width: 100, textAlign: "center" }}
          placeholder="Minimum"
        />
        <InputComponent
          className="site-input-split"
          style={{
            width: 30,
            borderLeft: 0,
            borderRight: 0,
            pointerEvents: "none",
          }}
          placeholder="~"
          disabled
        />
        <InputComponent
          className="site-input-right"
          style={{
            width: 100,
            textAlign: "center",
          }}
          placeholder="Maximum"
        />
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <Select defaultValue="Sign Up" style={{ width: "30%" }}>
          <Option value="Sign Up">Sign Up</Option>
          <Option value="Sign In">Sign In</Option>
        </Select>
        <AutoComplete
          style={{ width: "70%" }}
          placeholder="Email"
          options={[{ value: "text 1" }, { value: "text 2" }]}
        />
      </InputComponent.Group>
      <br />
      <InputComponent.Group compact>
        <Select style={{ width: "30%" }} defaultValue="Home">
          <Option value="Home">Home</Option>
          <Option value="Company">Company</Option>
        </Select>
        <Cascader
          style={{ width: "70%" }}
          options={options}
          placeholder="Select Address"
        />
      </InputComponent.Group>
    </ConfigProvider>
  );
};

export const InputGroup = InputGroupTemplate.bind({});
