// Import React.js dependencies
import { ReactNode } from "react";

// Import functions
import cn from "classnames";

// Import types
import PropTypes from "prop-types";

// Import component dependencies
import RichText from "../RichText";

// Import styles
import styles from "./Figure.module.scss";

/**
 * Render the Figure component.
 */
export default function Figure(props: FigureProps) {
  return (
    <figure className={cn(props?.className, styles.figure)}>
      {props.children}
      {props?.caption && (
        <figcaption>
          <RichText>{props.caption}</RichText>
        </figcaption>
      )}
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
}

Figure.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  caption: PropTypes.string,
};
