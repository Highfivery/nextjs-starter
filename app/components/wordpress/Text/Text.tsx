// Import React.js dependencies
import React, { ReactElement, ReactNode } from "react";

// Import Next.js dependencies
import Link from "next/link";

// Import functions
import convertVarToCss from "@/functions/wordpress/convertVartoCss";

// Import package dependencies
import parse, {
  HTMLReactParserOptions,
  DOMNode,
  domToReact,
} from "html-react-parser";
import cn from "classnames";
import PropTypes from "prop-types";

// Parser options
// @TODO: Add additional HTML element to component types, see the atomic design RichText component for examples
const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode.constructor.name === "Element") {
      // @TODO: Fix TS warning.
      // @ts-ignore
      if (domNode.name === "a") {
        // @TODO: Fix TS warning.
        // @ts-ignore
        const { href, class: className } = domNode.attribs;

        return (
          <Link href={href} className={className}>
            {/* @TODO: Fix TS warning.
            @ts-ignore */}
            {domToReact(domNode.children)}
          </Link>
        );
      }
    }
  },
};

/**
 * Will eventually be replaced with WP core Text component
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/text/
 */
export default function Text({
  attributes,
  children,
  Tag = "div",
  className,
  id,
  style,
  elementStyles,
}: TextProps) {
  const html = parse(String(children), options);

  return (
    /* @TODO: Fix TypeScript error */
    /*  @ts-ignore */
    <Tag
      {...attributes}
      id={id || null}
      style={style}
      className={cn(className)}
    >
      {html}
      <style jsx>{`
        ${Tag} :global(a) {
          color: ${convertVarToCss(elementStyles?.link?.color?.text) ||
          "inherit"};
        }
      `}</style>
    </Tag>
  );
}

export interface TextProps {
  /** Optional element attributes. */
  attributes?: {};
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Optional classNames. */
  className?: string | string[];
  /** Optional element ID. */
  id?: string;
  /** Inline styles. */
  style?: {};
  /** The type of element to render. */
  Tag: string;
  /** Element styles. */
  elementStyles?: {
    link?: {
      color?: {
        text?: string;
      };
    };
  };
}

Text.propTypes = {
  attributes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  Tag: PropTypes.string.isRequired,
  elementStyles: PropTypes.object,
};
