import parseHtmlToMarkdown from "../lib";

import samples from "./samples/images.json";

describe("Images", () => {
  test("img", () => {
    const { sample, expected } = samples["img"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
