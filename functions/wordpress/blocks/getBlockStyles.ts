// @TODO: Add support for pre-defined WordPress colors
export default function getBlockStyles({
  backgroundColor,
  gradient,
  textColor,
  fontSize,
  width,
  style,
}) {
  const blockStyle = {};

  // Determine styles, using stylelint-accepted const names.
  const background = gradient || style?.color?.gradient;
  const backgroundcolor = backgroundColor || style?.color?.background;
  const fontsize = fontSize || style?.typography?.fontSize;
  const textcolor = textColor || style?.color?.text;

  // Only add styles if set.
  if (background) {
    blockStyle.background = background;
  }

  if (backgroundcolor) {
    blockStyle.backgroundColor = backgroundcolor;
  }

  if (fontsize) {
    blockStyle.fontSize = fontsize;
  }

  if (textcolor) {
    blockStyle.color = textcolor;
  }

  if (width) {
    if (isNaN(width)) {
      // If width is not a number, return full string.
      blockStyle.width = width;
    } else {
      // If width is a number, return as percent.
      blockStyle.width = `${width}%`;
    }
  }

  return blockStyle;
}
