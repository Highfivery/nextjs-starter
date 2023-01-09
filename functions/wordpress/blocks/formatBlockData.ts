export default async function formatBlockData(blocks) {
  if (!blocks || !blocks.length) {
    return [];
  }

  return await Promise.all(
    blocks.map(async (block) => {
      const { name, attributes, innerBlocks } = block;

      const innerBlocksFormatted = await formatBlockData(innerBlocks);

      return { name, attributes, innerBlocks: innerBlocksFormatted };
    })
  );
}
