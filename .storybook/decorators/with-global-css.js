/**
 * react dependencies
 */
import { useEffect, useState } from "react";

/**
 * Import antd dependencies
 */
import { ConfigProvider } from "antd";

/**
 * Import styles
 */
import light from "@/tokens/light.json";
import projectStyles from "!css-loader!sass-loader!@/styles/atomic-design/style.scss";
import projectTheme from "!css-loader!sass-loader!@/styles/atomic-design/themes/default.scss";

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
  const [token, setToken] = useState(light);

  // useEffect - Changes the lazy styles as per the selected option
  useEffect(
    () => {
      if (
        context.globals.css === "antDark" ||
        context.globals.css === "antLight"
      ) {
        setToken(...lazyStyles);
      } else {
        setStyles(lazyStyles);
      }
    },
    [context.globals.css],
    lazyStyles
  );

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;800&display=swap"
        rel="stylesheet"
      ></link>

      {externalStyles?.map((stylesheet) => (
        <link key={stylesheet} rel="stylesheet" href={stylesheet} />
      ))}
      {styles?.map((style) => (
        <style>{style.toString()}</style>
      ))}
      <ConfigProvider theme={{ token }}>
        <Story {...context} />
      </ConfigProvider>
    </>
  );
};
