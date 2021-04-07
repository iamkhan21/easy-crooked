import parseHtmlToMarkdown from "../lib";

import samples from "./samples/line_breaks.json";

describe("Line Breaks", () => {
  test("br", () => {
    const { sample, expected } = samples["paragraph"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("header breaks", () => {
    const { sample, expected } = samples["header"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("several breaks", () => {
    const { sample, expected } = samples["several"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
