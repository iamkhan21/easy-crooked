const h1Md = { start: "# ", end: "  \n" };
const h2Md = { start: "## ", end: "  \n" };
const h3Md = { start: "### ", end: "  \n" };
const h4Md = { start: "#### ", end: "  \n" };
const h5Md = { start: "##### ", end: "  \n" };
const h6Md = { start: "###### ", end: "  \n" };

const paragraphMd = { start: "", end: "  \n" };
const blockquoteMd = { start: "> ", end: "  \n" };
const lineBreakMd = { start: "", end: "  \n" };

const emphasisBold = { start: "**", end: "**" };
const emphasisItalic = { start: "*", end: "*" };

/**
 *
 * @param {Element} element
 * @return {{start: string, end: string}}
 */
export function getMarkdownRepresentation({ name, type, data, attribs }) {
  if (type === "text") {
    return { start: data, end: "" };
  }
  const { alt, src, href, title } = attribs;

  switch (name) {
    case "h1":
      return h1Md;
    case "h2":
      return h2Md;
    case "h3":
      return h3Md;
    case "h4":
      return h4Md;
    case "h5":
      return h5Md;
    case "h6":
      return h6Md;
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
    case "blockquote":
      return blockquoteMd;
    case "p":
      return paragraphMd;
    case "br":
      return lineBreakMd;
    case "strong":
    case "b":
      return emphasisBold;
    case "em":
    case "i":
      return emphasisItalic;
  }

  return { start: "", end: "" };
}
