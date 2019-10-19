# Webpack Copy Bundle Plugin

[![NPM](https://badgen.net/npm/v/webpack-copy-bundle)](https://www.npmjs.com/package/webpack-copy-bundle)
[![License](https://badgen.net/npm/license/webpack-copy-bundle)](https://www.npmjs.com/package/webpack-copy-bundle)
[![Dependencies](https://badgen.net/david/dep/ferdikoomen/webpack-copy-bundle)](https://david-dm.org/ferdikoomen/webpack-copy-bundle)
[![Build Size](https://badgen.net/bundlephobia/minzip/webpack-copy-bundle)](https://bundlephobia.com/result?p=webpack-copy-bundle)
[![Build Status](https://badgen.net/travis/ferdikoomen/webpack-copy-bundle/master)](https://travis-ci.org/ferdikoomen/webpack-copy-bundle)
[![Quality](https://badgen.net/lgtm/grade/javascript/g/ferdikoomen/webpack-copy-bundle)](https://lgtm.com/projects/g/ferdikoomen/webpack-copy-bundle)

> Webpack plugin to copy your bundle after a successful build.

In some cases you might want to copy your bundle to a directory after a successful build. 
However, Webpack does not allow you to do these 'out-of-source' builds. You can use the standard
[Webpack Copy Plugin](https://github.com/webpack-contrib/copy-webpack-plugin), however then you
need to manually copy all related files (bundle, source-map, etc.). To make this a bit easier
you can use the [Webpack Copy Bundle Plugin](https://www.npmjs.com/package/webpack-copy-bundle)

Using this plugin you can give a list of bundles to copy and where to copy them to. The plugin
takes care of copying all of the related files to the output directory.

## Installation

```
npm install webpack-copy-bundle --save-dev
```

## Usage

```js
const WebpackCopyBundle = require('./src');

module.exports = {

    entry: './src/index.js',

    plugins: [
        new WebpackCopyBundle({
            main: '../example/folder',
        })
    ]
};
```

Example of multiple entries:

```js
const WebpackCopyBundle = require('./src');

module.exports = {

    entry: {
        main: './src/index.js',
        worker: './src/worker.js'
    },

    plugins: [
        new WebpackCopyBundle({
            main: '../example/folder',
            worker: '../example/folder/worker',
        })
    ]
};
```
