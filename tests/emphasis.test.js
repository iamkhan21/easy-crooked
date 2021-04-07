import parseHtmlToMarkdown from "../lib";

import samples from "./samples/emphasis.json";

describe("Emphasis (bold anf italic)", () => {
  test("strong", () => {
    const { sample, expected } = samples["strong"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("b", () => {
    const { sample, expected } = samples["b"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("bold 1 in paragraph", () => {
    const { sample, expected } = samples["bold_p_1"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("bold 2 in paragraph", () => {
    const { sample, expected } = samples["bold_p_2"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });

  test("em", () => {
    const { sample, expected } = samples["em"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("i", () => {
    const { sample, expected } = samples["i"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("italic in paragraph 1", () => {
    const { sample, expected } = samples["italic_p_1"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("italic in paragraph 2", () => {
    const { sample, expected } = samples["italic_p_2"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("bold and italic", () => {
    const { sample, expected } = samples["combo"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
