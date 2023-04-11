export function convertJsonToCssVariables(
  json: {
    [key: string]: string;
  },
  prefix: string
) {
  let cssVars = ":root {\n";

  for (const key in json) {
    const value = json[key];
    const varName = `--${prefix}` + key.replace(/\./g, "-").toLowerCase();

    if (typeof value === "number" && !varName.includes("weight")) {
      cssVars += `\t${varName}: ${value}px;\n`;
    } else {
      cssVars += `\t${varName}: ${value};\n`;
    }
  }

  cssVars += "}";

  return cssVars;
}
