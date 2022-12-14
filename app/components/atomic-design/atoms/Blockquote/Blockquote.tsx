// Import React.js dependencies
import { ReactNode, ReactElement } from "react";

// Import functions
import cn from "classnames";

// Import types
import PropTypes from "prop-types";

// Import styles
import styles from "./Blockquote.module.scss";

/**
 * Render the Blockquote component.
 */
export default function Blockquote(props: BlockquoteProps) {
  return (
    <blockquote
      cite={props?.cite}
      className={cn(props?.className, styles.blockquote)}
    >
      {props.children}
    </blockquote>
  );
}

export interface BlockquoteProps {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Optional classNames. */
  className?: string;
  /** Optional citation URL */
  cite?: string;
}

Blockquote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  cite: PropTypes.string,
};
