import parseHtmlToMarkdown from "../lib";

import samples from "./samples/paragraphs.json";

describe("Paragraphs", () => {
  test("p", () => {
    const { sample, expected } = samples["p"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("spaces", () => {
    const { sample, expected } = samples["spaces"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("siblings", () => {
    const { sample, expected } = samples["siblings"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
