// Import Next.js dependencies
import dynamic from "next/dynamic";

// Import function dependencies
import getBlockStyles from "@/functions/wordpress/blocks/getBlockStyles";

// Import component dependencies
import RichText from "@/components/atomic-design/atoms/RichText";
import Blocks from "@/components/wordpress/Blocks/Blocks";
import { paragr } from "@wordpress/components";

export default function displayBlock(
  block: {},
  index: number,
  designSystem: "ant" | "atomic" | "wordpress"
) {
  const { attributes, name, innerBlocks } = block;

  // prettier-ignore
  switch (name) {
    /* -- CORE BLOCKS -- */
    case 'core/buttons': {
      const ButtonGroup = dynamic(() => import('@wordpress/components').then(mod => mod.ButtonGroup))
      return <ButtonGroup key={index}>{!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}</ButtonGroup>
    }

    case 'core/button': {
      const { text, className, ...props} = attributes;
      const Button = dynamic(() => import('@wordpress/components').then(mod => mod.Button))
      const buttonStyle = getBlockStyles(props);

      return <Button key={index} style={buttonStyle} className={className}><RichText>{text}</RichText></Button>
    }

    case 'core/paragraph': {
      console.log(block);
      // @TODO: Parse remaining props into the component
      const { content, className, anchor, ...props} = attributes;
      // @TODO: Fix TypeScript error
      const RichText = dynamic(() => {
        switch(designSystem) {
          case "wordpress":
          case "atomic":
            return import('@/components/atomic-design/atoms/RichText').then(mod => mod.default)
          default:
            return import('@/components/atomic-design/atoms/RichText').then(mod => mod.default)
        }

      })
      const paragraphStyle = getBlockStyles(props);

      return <RichText tag="p" {...attributes} id={anchor} key={index} style={paragraphStyle} className={className}>{content}</RichText>
    }

    case 'core/heading': {
      const { text, className, anchor, ...props} = attributes;
      const Heading = dynamic(() => import('@wordpress/components').then(mod => mod.Button))
      const buttonStyle = getBlockStyles(props);

      return <Heading key={index} style={buttonStyle} className={className}><RichText>{text}</RichText></Heading>
    }
  }
}
