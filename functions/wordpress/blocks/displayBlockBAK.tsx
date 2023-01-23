// Import Next.js dependencies
import dynamic from "next/dynamic";

// Import package dependencies
import cn from "classnames";

// Import function dependencies
import getBlockClasses from "@/functions/wordpress/blocks/getBlockClasses";

// Import types
import {
  BlockProps,
  CoreBlockProps,
  GutenbergAntDesignButtonBlockProps,
  GutenbergAntDesignRowBlockProps,
  GutenbergAntDesignColBlockProps,
} from "@/types/wordpress/blocks";

// Import component dependencies
import Blocks from "@/components/wordpress/Blocks/Blocks";

// @TODO: Could we load this dynamically instead, only needed on certain components
import { theme } from "antd";

/**
 * Outputs a Gutenberg block component.
 */
export default function DisplayBlock(block: BlockProps, index: number) {
  const { attributes, name, innerBlocks } = block;

  // @TODO: Check if we can use this conditionally
  const { useToken } = theme;
  const { token } = useToken();
  
  switch (name) {
    /* -- GUTENBERG ANT DESIGN BLOCKS -- */
    case "gutenberg-ant-design/button": {
      const {
        text,
        block: buttonBlock,
        danger,
        disabled,
        ghost,
        href,
        htmlType,
        icon,
        loading,
        shape,
        size,
        target,
        type,
      } = attributes as GutenbergAntDesignButtonBlockProps["attributes"] &
        CoreBlockProps["attributes"];
      console.log(attributes);

      const Button = dynamic(() => import("antd").then((mod) => mod.Button));
      // @TODO: import icon type has no type signature 
      const Icon = icon
        ? dynamic(() => import("@ant-design/icons").then((mod : any) => mod[icon]))
        : undefined;

      const buttonClasses = getBlockClasses(block);
      const buttonProps = {
        block: buttonBlock,
        danger,
        disabled,
        href,
        ghost,
        htmlType,
        icon: Icon ? <Icon /> : undefined,
        loading: loading ? { delay: loading } : undefined,
        shape,
        size,
        target,
        type,
        className: cn(buttonClasses),
      };

      return (
        <Button {...buttonProps} key={index}>
          {text}
        </Button>
      );
    }

    case "gutenberg-ant-design/row": {
      const { gutter, align, justify, wrap, styles } =
        attributes as GutenbergAntDesignRowBlockProps["attributes"] &
          CoreBlockProps["attributes"];
      console.log(block);

      const Row = dynamic(() => import("antd").then((mod) => mod.Row));

      if (Array.isArray(gutter)) {
        // Clean to remove any blank values.
        gutter?.forEach((sizes, index) => {
          for (const [key, value] of Object.entries(sizes)) {
            if (value === "") {
              delete gutter[index][key];
            }
          }
        });
      }

      const rowClasses = getBlockClasses(block);
      const rowProps = {
        gutter,
        align,
        justify,
        wrap,
        className: cn(rowClasses),
      };

      return (
        <div key={index}>
          <Row {...rowProps}>
            {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
          </Row>
          <style jsx>{`
            .ant-row {
              background-color: ${styles.xs["backgroundColor"]};
            }

            @media (min-width: ${token.screenSM}px) {
              .ant-row {
                background-color: ${styles.sm["backgroundColor"]};
              }
            }
          `}</style>
        </div>
      );
    }

    case "gutenberg-ant-design/col": {
      const { xs, sm, md, lg, xl, xxl } =
        attributes as GutenbergAntDesignColBlockProps["attributes"] &
          CoreBlockProps["attributes"];

      const Col = dynamic(() => import("antd").then((mod) => mod.Col));

      const colClasses = getBlockClasses(block);
      const colProps = {
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        className: cn(colClasses),
      };

      return (
        <Col {...colProps} key={index}>
          {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
        </Col>
      );
    }
  }
}
