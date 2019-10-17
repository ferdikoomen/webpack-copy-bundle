'use strict';

const fs = require('fs');
const path = require('path');

test('is copied', () => {
    const sourcePath = path.resolve(process.cwd(), './test/dist/bundle.js');
    const targetPath = path.resolve(process.cwd(), './test/tmp/bundle.js');

    const sourceExists = fs.existsSync(sourcePath);
    const targetExists = fs.existsSync(targetPath);

    const sourceStats = fs.statSync(sourcePath);
    const targetStats = fs.statSync(targetPath);

    expect(sourceExists).toBeTruthy();
    expect(targetExists).toBeTruthy();
    expect(sourceStats.size).toBeGreaterThan(0);
    expect(targetStats.size).toBeGreaterThan(0);
    expect(sourceStats.size).toEqual(targetStats.size);
});
