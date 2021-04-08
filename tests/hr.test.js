import parseHtmlToMarkdown from "../lib";

import samples from "./samples/hr.json";

describe("Links", () => {
  test("hr", () => {
    const { sample, expected } = samples["hr"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
