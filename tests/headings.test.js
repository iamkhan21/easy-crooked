import parseHtmlToMarkdown from "../lib";

import samples from "./samples/headings.json";

describe("Headings", () => {
  test("H1", () => {
    const { sample, expected } = samples["H1"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("H2", () => {
    const { sample, expected } = samples["H2"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("H3", () => {
    const { sample, expected } = samples["H3"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("H4", () => {
    const { sample, expected } = samples["H4"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("H5", () => {
    const { sample, expected } = samples["H5"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("H6", () => {
    const { sample, expected } = samples["H6"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("siblings", () => {
    const { sample, expected } = samples["siblings"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
