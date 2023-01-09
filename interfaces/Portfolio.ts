import { MarkdownItem } from "./Markdown";

export interface Portfolio extends MarkdownItem {
  coverImage: string;
  employee: string;
  employeeTime: number;
  employeeImage: string;
  highlights: string[];
}
