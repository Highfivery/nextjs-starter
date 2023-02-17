// Import React.js dependencies
import { ReactNode, ReactElement } from "react";

// Import functions
import cn from "classnames";

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
      style={props?.style}
    >
      {props.children}
    </blockquote>
  );
}

export interface BlockquoteProps {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Class names. */
  className?: string;
  /** Citation URL */
  cite?: string;
  /** Inline styles */
  style?: {};
}
