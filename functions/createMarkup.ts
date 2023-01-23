import { ReactNode } from "react";

/**
 * Handle markup that contains HTML.
 */
export default function createMarkup(props : ReactNode) {
  return { __html: props };
}
