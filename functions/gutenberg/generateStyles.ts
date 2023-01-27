// Import TypeScript definitions
import { GutenbergGlobalBlockProps, GutenbergAntDesignAttributes } from "@/types/gutenberg";

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

  const definitionOutput = (property: string, value: string | undefined) => {
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

  const stylesArr = styles as GutenbergAntDesignAttributes['styles']
  

  let cssStyles = ``;
  if (stylesArr?.[screenSize as keyof typeof styles]) {
    for (const [style] of Object.entries(availableStyles)) {
      // @TODO: styles is a object of type { [key: string]: string | undefined } so style doesn't really exist on styles[screenSize]. This seems to be incorrect and needs discussion with ben.
      const key = style as any
      if (
        stylesArr?.[screenSize as keyof typeof styles]?.[key]
      ) {
        cssStyles += definitionOutput(
          availableStyles[style],
          stylesArr?.[screenSize as keyof typeof styles]?.[key]
        );
      }
    }
  }
  return cssStyles;
}
