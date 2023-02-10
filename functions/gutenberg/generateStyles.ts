// Import TypeScript definitions
import { GutenbergGlobalBlockProps } from "@/types/gutenberg";
import { GlobalToken } from "antd/es/theme/interface";

/**
 * Converts the Gutenberg Ant Design plugin styles attribute to styles
 */
export default function generateStyles(
  block: GutenbergGlobalBlockProps,
  screenSize: string,
  token: GlobalToken & { [key: string]: any }
) {
  const availableStyles: { [key: string]: string } = {
    backgroundGradient: "background",
    backgroundColor: "background-color",
    backgroundImage: "background-image",
    backgroundRepeat: "background-repeat",
    backgroundSize: "background-size",
    backgroundPosition: "background-position",
    paddingLeft: "padding-left",
    paddingTop: "padding-top",
    paddingRight: "padding-right",
    paddingBottom: "padding-bottom",
    marginLeft: "margin-left",
    marginTop: "margin-top",
    marginRight: "margin-right",
    marginBottom: "margin-bottom",
    color: "color",
    containerWidth: "max-width",
    containerHeight: "height",
    fontSize: "font-size",
    fontFamily: "font-family",
  };

  const definitionOutput = (
    property: string | undefined,
    value: string | { url: string }
  ) => {
    if (typeof property == "undefined" || typeof value == "undefined" || value === '') {
      return null;
    }

    if (property.startsWith("padding-") || property.startsWith("margin-")) {
      if (typeof value !== "undefined" && typeof value === "string") {
        return `${property}: ${token[value]}px;\n`;
      } else {
        return `${property}: ${value};\n`;
      }
    } else if (property === "background-image" && typeof value === "object") {
      return `background-image: url('${value.url}');\n`;
    } else if (property === "background-repeat") {
      return `background-repeat: ${value ? "repeat" : "no-repeat"};\n`;
    } else if (property === "max-width" && value !== "full-width") {
      return `margin-left: auto;\nmargin-right: auto;\nmax-width: ${value}px;\n`;
    } else if (property !== "max-width") {
      return `${property}: ${value};\n`;
    }

    return false;
  };

  const {
    attributes: { styles },
  } = block;

  let cssStyles = ``;

  const stylesArr = styles as GutenbergGlobalBlockProps["attributes"]["styles"];
  if (stylesArr?.[screenSize as keyof typeof styles]) {
    // Handle background types
    const backgroundType =
      typeof stylesArr[screenSize] !== "undefined" &&
      typeof stylesArr[screenSize].backgroundType !== "undefined"
        ? stylesArr[screenSize].backgroundType
        : false;
    const filteredStyles = [];
    switch (backgroundType) {
      case "gradient":
        filteredStyles.push("backgroundImage");
        filteredStyles.push("backgroundRepeat");
        filteredStyles.push("backgroundSize");
        filteredStyles.push("backgroundPosition");
        filteredStyles.push("backgroundColor");
        break;
      case "classic":
        filteredStyles.push("backgroundGradient");
        break;
    }

    const filteredAvailableStyles = { ...availableStyles };
    for (const [key] of Object.entries(filteredAvailableStyles)) {
      if (filteredStyles.includes(key)) {
        delete filteredAvailableStyles[key];
      }
    }

    for (const [style] of Object.entries(filteredAvailableStyles)) {
      const key =
        style as keyof GutenbergGlobalBlockProps["attributes"]["styles"];

      cssStyles +=
        definitionOutput(
          filteredAvailableStyles[style],
          stylesArr?.[screenSize as keyof typeof styles]?.[key]
        ) || ``;
    }
  }

  return cssStyles;
}
