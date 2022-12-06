/**
 * Import application global styles/CSS framework below.
 */

/**
 * Entermedia's minimal CSS framework
 * @see https://github.com/Entermedia-LLC/scss
 */
import "normalize.css/normalize.css";
import "@/theme/base.scss";
import "@/theme/themes/default.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
