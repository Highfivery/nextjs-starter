/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * React dependencies
 */
import { useEffect, useState } from "react";
import { ConfigProvider } from 'antd';

/**
 * Import styles
 */
import light from '@/tokens/light.json';
import dark from '@/tokens/dark.json';
import wordPressStyles from "!css-loader!sass-loader!@/styles/wordpress/style.scss";
import atomicStyles from "!css-loader!sass-loader!@/styles/atomic-design/style.scss"

/**
 * A Storybook decorator to inject global CSS.
 *
 * This helps test whether our components have sufficient styles to
 * hold up in various CSS environments.
 */

const config = {
  shared: {
    lazyStyles: [],
    externalStyles: [],
    classes: [],
  },
  antLight: {
    lazyStyles: [
      light
    ],
    externalStyles: [],
    classes: [],
  },
  antDark: {
    lazyStyles: [
      dark
    ],
  },
  atomic: {
    lazyStyles: [
      atomicStyles
    ],
    externalStyles: [],
    classes: [],
  },
  wordpress: {
    lazyStyles: [
      wordPressStyles,
    ],
    externalStyles: [],
    // In wp-admin, these classes are added to the body element,
    // which is used as a class scope for some relevant styles in the external
    // stylesheets listed above. We simulate that here by adding the classes to a wrapper element.
    classes: ["wp-admin", "wp-core-ui"],
  },
};

export const WithGlobalCSS = (Story, context) => {
  const { lazyStyles, externalStyles, classes } = config[context.globals.css];

  const [styles, setStyles] = useState([]);
  const [token, setToken] = useState(light);

  // useEffect - Changes the lazy styles as per the selected option
  useEffect(() => {
    if(context.globals.css === 'antDark' || context.globals.css === 'antLight') {
      setToken(...lazyStyles)
    } else {
      setStyles(lazyStyles)
    }
  }, [context.globals.css], lazyStyles);

  return (
    <div className={classnames(classes)}>
      {externalStyles?.map((stylesheet) => (
        <link key={stylesheet} rel="stylesheet" href={stylesheet} />
      ))}
      {styles?.map((style) => (
        <style>{style.toString()}</style>
      ))}
       <ConfigProvider theme={{token}}>
        <Story {...context} />
      </ConfigProvider>
    </div>
  );
};
