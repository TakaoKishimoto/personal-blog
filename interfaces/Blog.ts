import { MarkdownItem } from "./Markdown";

export interface Blog extends MarkdownItem {
  coverImage: string;
  author: string;
  authorImage: string;
}
