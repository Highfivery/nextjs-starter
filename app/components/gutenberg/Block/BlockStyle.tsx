// Import internal functions
import generateStyles from "@/functions/gutenberg/generateStyles";

// Screen size
const screens: { [key: string]: { antdToken: string } } = {
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
  // classname
  className: string;
  // needs to be any
  block: any;
  // style token object
  token: Object;
  // component that needs to be rendered
  Component: ({ className }: { className: string }) => JSX.Element
}

export const BlockStyle = ({className, block, token, Component}: BlockStyleProps) => {
  return (
    <>
    <Component className={className} />
    <style jsx>{`
      .${className} {
        ${generateStyles(block, "xs")}
      }

      @media (min-width: ${token[screens.sm.antdToken as keyof typeof token]}px) {
        .${className} {
          ${generateStyles(block, "sm")}
        }
      }

      @media (min-width: ${token[screens.md.antdToken as keyof typeof token]}px) {
        .${className} {
          ${generateStyles(block, "md")}
        }
      }

      @media (min-width: ${token[screens.lg.antdToken as keyof typeof token]}px) {
        .${className} {
          ${generateStyles(block, "lg")}
        }
      }

      @media (min-width: ${token[screens.xl.antdToken as keyof typeof token]}px) {
        .${className} {
          ${generateStyles(block, "xl")}
        }
      }

      @media (min-width: ${token[screens.xxl.antdToken as keyof typeof token]}px) {
        .${className} {
          ${generateStyles(block, "xxl")}
        }
      }
    `}</style>
    </>
  )
}
