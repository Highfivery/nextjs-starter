/**
 * Import external dependencies
 */
import cn from "classnames";

/**
 * Import internal functions
 */
import generateStyles from "@/functions/gutenberg/generateStyles";

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
  // @TODO: Needs to be a more specific type
  token: Object;
  Component: ({ className }: { className: string }) => JSX.Element;
}

export const BlockStyle = ({
  className,
  block,
  token,
  Component,
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
        .${className} {
          ${generateStyles(block, "xs")}
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
          .${className} {
            ${generateStyles(block, "sm")}
          }
        }

        @media (min-width: ${token[
            screens.md.antdToken as keyof typeof token
          ]}px) {
          .${className} {
            ${generateStyles(block, "md")}
          }
        }

        @media (min-width: ${token[
            screens.lg.antdToken as keyof typeof token
          ]}px) {
          .${className} {
            ${generateStyles(block, "lg")}
          }
        }

        @media (min-width: ${token[
            screens.xl.antdToken as keyof typeof token
          ]}px) {
          .${className} {
            ${generateStyles(block, "xl")}
          }
        }

        @media (min-width: ${token[
            screens.xxl.antdToken as keyof typeof token
          ]}px) {
          .${className} {
            ${generateStyles(block, "xxl")}
          }
        }
      `}</style>
    </>
  );
};
