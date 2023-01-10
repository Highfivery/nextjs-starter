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

export type BlockProps =
  | CoreParagraphBlockProps
  | CoreParagraphBlockProps
  | CoreButtonsBlockProps
  | CoreButtonBlockProps
  | CoreHeadingBlockProps;
