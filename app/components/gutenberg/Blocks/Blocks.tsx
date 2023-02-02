"use client";

/**
 * Import internal component dependencies
 */
import Block from "../Block/Block";

/**
 * Import @antd dependencies
 */
import { theme } from "antd";

/**
 * Import internal function dependencies
 */
import antDesignStyles from "@/functions/gutenberg/antDesignStyles";

// Import TypeScript definitions
import { GutenbergGlobalBlockProps } from "@/types/gutenberg";

export default function Blocks(props: {
  blocks: GutenbergGlobalBlockProps[];
  post: {};
}) {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <>
      {
        // If there are blocks, loop over and display.
        !!props?.blocks?.length &&
          props.blocks.map(
            (block: GutenbergGlobalBlockProps, index: number) => (
              <Block key={index} block={block} post={props?.post} />
            )
          )
      }
      <style jsx>{
        // @TODO: Find a way to ensure this only get's loaded once per page, not per Blocks component. Styles shouldn't be scoped.
        `
          ${antDesignStyles(token)}
        `
      }</style>
    </>
  );
}
