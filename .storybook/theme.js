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
    "https://raw.githubusercontent.com/Highfivery/nextjs-starter/8d57589e0fcef4875944bb15ed16aa07fe49aebd/public/nextjs-starter.svg",
});
