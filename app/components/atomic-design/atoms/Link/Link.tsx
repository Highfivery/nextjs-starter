// Import React.js dependencies
import React, { ReactNode, ReactElement } from "react";

// Import Next.js dependencies
import { default as NextLink } from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";

// Import library dependencies
import { isRelativeUrl } from "@/functions/isRelativeUrl";

// Import types
import PropTypes from "prop-types";

/**
 * Render a link component.
 */
export default function Link({ children, href, ...props }: LinkProps) {
  if (!href) {
    return null;
  }

  // Use Next Link for internal links, and <a> for others.
  if (isRelativeUrl(href)) {
    const { onClick, ...attributes } = props;

    return (
      <NextLink href={href} {...attributes} onClick={onClick}>
        {children}
      </NextLink>
    );
  }

  return React.createElement(
    "a",
    {
      href: href,
      ...props,
    },
    children
  );
}

export interface LinkProps extends NextLinkProps {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Anchor href. */
  href: string;
  /** Target */
  target?: string;
  /** Optional classNames. */
  className?: string;
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  target: PropTypes.string,
};
