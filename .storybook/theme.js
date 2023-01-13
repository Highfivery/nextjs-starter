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
    "https://raw.githubusercontent.com/Highfivery/nextjs-starter/952a4ed25887fb2a1c97e08cfa308da408210d7b/public/nextjs-starter.svg",
});
