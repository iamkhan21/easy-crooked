const newLine = "  \n";

const h1 = { start: "# ", end: newLine };
const h2 = { start: "## ", end: newLine };
const h3 = { start: "### ", end: newLine };
const h4 = { start: "#### ", end: newLine };
const h5 = { start: "##### ", end: newLine };
const h6 = { start: "###### ", end: newLine };

const blockquote = { start: "> ", end: newLine };
const paragraph = { start: "", end: newLine };
const lineBreak = { start: "", end: newLine };

const list = { start: "", end: newLine };
const hr = { start: "", end: `---${newLine}` };

const emphasisBold = { start: "**", end: "**" };
const emphasisItalic = { start: "*", end: "*" };

/**
 *
 * @param {Element} element
 * @return {{start: string, end: string}}
 */
export function getMarkdownRepresentation({
  name,
  parent,
  type,
  data,
  attribs,
}) {
  if (type === "text") {
    return { start: data, end: "" };
  }

  const { alt, src, href, title } = attribs;

  switch (name) {
    case "h1":
      return h1;
    case "h2":
      return h2;
    case "h3":
      return h3;
    case "h4":
      return h4;
    case "h5":
      return h5;
    case "h6":
      return h6;
    case "blockquote":
      return blockquote;
    case "p":
      return paragraph;
    case "hr":
      return hr;
    case "br":
      return lineBreak;
    case "strong":
    case "b":
      return emphasisBold;
    case "em":
    case "i":
      return emphasisItalic;
    case "ol":
    case "ul":
      return list;
    case "img":
      return {
        start: `![${alt}](${src}${title ? ` "${title}"` : ""})`,
        end: "",
      };
    case "a":
      return {
        start: "[",
        end: `](${href}${title ? ` "${title}"` : ""})`,
      };
    case "li":
      if (parent.name === "ul") {
        return { start: "- ", end: "\n" };
      }
      return { start: ". ", end: "\n" };
  }

  return { start: "", end: "" };
}
