// Import antd dependencies
import { RowProps, ColProps, TypographyProps } from "antd";

export interface GutenbergAntDesignAttributes {
  api?: {};
  visibility?: {};
  styles?: { [key: string]: string | undefined };
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

export type GutenbergBlockProps =
  | GutenbergAntDesignRowBlockProps
  | GutenbergAntDesignColBlockProps;
