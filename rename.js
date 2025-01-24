const fs = require('fs');
const path = require('path');

/**
 * Renames files with one extension to another recursively in a directory.
 * @param {string} directory - The directory to process.
 * @param {string} oldExt - The old file extension (e.g., `.txt`).
 * @param {string} newExt - The new file extension (e.g., `.md`).
 * @param {string[]} ignoreFiles - Array of filenames to ignore.
 * @param {string[]} ignoreDirs - Array of directory names to ignore.
 */
function renameFilesRecursively(directory, oldExt, newExt, ignoreFiles = [], ignoreDirs = []) {
    // Read the contents of the directory
    fs.readdir(directory, (err, items) => {
        if (err) {
            console.error(`Error reading directory ${directory}: ${err.message}`);
            return;
        }

        // Process each item in the directory
        items.forEach(item => {
            const itemPath = path.join(directory, item);
            const stat = fs.statSync(itemPath);

            if (stat.isDirectory()) {
                // Skip ignored directories
                if (ignoreDirs.includes(item)) {
                    console.log(`Ignoring directory: ${itemPath}`);
                    return;
                }
                // Recursively process subdirectories
                renameFilesRecursively(itemPath, oldExt, newExt, ignoreFiles, ignoreDirs);
            } else if (stat.isFile()) {
                // Skip ignored files
                if (ignoreFiles.includes(item)) {
                    console.log(`Ignoring file: ${itemPath}`);
                    return;
                }

                // Check if the file has the old extension
                if (path.extname(item) === oldExt) {
                    const newFilePath = path.join(directory, path.basename(item, oldExt) + newExt);

                    // Rename the file
                    fs.rename(itemPath, newFilePath, err => {
                        if (err) {
                            console.error(`Error renaming file ${itemPath}: ${err.message}`);
                        } else {
                            console.log(`Renamed: ${itemPath} -> ${newFilePath}`);
                        }
                    });
                }
            }
        });
    });
}

// Usage example
const directory = 'C:\\2024\\portfolio'; // Replace with your directory path
const oldExtension = '.jsx'; // Replace with the old extension
const newExtension = '.tsx'; // Replace with the new extension
const ignoreFiles = ['important.txt']; // Files to ignore
const ignoreDirs = ['node_modules', 'backup','.next','.vercel','.vscode','.git']; // Directories to ignore

renameFilesRecursively(directory, oldExtension, newExtension, ignoreFiles, ignoreDirs);