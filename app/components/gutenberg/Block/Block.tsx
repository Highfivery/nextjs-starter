// Import Next.js dependencies
import dynamic from "next/dynamic";

// Import antd dependencies
import { Grid, theme } from "antd";
const { useBreakpoint } = Grid;

// Import internal component dependencies
import Blocks from "../Blocks/Blocks";

// Import internal functions
import generateStyles from "@/functions/gutenberg/generateStyles";

// Import TypeScript definitions
import {
  GutenbergGlobalBlockProps,
  GutenbergAntDesignRowBlockProps,
  GutenbergAntDesignColBlockProps,
  GutenbergAntDesignTitleBlockProps,
} from "@/types/gutenberg";

// @TODO: Pull these values in dynamically from antd
const screens: { [key: string]: { antdToken: string } } = {
  xs: {
    antdToken: "screenXS",
  },
  sm: {
    antdToken: "screenSM",
  },
  md: {
    antdToken: "screenMD",
  },
  lg: {
    antdToken: "screenLG",
  },
  xl: {
    antdToken: "screenXL",
  },
  xxl: {
    antdToken: "screenXXL",
  },
};

// Registered blocks
const RegisteredBlocks: {
  [key: string]: {
    // @TODO: Fix, define a type
    Component: any;
  };
} = {};

RegisteredBlocks["gutenberg-ant-design/title"] = {
  Component: ({ block }: { block: GutenbergAntDesignTitleBlockProps }) => {
    const Title = dynamic(() =>
      import("antd").then((mod) => mod.Typography.Title)
    );
    const { attributes } = block;

    const { api } = attributes;
    const { text, ...titleProps } = api;

    const { useToken } = theme;
    const { token } = useToken();

    // @TODO: There's got to be a way to clean-up the styles so we can reuse on all components... while keeping scoped classes
    return (
      <>
        <Title {...titleProps}>{text}</Title>
        <style jsx>{`
          .ant-typography {
            ${generateStyles(block, "xs")}
          }

          @media (min-width: ${token[
              screens.sm.antdToken as keyof typeof token
            ]}px) {
            .ant-typography {
              ${generateStyles(block, "sm")}
            }
          }

          @media (min-width: ${token[
              screens.md.antdToken as keyof typeof token
            ]}px) {
            .ant-typography {
              ${generateStyles(block, "md")}
            }
          }

          @media (min-width: ${token[
              screens.lg.antdToken as keyof typeof token
            ]}px) {
            .ant-typography {
              ${generateStyles(block, "lg")}
            }
          }

          @media (min-width: ${token[
              screens.xl.antdToken as keyof typeof token
            ]}px) {
            .ant-typography {
              ${generateStyles(block, "xl")}
            }
          }

          @media (min-width: ${token[
              screens.xxl.antdToken as keyof typeof token
            ]}px) {
            .ant-typography {
              ${generateStyles(block, "xxl")}
            }
          }
        `}</style>
      </>
    );
  },
};

RegisteredBlocks["gutenberg-ant-design/row"] = {
  Component: ({ block }: { block: GutenbergAntDesignRowBlockProps }) => {
    const Row = dynamic(() => import("antd").then((mod) => mod.Row));
    const { innerBlocks, attributes } = block;

    const { api } = attributes;

    const { useToken } = theme;
    const { token } = useToken();

    // @TODO: Fix TypeScript error below
    // @TODO: There's got to be a way to clean-up the styles so we can reuse on all components... while keeping scoped classes
    return (
      <>
        <Row {...api}>
          {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
          <style jsx>{`
            .ant-row {
              ${generateStyles(block, "xs")}
            }

            @media (min-width: ${token[
                screens.sm.antdToken as keyof typeof token
              ]}px) {
              .ant-row {
                ${generateStyles(block, "sm")}
              }
            }

            @media (min-width: ${token[
                screens.md.antdToken as keyof typeof token
              ]}px) {
              .ant-row {
                ${generateStyles(block, "md")}
              }
            }

            @media (min-width: ${token[
                screens.lg.antdToken as keyof typeof token
              ]}px) {
              .ant-row {
                ${generateStyles(block, "lg")}
              }
            }

            @media (min-width: ${token[
                screens.xl.antdToken as keyof typeof token
              ]}px) {
              .ant-row {
                ${generateStyles(block, "xl")}
              }
            }

            @media (min-width: ${token[
                screens.xxl.antdToken as keyof typeof token
              ]}px) {
              .ant-row {
                ${generateStyles(block, "xxl")}
              }
            }
          `}</style>
        </Row>
      </>
    );
  },
};

RegisteredBlocks["gutenberg-ant-design/col"] = {
  Component: ({ block }: { block: GutenbergAntDesignColBlockProps }) => {
    const Col = dynamic(() => import("antd").then((mod) => mod.Col));
    const { innerBlocks, attributes } = block;

    const { api } = attributes;

    const { useToken } = theme;
    const { token } = useToken();

    return (
      <>
        <Col {...api}>
          {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
        </Col>
        <style jsx>{`
          .ant-col {
            ${generateStyles(block, "xs")}
          }

          @media (min-width: ${token[
              screens.sm.antdToken as keyof typeof token
            ]}px) {
            .ant-col {
              ${generateStyles(block, "sm")}
            }
          }

          @media (min-width: ${token[
              screens.md.antdToken as keyof typeof token
            ]}px) {
            .ant-col {
              ${generateStyles(block, "md")}
            }
          }

          @media (min-width: ${token[
              screens.lg.antdToken as keyof typeof token
            ]}px) {
            .ant-col {
              ${generateStyles(block, "lg")}
            }
          }

          @media (min-width: ${token[
              screens.xl.antdToken as keyof typeof token
            ]}px) {
            .ant-col {
              ${generateStyles(block, "xl")}
            }
          }

          @media (min-width: ${token[
              screens.xxl.antdToken as keyof typeof token
            ]}px) {
            .ant-col {
              ${generateStyles(block, "xxl")}
            }
          }
        `}</style>
      </>
    );
  },
};

export default function Block({ block }: { block: GutenbergGlobalBlockProps }) {
  const currentScreens = useBreakpoint();
  const {
    name,
    attributes: { visibility },
  } = block;

  // Check visibility

  if (typeof RegisteredBlocks[name] === "undefined") {
    return <div>Unregistered block: {name}</div>;
  }

  const Component = RegisteredBlocks[name].Component;

  return <Component block={block} />;
}
