"use client";

// Import functions
import displayBlock from "@/functions/wordpress/blocks/displayBlock";

// Import types
import { BlockProps } from "@/types/wordpress/blocks";

export default function Blocks(props: { blocks: BlockProps[] }) {
  console.log(props.blocks);
  return (
    <>
      {
        // If there are blocks, loop over and display.
        !!props?.blocks?.length &&
          props.blocks.map((block: BlockProps, index: number) => {
            return displayBlock(block, index);
          })
      }
    </>
  );
}
