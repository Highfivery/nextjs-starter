// Import functions
import convertVarToCss from "../convertVartoCss";

// Import types
import { CoreBlockProps } from "@/types/wordpress/blocks";

/**
 * Converts a WP block response attributes to inline styles
 */
export default function getBlockStyles(
  attributes: Omit<CoreBlockProps, "innerBlocks" | "name">
) {
  const { fontStyle, fontWeight, textTransform, width, style } = attributes;

  const blockStyle = {} as BlockStylesProps;

  // Determine styles, using stylelint-accepted const names.
  const fontstyle = fontStyle || style?.typography?.fontStyle;
  const fontweight = fontWeight || style?.typography?.fontWeight;
  const texttransform = textTransform || style?.typography?.textTransform;

  // Only add styles if set.
  if (style?.color?.gradient) {
    blockStyle.background = style.color.gradient;
  }

  if (style?.color?.background) {
    blockStyle.backgroundColor = style.color.background;
  }

  if (style?.typography?.fontSize) {
    blockStyle.fontSize = style.typography.fontSize;
  }

  if (fontstyle) {
    blockStyle.fontStyle = fontstyle;
  }

  if (fontweight) {
    blockStyle.fontWeight = fontweight;
  }

  if (texttransform) {
    blockStyle.textTransform = texttransform;
  }

  if (style?.color?.text) {
    blockStyle.color = style.color.text;
  }

  if (style?.border?.radius) {
    blockStyle.borderRadius = style.border.radius;
  }

  if (style?.spacing?.padding?.bottom) {
    blockStyle.paddingBottom = convertVarToCss(style.spacing.padding.bottom);
  }

  if (style?.spacing?.padding?.top) {
    blockStyle.paddingTop = convertVarToCss(style.spacing.padding.top);
  }

  if (style?.spacing?.padding?.left) {
    blockStyle.paddingLeft = convertVarToCss(style.spacing.padding.left);
  }

  if (style?.spacing?.padding?.right) {
    blockStyle.paddingRight = convertVarToCss(style.spacing.padding.right);
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

export interface BlockStylesProps {
  background?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  textTransform?: string;
  color?: string;
  borderRadius?: string;
  paddingBottom?: string | null;
  paddingTop?: string | null;
  paddingLeft?: string | null;
  paddingRight?: string | null;
}
