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
    color: "color",
  };

  const definitionOutput = (
    property: string,
    // @TODO: Type properly, { originalImageURL: string } | string | undefined
    value: any
  ) => {
    if (property === "background-image") {
      return `background-image: url('${value.originalImageURL}');\n`;
    } else if (property === "background-repeat") {
      return `background-repeat: ${value ? "repeat" : "no-repeat"};\n`;
    } else {
      return `${property}: ${value};\n`;
    }
  };

  const {
    attributes: { styles },
  } = block;

  const stylesArr = styles as GutenbergGlobalBlockProps["attributes"]["styles"];

  if (stylesArr?.[screenSize as keyof typeof styles]) {
    let cssStyles = ``;

    // Handle background types
    const backgroundType =
      // @TODO: Fix TypeScript error
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
      // @TODO: styles is a object of type { [key: string]: string | undefined } so style doesn't really exist on styles[screenSize]. This seems to be incorrect and needs discussion with ben.
      const key = style as any;
      if (stylesArr?.[screenSize as keyof typeof styles]?.[key]) {
        cssStyles += definitionOutput(
          filteredAvailableStyles[style],
          stylesArr?.[screenSize as keyof typeof styles]?.[key]
        );
      }
    }

    return cssStyles;
  }
}
