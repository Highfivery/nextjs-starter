"use client";

import displayBlock from "@/functions/wordpress/blocks/displayBlock";

export default function Blocks({ blocks }) {
  return (
    <>
      {
        // If there are blocks, loop over and display.
        !!blocks?.length &&
          blocks.map((block, index) => {
            return displayBlock(block, index);
          })
      }
    </>
  );
}
