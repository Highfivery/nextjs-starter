import { create } from "@storybook/theming/create";

/**
 * Configure Storybook theme.
 *
 * @see https://storybook.js.org/docs/react/configure/theming#create-a-theme-quickstart
 */
export default create({
  base: "light",
  brandTitle: "Next.js Starter",
  brandUrl: "https://github.com/Highfivery/nextjs-starter",
  brandImage:
    "https://raw.githubusercontent.com/Highfivery/nextjs-starter/main/public/nextjs-starter.svg",
});
