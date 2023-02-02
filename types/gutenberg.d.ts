// Import antd dependencies
import {
  RowProps,
  ColProps,
  TypographyProps,
  ButtonProps,
  ImageProps,
} from "antd";

export interface GutenbergAntDesignAttributes {
  api?: {};
  visibility?: {};
  styles?:
    | {
        // @TODO: key should be one of the screen sizes: xs, sm, md, etc.
        [key: string]: {
          backgroundType: string;
        };
      }
    | undefined;
}

export interface GutenbergGlobalBlockProps {
  name: string;
  innerBlocks?: GutenbergBlockProps[];
  attributes: GutenbergAntDesignAttributes;
}

export interface GutenbergAntDesignRowBlockProps
  extends GutenbergGlobalBlockProps {
  attributes: {
    api: RowProps;
  };
}

export interface GutenbergAntDesignColBlockProps
  extends GutenbergGlobalBlockProps {
  attributes: {
    api: ColProps;
  };
}

export interface GutenbergAntDesignTitleBlockProps
  extends GutenbergGlobalBlockProps {
  attributes: {
    api: TypographyProps & { text: string };
  };
}

export interface GutenbergAntDesignParagraphBlockProps
  extends GutenbergGlobalBlockProps {
  attributes: {
    api: TypographyProps & { text: string };
  };
}

export interface GutenbergAntDesignButtonBlockProps
  extends GutenbergGlobalBlockProps {
  attributes: {
    api: ButtonProps & { text: string };
  };
}

export interface GutenbergAntDesignImageBlockProps
  extends GutenbergGlobalBlockProps {
  attributes: {
    api: Omit<ImageProps, "src"> & {
      text: string;
      src: { alt: string; url: string; width: number; height: number };
    };
    settings?: {
      size?: {
        width?: number;
        height?: number;
      };
    };
  };
}
