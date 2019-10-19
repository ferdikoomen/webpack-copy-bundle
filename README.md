# Webpack Copy Bundle Plugin

[![NPM](https://badgen.net/npm/v/webpack-copy-bundle)](https://www.npmjs.com/package/webpack-copy-bundle)
[![License](https://badgen.net/npm/license/webpack-copy-bundle)](https://www.npmjs.com/package/webpack-copy-bundle)
[![Dependencies](https://badgen.net/david/dep/ferdikoomen/webpack-copy-bundle)](https://david-dm.org/ferdikoomen/webpack-copy-bundle)
[![Build Size](https://badgen.net/bundlephobia/minzip/webpack-copy-bundle)](https://bundlephobia.com/result?p=webpack-copy-bundle)
[![Build Status](https://badgen.net/travis/ferdikoomen/webpack-copy-bundle)](https://travis-ci.org/ferdikoomen/webpack-copy-bundle)
[![Quality](https://badgen.net/lgtm/grade/javascript/g/ferdikoomen/webpack-copy-bundle)](https://lgtm.com/projects/g/ferdikoomen/webpack-copy-bundle)

> Webpack plugin to copy your bundle after a successful build.

## Installation

```
npm install webpack-copy-bundle --save-dev
```

##Usage

```js
'use strict';

const WebpackCopyBundle = require('./src');

module.exports = {

    entry: './test/index.js',

    plugins: [
        new WebpackCopyBundle({
            main: '../example/folder',
        })
    ]
};
```
