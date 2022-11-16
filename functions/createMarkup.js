/**
 * Handle markup that contains HTML.
 *
 * @param  {Array}  props Array of JSX Objects.
 * @return {object}       HTML markup for rendering.
 */
export default function createMarkup(props) {
  return { __html: props };
}
