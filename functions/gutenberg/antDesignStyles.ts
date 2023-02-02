/**
 * Import internal dependencies
 */
import { screens } from "@/components/gutenberg/Block/BlockStyle";

/**
 * Creates the styles needed for the Gutenberg Any Design components
 * @TODO: Make the screen sizes dynamic, pulled deom @antd
 */
export default function antDesignStyles(token: Object) {
  let styles = ``;

  // Add visibility classses
  styles += `
  @media (max-width: ${token[screens.xs.antdToken as keyof typeof token]}px) {
    .gutenberg-ant-design-xs-hide {
      display: none;
    }
  }

  @media (min-width: ${
    token[screens.xs.antdToken as keyof typeof token]
  }px) and (max-width: ${token[screens.sm.antdToken as keyof typeof token]}px) {
    .gutenberg-ant-design-sm-hide {
      display: none;
    }
  }

  @media (min-width: ${
    token[screens.sm.antdToken as keyof typeof token]
  }px) and (max-width: ${token[screens.md.antdToken as keyof typeof token]}px) {
    .gutenberg-ant-design-md-hide {
      display: none;
    }
  }

  @media (min-width: ${
    token[screens.md.antdToken as keyof typeof token]
  }px) and (max-width: ${token[screens.lg.antdToken as keyof typeof token]}px) {
    .gutenberg-ant-design-lg-hide {
      display: none;
    }
  }

  @media (min-width: ${
    token[screens.lg.antdToken as keyof typeof token]
  }px) and (max-width: ${token[screens.xl.antdToken as keyof typeof token]}px) {
    .gutenberg-ant-design-xl-hide {
      display: none;
    }
  }

  @media (min-width: ${token[screens.xxl.antdToken as keyof typeof token]}px) {
    .gutenberg-ant-design-xxl-hide {
      display: none;
    }
  }
  `;

  return styles;
}
