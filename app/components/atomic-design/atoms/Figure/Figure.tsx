// Import React.js dependencies
import { ReactNode } from "react";

// Import functions
import cn from "classnames";

// Import component dependencies
import RichText from "../RichText";

// Import styles
import styles from "./Figure.module.scss";

/**
 * Render the Figure component.
 */
export default function Figure(props: FigureProps) {
  return (
    <figure className={cn(props?.className, styles.figure)} style={props.style}>
      {props.children}
      {props?.caption && <RichText Tag="figcaption">{props.caption}</RichText>}
    </figure>
  );
}

export interface FigureProps {
  /** Child component(s) to render. */
  children: ReactNode;
  /** Optional classNames. */
  className?: string;
  /** Figure caption. */
  caption?: string;
  /** Inline styles. */
  style?: {};
}
