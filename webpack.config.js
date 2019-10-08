'use strict';

const path = require('path');

const CopyBundlePlugin = require('./src');

module.exports = {

    mode: 'development',

    entry: path.resolve(__dirname, './test/index.js'),

    output: {
        path: path.resolve(__dirname, './test/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new CopyBundlePlugin({
            'main': '../tmp',
        })
    ]
};
