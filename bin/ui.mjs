//requiring path and fs modules
import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, '../src/ui');

let indexPath = path.join(directoryPath, 'index.ts');
fs.truncate(indexPath, 0, function () {});

const getFilesRecursively = directory => {
    const filesInDirectory = fs.readdirSync(directory);
    // console.log(filesInDirectory);
    for (const file of filesInDirectory) {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) {
            // skip Icons
            if (absolute.split('/').pop() == 'Icons') {
                continue;
            }
            getFilesRecursively(absolute);
        } else {
            if (!absolute.endsWith('vue')) {
                continue;
            }
            let relativePath = absolute.split('/ui/').pop();

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

getFilesRecursively(directoryPath);
