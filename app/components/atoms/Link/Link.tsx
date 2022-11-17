// Import React.js dependencies
import React, { ReactNode, ReactElement } from "react";

// Import Next.js dependencies
import { default as NextLink } from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";
import { previewData } from "next/headers";

// Import library dependencies
import { isRelativeUrl } from "../../../../functions/isRelativeUrl";

// Import types
import PropTypes from "prop-types";

/**
 * Render a link component.
 */
export default function Link({ children, href, ...props }: LinkProps) {
  const data = previewData();
  const isPreviewMode = !!data && data.key === process.env.PREVIEW_SECRET;

  if (!href) {
    return null;
  }

  // Use Next Link for internal links, and <a> for others.
  if (isRelativeUrl(href)) {
    const linkProps = isPreviewMode ? { prefetch: false, ...props } : props;

    return (
      <NextLink href={href} {...linkProps}>
        <a className={props?.className}>{children}</a>
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
  target?: "_blank" | "_self";
  /** Optional classNames. */
  className?: string;
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  target: PropTypes.string,
};
