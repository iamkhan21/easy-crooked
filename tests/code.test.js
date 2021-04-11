import parseHtmlToMarkdown from "../lib";

import samples from "./samples/code.json";

describe("Code", () => {
  test("code", () => {
    const { sample, expected } = samples["code"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("backticks", () => {
    const { sample, expected } = samples["backticks"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("pre", () => {
    const { sample, expected } = samples["pre"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
  test("pre with code", () => {
    const { sample, expected } = samples["pre_code"];
    expect(parseHtmlToMarkdown(sample)).toBe(expected);
  });
});
