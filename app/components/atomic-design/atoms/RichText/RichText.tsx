// Import React.js dependencies
import React, { ReactElement, ReactNode } from "react";

// Import Next.js dependencies
import Image from "next/image";

// Import package dependencies
import PropTypes from "prop-types";

// Import functions
import cn from "classnames";
import parse, {
  HTMLReactParserOptions,
  domToReact,
  DOMNode,
  Element,
} from "html-react-parser";

// Import component dependencies
import Link from "../Link";
import Figure from "../Figure";
import Blockquote from "../Blockquote";

// Import styles
import styles from "./RichText.module.scss";

// Parser options
// @TODO: Add additional HTML element to component types
const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      if (domNode.name === "img") {
        const { src, alt, width = 100, height = 100 } = domNode.attribs;

        return (
          <Image
            src={src}
            alt={alt}
            width={Number(width)}
            height={Number(height)}
          />
        );
      }

      if (domNode.name === "a") {
        const { href, class: className } = domNode.attribs;

        return (
          <Link href={href} className={className}>
            {domToReact(domNode.children)}
          </Link>
        );
      }

      if (domNode.name === "blockquote") {
        const { class: className } = domNode.attribs;

        return (
          <Figure className={className}>
            <Blockquote>{domToReact(domNode.children)}</Blockquote>
          </Figure>
        );
      }
    }
  },
};

/**
 * Render the RichText component.
 */
export default function RichText({
  attributes,
  children,
  className,
  dropCap = false,
  id,
  style,
  Tag = "div",
}: RichTextProps) {
  const tagClassName = Tag !== "div" ? Tag : "";

  const html = parse(String(children), options);

  return (
    <Tag
      {...attributes}
      id={id || undefined}
      style={style}
      className={cn(
        styles.richtext,
        styles?.[tagClassName],
        dropCap && styles.dropcap,
        className
      )}
    >
      {html}
    </Tag>
  );
}

export interface RichTextProps {
  /** Optional element attributes. */
  attributes?: {};
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Optional classNames. */
  className?: string;
  /** Whether or not there should be a drop cap. */
  dropCap?: boolean;
  /** Optional element ID. */
  id?: string;
  /** Inline styles. */
  style?: {};
  /** The type of element to render. */
  Tag: keyof JSX.IntrinsicElements;
}

RichText.propTypes = {
  attributes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
  dropCap: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  Tag: PropTypes.string.isRequired,
};
