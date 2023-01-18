/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { useEffect, useState } from "react";

/**
 * Internal dependencies
 */
import basicStyles from "!css-loader!sass-loader!@/styles/atomic-design/base.scss";
import wordPressStyles from "!css-loader!sass-loader!@/styles/wordpress/style.scss";

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
  ant: {
    lazyStyles: [
      basicStyles
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
  const [styles, setStyles] = useState([]);
  const { lazyStyles, externalStyles, classes } = config[context.globals.css];

  console.log(context)

  useEffect(() => {
    setStyles(lazyStyles);
  }, [context.globals.css], lazyStyles);

  return (
    <div className={classnames(classes)}>
      {externalStyles.map((stylesheet) => (
        <link key={stylesheet} rel="stylesheet" href={stylesheet} />
      ))}
      {styles.map((style) => (
        <style>{style.toString()}</style>
      ))}
      <Story {...context} />
    </div>
  );
};
