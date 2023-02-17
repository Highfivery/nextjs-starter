/**
 * Import internal dependencies
 */
import connector from "@/lib/wordpress/connector";
import queryFormById from "@/lib/wordpress/gravityForms/queryFormById";

export default async function getGfFormById(id: string) {
  const form = await connector(queryFormById, { id });

  return form;
}
