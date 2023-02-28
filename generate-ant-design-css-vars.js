/**
 * Does the conversion of json into valid css variables.
 * e.g: colorTextQuaternary will be converted to --antd-colortextquaternary
 * blue.1 will be converted to --antd-blue-1
 */
export function convertJsonToCssVariables(json) {
  let cssVars = ":root {\n";

  for (const key in json) {
    const value = json[key];
    const varName = "--antd-" + key.replace(/\./g, "-").toLowerCase();

    if (typeof value === "number" && !varName.includes("weight")) {
      cssVars += `\t${varName}: ${value}px;\n`;
    } else {
      cssVars += `\t${varName}: ${value};\n`;
    }
  }

  cssVars += "}";

  return cssVars;
}
