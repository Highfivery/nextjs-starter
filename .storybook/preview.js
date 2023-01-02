/**
 * Import application global styles/CSS framework below.
 */

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  storySort: {
    order: [
      "Atomic Design",
      ["Atoms", "Molecules", "Organisms", "Templates"],
      "Ant Design",
      [
        "Components",
        [
          "General",
          [
            "Button",
            "Typography",
            ["Typography", "Text", "Title", "Paragraph"],
          ],
        ],
      ],
      "Drupal",
      "WordPress",
    ],
  },
};
