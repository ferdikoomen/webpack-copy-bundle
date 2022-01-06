'use strict';

const path = require('path');

const WebpackCopyBundle = require('./src');

module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname, './test/index.js'),

    devtool: false,

    output: {
        path: path.resolve(__dirname, './test/dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new WebpackCopyBundle({
            main: '../tmp',
        }),
    ],
};
