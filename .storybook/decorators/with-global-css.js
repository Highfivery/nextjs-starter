/**
 * react dependencies
 */
import { useEffect, useState } from "react";

/**
 * Import styles
 */
import light from "@/tokens/light.json";
import projectStyles from "!css-loader!sass-loader!@/styles/atomic-styles/style.scss";
import projectTheme from "!css-loader!sass-loader!@/styles/atomic-styles/themes/default.scss";

/**
 * A Storybook decorator to inject global CSS.
 *
 * This helps test whether our components have sufficient styles to
 * hold up in various CSS environments.
 */

const config = {
  project: {
    lazyStyles: [projectStyles, projectTheme],
    externalStyles: [],
  },
  antLight: {
    lazyStyles: [light],
    externalStyles: [],
  },
};

export const WithGlobalCSS = (Story, context) => {
  const { lazyStyles, externalStyles } = config[context.globals.css];

  const [styles, setStyles] = useState([]);

  useEffect(
    () => {
      setStyles(lazyStyles);
    },
    [context.globals.css],
    lazyStyles
  );

  return (
    <>
      {externalStyles?.map((stylesheet) => (
        <link key={stylesheet} rel="stylesheet" href={stylesheet} />
      ))}
      {styles?.map((style) => (
        <style>{style.toString()}</style>
      ))}

      <Story {...context} />
    </>
  );
};
