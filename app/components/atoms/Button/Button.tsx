// Import React.js dependencies
import { ReactNode } from "react";

// Import types
import PropTypes from "prop-types";

// Import component dependencies
import Link from "../Link";

// Import styles
import styles from "./Button.module.scss";

/**
 * Render the Button component.
 */
export default function Button(props: ButtonProps) {
  const allClassNames = [styles.button];

  if (props.tag === "button") {
    const { children, tag, className, ...buttonProps } = props;

    className && allClassNames.push(className);

    return (
      <button className={allClassNames.join(" ")} {...buttonProps}>
        {children}
      </button>
    );
  }

  const { children, tag, href, className, ...linkProps } = props;

  className && allClassNames.push(className);

  return (
    <Link href={href} className={allClassNames.join(" ")} {...linkProps}>
      {children}
    </Link>
  );
}

export interface NextButtonBaseProps {
  /** Child component(s) to render. */
  children: ReactNode;
  /** Optional classNames. */
  className?: string;
}

export interface NextButtonButtonProps extends NextButtonBaseProps {
  /** The type of element to render. */
  tag: "button";
}

export interface NextButtonAnchorProps extends NextButtonBaseProps {
  /** The type of element to render. */
  tag: "a";
  /** Anchor href. */
  href: string;
}

export type ButtonProps = NextButtonButtonProps | NextButtonAnchorProps;

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  tag: PropTypes.string,
};
