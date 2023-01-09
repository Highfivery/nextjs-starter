import { postTypes } from "@/lib/wordpress/_config/postTypes";

export default function isValidPostType(postType: string) {
  return Object.keys(postTypes).includes(postType);
}
