// Import Next.js dependencies
import dynamic from "next/dynamic";

// Import antd dependencies
import { Grid, theme } from "antd";
const { useBreakpoint } = Grid;

// Import internal component dependencies
import Blocks from "../Blocks/Blocks";
import { BlockStyle } from "./BlockStyle";
import RichText from "@/components/atomic-design/atoms/RichText";

// Import TypeScript definitions
import {
  GutenbergGlobalBlockProps,
  GutenbergAntDesignRowBlockProps,
  GutenbergAntDesignColBlockProps,
  GutenbergAntDesignTitleBlockProps,
  GutenbergAntDesignParagraphBlockProps,
  GutenbergAntDesignButtonBlockProps,
  GutenbergAntDesignImageBlockProps,
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

RegisteredBlocks["gutenberg-ant-design/paragraph"] = {
  Component: ({ block }: { block: GutenbergAntDesignParagraphBlockProps }) => {
    const Paragraph = dynamic(() =>
      import("antd").then((mod) => mod.Typography.Paragraph)
    );
    const { attributes } = block;

    const { api } = attributes;
    const { text, ...paragraphProps } = api;

    const { useToken } = theme;
    const { token } = useToken();

    const className = "ant-typography";
    const Component = ({ className }: { className: string }) => (
      <Paragraph className={className} {...paragraphProps}>
        <RichText>{text}</RichText>
      </Paragraph>
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

RegisteredBlocks["gutenberg-ant-design/button"] = {
  Component: ({ block }: { block: GutenbergAntDesignButtonBlockProps }) => {
    const Button = dynamic(() => import("antd").then((mod) => mod.Button));
    const { attributes } = block;

    const { api } = attributes;
    const { text, ...buttonProps } = api;

    const { useToken } = theme;
    const { token } = useToken();

    const className = "ant-button";
    const Component = ({ className }: { className: string }) => (
      <Button className={className} {...buttonProps}>
        {text}
      </Button>
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

RegisteredBlocks["gutenberg-ant-design/image"] = {
  Component: ({ block }: { block: GutenbergAntDesignImageBlockProps }) => {
    const Image = dynamic(() => import("antd").then((mod) => mod.Image));
    const { attributes } = block;

    const { api, settings } = attributes;
    const { src, alt } = api;
    const imageProps = {
      alt: alt ? alt : src.alt ? src.alt : "",
      src: src.url,
      width: settings?.size?.width ? settings.size.width : src.width,
      height: settings?.size?.height ? settings.size.height : src.height,
      preview: api?.preview,
    };

    const { useToken } = theme;
    const { token } = useToken();

    const className = "ant-image";
    const Component = ({ className }: { className: string }) => (
      /* @TODO: Fix TypeScript error. alt is defined in the object above & can is requried. Why would TS complain, does it need to be explicitly defined?  */
      <Image className={className} {...imageProps} />
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
