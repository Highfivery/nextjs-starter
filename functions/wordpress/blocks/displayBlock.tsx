// Import Next.js dependencies
import dynamic from "next/dynamic";

// Import package dependencies
import parse from "html-react-parser";
import cn from "classnames";

// Import function dependencies
import getBlockStyles from "@/functions/wordpress/blocks/getBlockStyles";
import getBlockClasses from "@/functions/wordpress/blocks/getBlockClasses";

// Import types
import {
  BlockProps,
  CoreButtonBlockProps,
  CoreBlockProps,
  CoreParagraphBlockProps,
  CoreHeadingBlockProps,
} from "@/types/wordpress/blocks";

// Import component dependencies
import Blocks from "@/components/wordpress/Blocks/Blocks";

/**
 * Outputs a Gutenberg block component.
 * @TODO: Fix TypeScript errors.
 */
export default function displayBlock(block: BlockProps, index: number) {
  const { attributes, name, innerBlocks } = block;

  // @TODO: Fix TypeScript error.
  // @ts-ignore
  const Text = dynamic(() =>
    import("@/components/wordpress/Text").then((mod) => mod.default)
  );

  // prettier-ignore
  switch (name) {
    /* -- CORE BLOCKS -- */
    case 'core/buttons': {
      const ButtonGroup = dynamic(() => import('@wordpress/components').then(mod => mod.ButtonGroup))
      return <ButtonGroup key={index}>{!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}</ButtonGroup>
    }

    case 'core/button': {
      const { text, className, url, ...props} = attributes as CoreButtonBlockProps['attributes'] & CoreBlockProps['attributes'];
      const Button = dynamic(() => import('@wordpress/components').then(mod => mod.Button))
      const buttonStyle = getBlockStyles(props);
      const buttonHtmlText = parse(String(text));

      const classNames = getBlockClasses(attributes);
      if(className) {
        classNames.push(className);
      }

      return <Button key={index} style={buttonStyle} className={cn(classNames)} href={url || undefined}>{buttonHtmlText || ""}</Button>
    }

    case 'core/paragraph': {
      const { content, className, anchor, ...props} = attributes as CoreParagraphBlockProps['attributes'] & CoreBlockProps['attributes'];;
      const paragraphStyle = getBlockStyles(props);

      return <Text Tag="p" {...props} id={anchor} key={index} style={paragraphStyle} className={className}>{content || ""}</Text>
    }

    case 'core/heading': {
      const { level, content, className, style, ...props } = attributes as CoreHeadingBlockProps['attributes'] & CoreBlockProps['attributes'];;
      const headingStyle = getBlockStyles(props);

      const classNames = getBlockClasses(attributes);
      if(className) {
        classNames.push(className);
      }

      // @TODO: Fix TypeScript error
      return <Text key={index} Tag={`h${level}`} className={classNames} style={headingStyle} elementStyles={style?.elements}>{content || ""}</Text>
    }
  }
}
