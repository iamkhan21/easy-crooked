import parseHtmlToMarkdown from "./index";

const samples = {
  H1: { sample: "<h1>Test H1 parsing</h1>", expected: "# Test H1 parsing" },
  H2: { sample: "<h2>Test H2 parsing</h2>", expected: "## Test H2 parsing" },
  H3: { sample: "<h3>Test H3 parsing</h3>", expected: "### Test H3 parsing" },
  H4: { sample: "<h4>Test H4 parsing</h4>", expected: "#### Test H4 parsing" },
  H5: { sample: "<h5>Test H5 parsing</h5>", expected: "##### Test H5 parsing" },
  H6: {
    sample: "<h6>Test H6 parsing</h6>",
    expected: "###### Test H6 parsing",
  },
  tag: { sample: "", expected: "" },
};

describe("parseHtmlToMarkdown should be able to parse", () => {
  describe("headings tags", () => {
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
      expect(
        parseHtmlToMarkdown("<h1>Test H1</h1><h4>parsing</h4><h2>test</h2>"),
      ).toBe("# Test H1\n#### parsing\n## test");
    });
  });
});
