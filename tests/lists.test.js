import parseHtmlToMarkdown from "../lib";

import samples from "./samples/lists.json";

describe("Lists", () => {
  test("ol", () => {
    const { sample, expected } = samples["ol"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("ul", () => {
    const { sample, expected } = samples["ul"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
