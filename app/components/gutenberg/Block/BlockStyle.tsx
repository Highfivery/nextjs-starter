/**
 * Import external dependencies
 */
import cn from "classnames";

/**
 * Import internal functions
 */
import generateStyles from "@/functions/gutenberg/generateStyles";
import css from "styled-jsx/css";

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

  // Get scoped class names for each screen-size and add it to classNames array.
  const scopedStyles = Object?.entries(block?.attributes?.styles || {})?.reduce(
    (acc: any, [key, value]: any) => {
      const { className, newStyles } = scopeStyles(value.custom);
      acc[key] = { className, newStyles };
      if(newStyles) {
        classNames.push(className);
      }
      return acc;
    },
    {}
  );

  // @TODO: Find a better way to manage styles. 
  return (
    <>
      <Component className={cn(classNames)} />
      <style jsx>{`
        ${selector ? selector : ""}.${className} {
          ${generateStyles(block, "xs", token)}
        }
        ${scopedStyles['xs']?.newStyles}
        @media (min-width: ${token[
            screens.sm.antdToken as keyof typeof token
          ]}px) {
          ${selector ? selector : ""}.${className} {
            ${generateStyles(block, "sm", token)}
          }
          ${scopedStyles['sm']?.newStyles ? scopedStyles['sm'].newStyles : ''}
        }

        @media (min-width: ${token[
            screens.md.antdToken as keyof typeof token
          ]}px) {
          ${selector ? selector : ""}.${className} {
            ${generateStyles(block, "md", token)}
          }
          ${scopedStyles['md']?.newStyles ? scopedStyles['md'].newStyles : ''}
        }

        @media (min-width: ${token[
            screens.lg.antdToken as keyof typeof token
          ]}px) {
          ${selector ? selector : ""}.${className} {
            ${generateStyles(block, "lg", token)}
          }
          ${scopedStyles['lg']?.newStyles ? scopedStyles['lg'].newStyles : ''}
        }

        @media (min-width: ${token[
            screens.xl.antdToken as keyof typeof token
          ]}px) {
          ${selector ? selector : ""}.${className} {
            ${generateStyles(block, "xl", token)}
          }
          ${scopedStyles['xl']?.newStyles ? scopedStyles['xl'].newStyles : ''}
        }

        @media (min-width: ${token[
            screens.xxl.antdToken as keyof typeof token
          ]}px) {
          ${selector ? selector : ""}.${className} {
            ${generateStyles(block, "xxl", token)}
          }
          ${scopedStyles['xxl']?.newStyles ? scopedStyles['xxl'].newStyles : ''}
        }
      `}</style>
    </>
  );
};

// returns a scoped class and a styled scoped class object.
const scopeStyles = (value: string) => {
  // generates a unique class
  const { className } = css.resolve`
    ${value}
  `;
  // replaces a selector value with the uniqueClass
  const newStyles = value?.replace("selector", `.${className}`);

  return { newStyles, className };
};
