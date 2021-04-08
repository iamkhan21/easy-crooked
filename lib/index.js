import parseHtmlString from "html-dom-parser";

import { getMarkdownRepresentation } from "./tag-markdown";

/**
 *
 * @param {string} html
 * @return {string}
 */
function normalizeHtml(html) {
  return html.replace(/\n+/gm, "").replace(/\s{2,}/gm, " ");
}

/**
 *
 * @param {Element} element
 * @return {string}
 */
function covertHtmlElementToMarkdown(element) {
  const { name, children = [] } = element;
  const { start, end } = getMarkdownRepresentation(element);
  const markdown = [start];

  let x = 0;
  for (const child of children) {
    if (name === "ol") {
      ++x;
      markdown[markdown.length] = `${x}${covertHtmlElementToMarkdown(child)}`;
      continue;
    }
    markdown[markdown.length] = covertHtmlElementToMarkdown(child);
  }
  markdown[markdown.length] = end;

  return markdown.join("");
}

/**
 *
 * @param {string} htmlString
 * @return {string}
 */
export default function parseHtmlToMarkdown(htmlString) {
  const markdown = [];
  const normalizedHtml = normalizeHtml(htmlString);

  const elements = parseHtmlString(normalizedHtml);

  for (const element of elements) {
    markdown[markdown.length] = covertHtmlElementToMarkdown(element);
  }

  return markdown.join("").trim();
}
