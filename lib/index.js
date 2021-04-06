import {
  h1Regex,
  h2Regex,
  h3Regex,
  h4Regex,
  h5Regex,
  h6Regex,
} from "./tag-regexs";
import { h1Md, h2Md, h3Md, h4Md, h5Md, h6Md } from "./tag-markdown";

export default function parseHtmlToMarkdown(htmlText) {
  const markdownText = htmlText
    .replace(h1Regex, h1Md)
    .replace(h2Regex, h2Md)
    .replace(h3Regex, h3Md)
    .replace(h4Regex, h4Md)
    .replace(h5Regex, h5Md)
    .replace(h6Regex, h6Md)
    .trim();

  return markdownText;
}
