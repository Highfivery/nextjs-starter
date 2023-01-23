import { RowProps, ButtonProps } from "antd";

export interface CoreBlockProps {
  attributes: {
    anchor?: string;
    backgroundColor?: string;
    className?: string;
    content?: string;
    fontSize?: string;
    gradient?: string;
    style?: {
      border?: {
        radius?: string;
      };
      color?: {
        background?: string;
        text?: string;
      };
      typography?: {
        fontStyle?: string;
        fontWeight?: string;
        textTransform?: string;
      };
    };
    textColor?: string;
    visibility?: {};
  };
  innerBlocks?: BlockProps[];
  name: string;
}

// core/paragraph
export interface CoreParagraphBlockProps extends CoreBlockProps {
  attributes: {
    dropCap?: boolean;
  };
}

// core/buttons
export interface CoreButtonsBlockProps extends CoreBlockProps {}

// core/button
export interface CoreButtonBlockProps extends CoreBlockProps {
  attributes: {
    linkTarget?: string;
    rel?: string;
    text?: string;
    title?: string;
    url?: string;
    width?: number;
  };
}

// core/heading
export interface CoreHeadingBlockProps extends CoreBlockProps {
  attributes: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
}

// gutenberg-ant-design/button
export interface GutenbergAntDesignButtonBlockProps extends CoreBlockProps {
  attributes: {
    text?: string;
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    href?: string;
    htmlType?: ButtonProps.htmlType;
    icon?: string;
    loading?: number;
    shape?: "default" | "circle" | "round";
    size?: "large" | "middle" | "small";
    target?: string;
    type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  };
}

export interface GutenbergAntDesignBlockStylesProps {
  backgroundColor: string
}

// gutenberg-ant-design/row
export interface GutenbergAntDesignRowBlockProps extends CoreBlockProps {
  attributes: {
    gutter?: number | {} | [];
    align?: RowProps.align
    justify?: RowProps.justify
    wrap?: boolean;
    styles: {
      xs: GutenbergAntDesignBlockStylesProps;
      sm: GutenbergAntDesignBlockStylesProps;
      md: GutenbergAntDesignBlockStylesProps;
      lg: GutenbergAntDesignBlockStylesProps;
      xl: GutenbergAntDesignBlockStylesProps;
      xxl: GutenbergAntDesignBlockStylesProps
    };
  };
}

// gutenberg-ant-design/col
type GutenbergAntDesignColScreenProps = {
  flex?: string | number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  span?: number;
};
export interface GutenbergAntDesignColBlockProps extends CoreBlockProps {
  attributes: {
    xs?: GutenbergAntDesignColScreenProps;
    sm?: GutenbergAntDesignColScreenProps;
    md?: GutenbergAntDesignColScreenProps;
    lg?: GutenbergAntDesignColScreenProps;
    xl?: GutenbergAntDesignColScreenProps;
    xxl?: GutenbergAntDesignColScreenProps;
  };
}

export type BlockProps =
  | CoreParagraphBlockProps
  | CoreParagraphBlockProps
  | CoreButtonsBlockProps
  | CoreButtonBlockProps
  | CoreHeadingBlockProps
  | GutenbergAntDesignButtonBlockProps
  | GutenbergAntDesignRowBlockProps
  | GutenbergAntDesignColBlockProps;
