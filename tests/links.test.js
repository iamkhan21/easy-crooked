import parseHtmlToMarkdown from "../lib";

import samples from "./samples/links.json";

describe("Links", () => {
  test("a", () => {
    const { sample, expected } = samples["a"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("title", () => {
    const { sample, expected } = samples["title"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("inside paragraph", () => {
    const { sample, expected } = samples["paragraph"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
