// Import TypeScript definitions
import { GutenbergGlobalBlockProps } from "@/types/gutenberg";

/**
 * Converts the Gutenberg Ant Design plugin styles attribute to styles
 */
export default function generateStyles(
  block: GutenbergGlobalBlockProps,
  screenSize: string
) {
  const availableStyles: { [key: string]: string } = {
    backgroundColor: "background-color",
    backgroundImage: "background-image",
    backgroundRepeat: "background-repeat",
    backgroundSize: "background-size",
    backgroundPosition: "background-position",
    paddingLeft: "padding-left",
    paddingTop: "padding-top",
    paddingRight: "padding-right",
    paddingBottom: "padding-bottom",
    color: "color",
  };

  const definitionOutput = (property: string, value: string) => {
    if (property === "background-image") {
      //return `background-image: url('${value.originalImageURL}');\n`;
    } else if (property === "background-repeat") {
      return `background-repeat: ${value ? "repeat" : "no-repeat"};\n`;
    } else {
      return `${property}: ${value};\n`;
    }
  };

  const {
    attributes: { styles },
  } = block;

  let cssStyles = ``;
  if (styles && typeof styles[screenSize] !== "undefined") {
    for (const [style] of Object.entries(availableStyles)) {
      if (
        // @TODO: Fix TypeScript error
        typeof styles[screenSize][style] !== "undefined" &&
        styles[screenSize][style]
      ) {
        cssStyles += definitionOutput(
          availableStyles[style],
          styles[screenSize][style]
        );
      }
    }
  }

  return cssStyles;
}
