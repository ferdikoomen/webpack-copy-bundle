'use strict';

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

/**
 * The 'webpack-copy-bundle' plugin copies bundle outputs to a specific folder.
 * This works different from the copy plugin, since this waits for the bundle
 * to be completed and allows you to copy the bundle anywhere!
 *
 * @param mappings The mappings between the bundle name and the output dir.
 */
function WebpackCopyBundle(mappings) {
    this._mappings = mappings || {};
}

WebpackCopyBundle.prototype.apply = function (compiler) {

    // Fetch the mapping from the plugin initialization.
    const mappings = this._mappings;

    // Wait for the compiler to be done
    compiler.hooks.done.tap('WebpackCopyBundle', stats => {

        // Fetch the output chunks
        const statsJson = stats.toJson();
        const chunks = statsJson.chunks;

        // Iterate over each chunk
        chunks.forEach(chunk => {
            const chunkName = chunk.names[0];
            const mapping = mappings[chunkName];

            // If we have a mapping for this chunk name then continue...
            if (mapping) {

                // Iterate over each file in te chunk (javascript, sourcemap, css, etc.).
                chunk.files.forEach(file => {

                    // Resolve te input and output paths
                    const outputPath = compiler.options.output.path;
                    const outputFile = path.resolve(outputPath, file);
                    const destinationPath = path.resolve(outputPath, mapping);
                    const destinationFile = `${destinationPath}${path.sep}${file}`;

                    // Make sure the destination path is correct.
                    mkdirp.sync(destinationPath);

                    // And finally copy the file
                    fs.copyFileSync(outputFile, destinationFile);
                });
            }
        });
    });
};

module.exports = WebpackCopyBundle;
