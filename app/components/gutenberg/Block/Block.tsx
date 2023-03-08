/**
 * Import Next.js dependencies
 */
import dynamic from "next/dynamic";

/**
 * Import @antd dependencies
 */
import { theme } from "antd";

/**
 * Import internal dependencies
 */
import getGfFormById from "@/functions/wordpress/gravityForms/getGfFormById";

// Import internal component dependencies
import Blocks from "../Blocks/Blocks";
import { BlockStyle } from "./BlockStyle";
import RichText from "@/components/atomic-design/atoms/RichText";

import Form from "@/components/gutenberg/gravity-forms/Form/Form";

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
  GutenbergFormProps,
} from "@/types/gutenberg";

// Registered blocks
const RegisteredBlocks: {
  [key: string]: {
    // No need to define a type for args as types are being assigned explicity on function params.
    Component: (arg1: any, arg2: any) => JSX.Element | null;
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
        <RichText tag={false}>{text}</RichText>
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
    const { token } = useToken() as { [key: string]: any };



    // Convert antd tokens.
    if (api?.gutter && Array.isArray(api.gutter)) {

      const screenSizes = api.gutter as { [key: string]: number | string }[];
      api.gutter = screenSizes.map((screenSize) => {
        const parsed : { [key: string]: number | string }= {};
        for (const [key, value] of Object.entries(screenSize)) {
          if (value) {
            if (typeof token[value] !== "undefined") {
              parsed[key] = token[value];
            } else {
              parsed[key] = parseInt(value as string);
            }
          }
        }

        return parsed;
      }) as GutenbergAntDesignRowBlockProps["attributes"]["api"]["gutter"];
    }
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
    /**
     * Adding SSR false here cuz dynamic import of columns fail when
     * there is a FORM component present inside a grid.
     **/
    const Col = dynamic(() => import("antd").then((mod) => mod.Col), {
      ssr: false,
    });
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

RegisteredBlocks["gutenberg-ant-design/text"] = {
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignParagraphBlockProps;
  }) => {
    const Text = dynamic(() =>
      import("antd").then((mod) => mod.Typography.Text)
    );
    const { attributes } = block;

    const { api } = attributes;
    const { text, ...paragraphProps } = api;

    const { useToken } = theme;
    const { token } = useToken();

    const className = "ant-typography";
    const Component = ({ className }: { className: string }) => (
      <Text className={className} {...paragraphProps}>
        <RichText>{text}</RichText>
      </Text>
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

    const { settings, api } = attributes;
    const { url, alt } = settings.image;
    const imageProps = {
      src: url,
      preview: api?.preview,
    };

    const { useToken } = theme;
    const { token } = useToken();

    const className = "ant-image";
    const Component = ({ className }: { className: string }) => (
      /* Alt prop needs to be explicitly defined https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/93f78856655696a55309440593e0948c6fb96134/docs/rules/alt-text.md#bad  */
      <Image rootClassName={className} alt={alt} {...imageProps} />
    );

    return (
      <BlockStyle
        className={className}
        block={block}
        token={token}
        Component={Component}
        selector="div"
      />
    );
  },
};

RegisteredBlocks["gravityforms/form"] = {
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignRowBlockProps & GutenbergFormProps;
  }) => {
    const formId = block.attributes.formId;
    {
      /**
       * Disable type checking for Server component as it is not yet supported.
       * Docs: https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components
       * Open issue: https://github.com/vercel/next.js/issues/42292
       */
    }
    return <Form formId={formId} />;
  },
};

RegisteredBlocks["gutenberg-ant-design/group"] = {
  Component: ({
    block,
    post,
  }: RegisteredBlocksComponentProps & {
    block: GutenbergAntDesignColBlockProps;
  }) => {
    const { innerBlocks, attributes } = block;

    const { useToken } = theme;
    const { token } = useToken();

    const className = "gutenberg-ant-design-group";

    const Component = ({ className }: { className: string }) => (
      <div className={className}>
        {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
      </div>
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
  post?: {};
}) {
  const { name } = block;

  if (typeof RegisteredBlocks[name] === "undefined") {
    return <div>Unregistered block: {name}</div>;
  }

  const Component = RegisteredBlocks[name].Component;

  return <Component block={block} post={post} />;
}
