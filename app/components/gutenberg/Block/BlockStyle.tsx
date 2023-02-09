/**
 * Import external dependencies
 */
import cn from "classnames";

/**
 * Import internal functions
 */
import generateStyles from "@/functions/gutenberg/generateStyles";

/**
 * Import typeScript definitions
 */
import { GlobalToken } from "antd/es/theme/interface";



// Screen size
// @TODO: Convert these to be dynamic, pulled from @antd
export const screens: { [key: string]: { antdToken: string } } = {
  xs: {
    antdToken: "screenXS",
  },
  sm: {
    antdToken: "screenSM",
  },
  md: {
    antdToken: "screenMD",
  },
  lg: {
    antdToken: "screenLG",
  },
  xl: {
    antdToken: "screenXL",
  },
  xxl: {
    antdToken: "screenXXL",
  },
};

interface BlockStyleProps {
  className: string;
  // @TODO: Needs to be properly scoped
  block: any;
  /** antd theme token */
  token: GlobalToken
  Component: ({ className }: { className: string }) => JSX.Element;
  /** CSS selector for additional specificity */
  selector?: string;
}

export const BlockStyle = ({
  className,
  block,
  token,
  Component,
  selector,
}: BlockStyleProps) => {

  const classNames = [className];

  // Handle visibility
  if (block?.attributes?.visibility) {
    for (const [screenSize] of Object.entries(screens)) {
      if (!block.attributes.visibility.includes(screenSize)) {
        classNames.push(`gutenberg-ant-design-${screenSize}-hide`);
      }
    }
  }

  return (
    <>
      <Component className={cn(classNames)} />
      <style jsx>{`
        ${selector ? selector : ""}.${className} {
          ${generateStyles(block, "xs", token)}
        }

        ${
          /* @TODO: Find a way to make the class name scoped, see #11 */
          block?.attributes?.styles?.xs?.custom &&
          block?.attributes?.styles?.xs?.custom.length
            ? block.attributes.styles.xs.custom.replace(
                "selector",
                `.${className}`
              )
            : ``
        }

        @media (min-width: ${token[
          screens.sm.antdToken as keyof typeof token
        ]}px) {
          ${selector}.${className} {
            ${generateStyles(block, "sm", token)}
          }
        }

        @media (min-width: ${token[
            screens.md.antdToken as keyof typeof token
          ]}px) {
          ${selector}.${className} {
            ${generateStyles(block, "md", token)}
          }
        }

        @media (min-width: ${token[
            screens.lg.antdToken as keyof typeof token
          ]}px) {
          ${selector}.${className} {
            ${generateStyles(block, "lg", token)}
          }
        }

        @media (min-width: ${token[
            screens.xl.antdToken as keyof typeof token
          ]}px) {
          ${selector}.${className} {
            ${generateStyles(block, "xl", token)}
          }
        }

        @media (min-width: ${token[
            screens.xxl.antdToken as keyof typeof token
          ]}px) {
          ${selector}.${className} {
            ${generateStyles(block, "xxl", token)}
          }
        }
      `}</style>
    </>
  );
};
