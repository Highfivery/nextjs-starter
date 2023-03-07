/**
 * Import React.js dependencies
 */
import React, { ReactElement, ReactNode } from "react";

/**
 * Import scoped styles
 */
//import styles from "./SingleColumn.module.scss";

/**
 * Render the component.
 */
export default function Article({ children, article }: ArticleTemplateProps) {
  return <article>{children}</article>;
}

export interface ArticleTemplateProps {
  /** Article data. */
  article: {
    title?: string;
  };
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
}
