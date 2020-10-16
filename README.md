# Webpack Copy Bundle Plugin

[![NPM][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
[![Coverage][coverage-image]][coverage-url]
[![Quality][quality-image]][quality-url]
[![Code Climate][climate-image]][climate-url]
[![Downloads][downloads-image]][downloads-url]

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

```javascript
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

```javascript
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

[npm-url]: https://npmjs.org/package/webpack-copy-bundle
[npm-image]: https://img.shields.io/npm/v/webpack-copy-bundle.svg
[license-url]: LICENSE
[license-image]: http://img.shields.io/npm/l/webpack-copy-bundle.svg
[travis-url]: https://travis-ci.org/ferdikoomen/webpack-copy-bundle
[travis-image]: https://img.shields.io/travis/ferdikoomen/webpack-copy-bundle.svg
[deps-url]: https://david-dm.org/ferdikoomen/webpack-copy-bundle
[deps-image]: https://img.shields.io/david/ferdikoomen/webpack-copy-bundle.svg
[coverage-url]: https://codecov.io/gh/ferdikoomen/webpack-copy-bundle
[coverage-image]: https://img.shields.io/codecov/c/github/ferdikoomen/webpack-copy-bundle.svg
[quality-url]: https://lgtm.com/projects/g/ferdikoomen/webpack-copy-bundle
[quality-image]: https://img.shields.io/lgtm/grade/javascript/g/ferdikoomen/webpack-copy-bundle.svg
[climate-url]: https://codeclimate.com/github/ferdikoomen/webpack-copy-bundle
[climate-image]: https://img.shields.io/codeclimate/maintainability/ferdikoomen/webpack-copy-bundle.svg
[downloads-url]: http://npm-stat.com/charts.html?package=webpack-copy-bundle
[downloads-image]: http://img.shields.io/npm/dm/webpack-copy-bundle.svg
