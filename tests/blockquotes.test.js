import parseHtmlToMarkdown from "../lib";

import samples from "./samples/blockquotes.json";

describe("Blockquotes", () => {
  test("blockquote", () => {
    const { sample, expected } = samples["blockquote"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
