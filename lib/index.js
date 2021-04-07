import parseHtmlString from "html-dom-parser";

import { getMarkdownRepresentation } from "./tag-markdown";

/**
 *
 * @param {Element} element
 * @return {string}
 */
function covertHtmlElementToMarkdown(element) {
  const { children = [] } = element;
  const { start, end } = getMarkdownRepresentation(element);
  const markdown = [start];

  for (const child of children) {
    markdown[markdown.length] = covertHtmlElementToMarkdown(child);
  }
  markdown[markdown.length] = end;
  // console.log(12, markdown);
  return markdown.join("");
}

/**
 *
 * @param {string} htmlString
 * @return {string}
 */
export default function parseHtmlToMarkdown(htmlString) {
  const markdown = [];

  const elements = parseHtmlString(htmlString);

  for (const element of elements) {
    markdown[markdown.length] = covertHtmlElementToMarkdown(element);
  }

  return markdown.join("");
}
