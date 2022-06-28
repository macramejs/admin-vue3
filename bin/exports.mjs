//requiring path and fs modules
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dirs to work
let paths = [
    { path: '../src/ui', split: '/ui/' },
    { path: '../src/layout', split: '/layout/' },
    { path: '../src/modules/content/elements', split: '/content/elements/' },
];

const getFilesRecursively = (directory, indexPath, split) => {
    console.log(directory);
    const filesInDirectory = fs.readdirSync(directory);
    // console.log(filesInDirectory);
    for (const file of filesInDirectory) {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) {
            // skip Icons
            if (absolute.split('/').pop() == 'Icons') {
                continue;
            }
            getFilesRecursively(absolute, indexPath, split);
        } else {
            if (!absolute.endsWith('vue')) {
                continue;
            }
            let relativePath = absolute.split(split).pop();

            let indexLine = `export { default as ${relativePath
                .split('/')
                .pop()
                .replace('.vue', '')}} from "./${relativePath}"\n`;

            fs.appendFile(indexPath, indexLine, function (err) {
                if (err) throw err;
            });
        }
    }
};
const directoryPath = dir => path.join(__dirname, dir);

const work = p => {
    let indexPath = path.join(directoryPath(p.path), 'index.ts');
    fs.truncate(indexPath, 0, function () {});
    getFilesRecursively(directoryPath(p.path), indexPath, p.split);
};

paths.forEach(p => {
    work(p);
});
