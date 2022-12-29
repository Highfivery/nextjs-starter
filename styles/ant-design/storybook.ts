// Import component dependencies
import { theme } from "antd";

const DefaultAlgorithm = {
  algorithm: theme.defaultAlgorithm,
};

const DarkAlgorithm = {
  algorithm: theme.darkAlgorithm,
};

const CompactAlgorithm = {
  algorithm: theme.compactAlgorithm,
};

const DarkCompactAlgorithm = {
  algorithm: [theme.compactAlgorithm, theme.darkAlgorithm],
};

const CustomTheme = {
  token: {
    borderRadius: 100,
    colorPrimary: "#dd0092",
    colorBgBase: "#000000",
  },
};

export const storybookArgTypes = {
  onClick: {
    type: { name: "string", required: false },
    defaultValue: undefined,
    description: "Set the handler to handle <code>click</code> event.",
    control: "text",
    table: {
      type: {
        summary: "(event) => void",
      },
      defaultValue: { summary: undefined },
    },
  },
  theme: {
    type: { name: "object", required: false },
    defaultValue: undefined,
    description:
      "Ant Design theme, see: <a href='https://ant.design/docs/react/customize-theme' target='_blank'>customize theme</a>.",
    control: {
      type: "multi-select",
      labels: {
        DefaultAlgorithm: "Default",
        DarkAlgorithm: "Dark",
        CompactAlgorithm: "Compact",
        DarkCompactAlgorithm: "Dark + Compact",
        CustomTheme: "Custom Theme",
      },
    },
    options: [
      "DefaultAlgorithm",
      "DarkAlgorithm",
      "CompactAlgorithm",
      "DarkCompactAlgorithm",
      "CustomTheme",
    ],
    mapping: {
      DefaultAlgorithm,
      DarkAlgorithm,
      CompactAlgorithm,
      DarkCompactAlgorithm,
      CustomTheme,
    },
    table: {
      type: {
        summary: "object",
      },
      defaultValue: undefined,
    },
  },
  code: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description: "Code style.",
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
  copyable: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description:
      "Whether to be copyable, customize it via setting an object. See <code><a href='https://ant.design/components/typography#copyable'>copyable</a></code>.",
    control: {
      type: "boolean",
    },
    table: {
      type: {
        summary: "boolean | copyable",
      },
      defaultValue: { summary: false },
    },
  },
  delete: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description: "Deleted line style.",
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
  disabled: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description: "Disabled content.",
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
  editable: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description:
      "If editable. Can control edit state when is object. See <code><a href='https://ant.design/components/typography#editable'>editable</a></code>.",
    control: {
      type: "boolean",
    },
    table: {
      type: {
        summary: "boolean | editable",
      },
      defaultValue: { summary: false },
    },
  },
  ellipsis: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description:
      "Display ellipsis when text overflows, can configure rows and expandable by using object. See <code><a href='https://ant.design/components/typography#ellipsis'>ellipsis</a></code>.",
    control: {
      type: "boolean",
    },
    table: {
      type: {
        summary: "boolean | ellipsis",
      },
      defaultValue: { summary: false },
    },
  },
  mark: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description: "Marked style.",
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
  italic: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description: "Italic style.",
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
  type: {
    type: { name: "string", required: false },
    defaultValue: null,
    description: "Content type.",
    control: "select",
    options: ["secondary", "success", "warning", "danger"],
    table: {
      type: {
        summary: "string",
      },
      defaultValue: { summary: null },
    },
  },
  underline: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description: "Underlined style.",
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
  strong: {
    type: { name: "boolean", required: false },
    defaultValue: false,
    description: "Bold style.",
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
};
