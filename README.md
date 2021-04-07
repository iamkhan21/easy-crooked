# easy-crooked (under development)

---

**easy-crooked** is a JavaScript library for converting HTML into Markdown.

![npm](https://img.shields.io/npm/v/easy-crooked)
[![minizipped size](https://badgen.net/bundlephobia/minzip/easy-crooked)](https://bundlephobia.com/result?p=easy-crooked)
[![Tests](https://github.com/iamkhan21/easy-crooked/workflows/CI/badge.svg)](https://github.com/iamkhan21/easy-crooked/actions)
[![codecov](https://codecov.io/gh/iamkhan21/easy-crooked/branch/master/graph/badge.svg)](https://codecov.io/gh/iamkhan21/easy-crooked)
[![GitHub license](https://img.shields.io/github/license/iamkhan21/easy-crooked?style=flat)](https://github.com/iamkhan21/easy-crooked/blob/master/LICENSE)

* [Installation](#installation)
* [Usage](#usage)
* [TODO](#todo)

---


## Installation
Install using the package manager for your desired environment(s):
``` bash
npm install easy-crooked
# OR:
yarn add easy-crooked
```


## Usage
``` javascript
import parseHtmlToMarkdown from "easy-crooked";

const htmlString = `<h1>Hello Easy Crooked!</h1>`;
const markdown = parseHtmlToMarkdown(htmlString);

console.log(markdown); // # Hello Easy Crooked!
```


## TODO

### Basic Syntax
- [ ] Code
- [ ] Lists
- [ ] Horizontal Rules
- [ ] Blockquotes (beautify nested)
- [ ] Escaping Characters

### Extended Syntax
- [ ] Tables
