"use client";

// Import component dependencies
import Block from "../Block/Block";

// Import TypeScript definitions
import { GutenbergBlockProps } from "@/types/gutenberg";

export default function Blocks(props: { blocks: GutenbergBlockProps[] }) {
  return (
    <>
      {
        // If there are blocks, loop over and display.
        !!props?.blocks?.length &&
          props.blocks.map((block: GutenbergBlockProps, index: number) => (
            <Block key={index} block={block} />
          ))
      }
    </>
  );
}
