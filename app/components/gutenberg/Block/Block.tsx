// Import Next.js dependencies
import dynamic from "next/dynamic";

// Import antd dependencies
import { Grid, theme } from "antd";
const { useBreakpoint } = Grid;

// Import internal component dependencies
import Blocks from "../Blocks/Blocks";
import { BlockStyle } from "./BlockStyle";

// Import TypeScript definitions
import {
  GutenbergGlobalBlockProps,
  GutenbergAntDesignRowBlockProps,
  GutenbergAntDesignColBlockProps,
  GutenbergAntDesignTitleBlockProps,
} from "@/types/gutenberg";

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

    const className = "ant-typography";
    const Component = ({ className }: { className: string }) => (
      <Title className={className} {...titleProps}>
        {text}
      </Title>
    );

    return (
      <BlockStyle
        className={className}
        block={block}
        token={token}
        Component={Component}
      />
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

    const className = "ant-row";

    const Component = ({ className }: { className: string }) => (
      <Row {...api} className={className}>
        {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
      </Row>
    );

    return (
      <BlockStyle
        className={className}
        block={block}
        token={token}
        Component={Component}
      />
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

    const className = "ant-col";

    const Component = ({ className }: { className: string }) => (
      <Col {...api} className={className}>
        {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
      </Col>
    );
    return (
      <BlockStyle
        className={className}
        block={block}
        token={token}
        Component={Component}
      />
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
