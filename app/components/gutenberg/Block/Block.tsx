/**
 * Import Next.js dependencies
 */
import dynamic from "next/dynamic";

/**
 * Import @antd dependencies
 */
import { theme } from "antd";

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
  GutenbergCoreQueryBlockProps,
} from "@/types/gutenberg";

// Registered blocks
const RegisteredBlocks: {
  [key: string]: {
    // @TODO: Fix, define a type
    Component: any;
  };
} = {};

export interface RegisteredBlocksComponentProps {
  post?: {};
}

RegisteredBlocks["core/query"] = {
  Component: ({
    block,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergCoreQueryBlockProps;
  }) => {
    const {
      attributes: { query },
      innerBlocks,
    } = block;

    if (!innerBlocks) {
      return null;
    }

    // Build & query WPGraphQL
    // @TODO: Build this functionality
    const posts = [{}];

    return (
      <div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <Blocks blocks={innerBlocks} post={post} />
            </div>
          );
        })}
      </div>
    );
  },
};

RegisteredBlocks["gutenberg-ant-design/title"] = {
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignTitleBlockProps;
  }) => {
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
        selector={`h${titleProps.level}`}
      />
    );
  },
};

RegisteredBlocks["gutenberg-ant-design/row"] = {
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignRowBlockProps;
  }) => {
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
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignColBlockProps;
  }) => {
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
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignParagraphBlockProps;
  }) => {
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
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignButtonBlockProps;
  }) => {
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
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignImageBlockProps;
  }) => {
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

export default function Block({
  block,
  post,
}: {
  block: GutenbergGlobalBlockProps;
  post: {};
}) {
  const { name } = block;

  if (typeof RegisteredBlocks[name] === "undefined") {
    console.log(block);
    return <div>Unregistered block: {name}</div>;
  }

  const Component = RegisteredBlocks[name].Component;

  return <Component block={block} post={post} />;
}
