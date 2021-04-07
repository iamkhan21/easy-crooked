import parseHtmlToMarkdown from "../lib";

import samples from "./samples/html.json";

describe("parseHtmlToMarkdown should be able to parse", () => {
  test("HTML page", () => {
    const { sample, expected } = samples["html"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
