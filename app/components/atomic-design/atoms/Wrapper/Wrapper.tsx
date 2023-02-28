/**
 * Import react dependencies
 */
import { ReactElement, ReactNode } from "react";

/**
 * Import external dependencies
 */
import cn from "classnames";

/**
 * Import component styles
 */
import styles from "./Wrapper.module.scss";

/**
 * Render the Figure component.
 */
export default function Wrapper({
  tag = "div",
  children,
  xPadding = true,
  ...props
}: WrapperProps) {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        styles.wrapper,
        xPadding ? styles["wrapper--xpadding"] : false
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Define component prop type
 */
export interface WrapperProps {
  /** HTML tag type. */
  tag?: "div" | "section";
  /** Component children. */
  children: ReactElement | ReactNode;
  /** Control if horizontal padding is added. */
  xPadding: boolean;
}
