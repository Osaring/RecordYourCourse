const JSZip = require('jszip')
const FileSaver = require('file-saver');
const zip = new JSZip();

async function importPresentation() {
    document.getElementById('file').click();
    const p = new Promise (function (resolve, reject) {
        document.getElementById('file').addEventListener('change', (e) => {

            if (e.target.files) {
                const file = e.target.files[0];
                console.log("length ", e.target.files.length)
                const splitFilename = file.name.split('.');
                console.log("metadata file ", file)
                console.log("extension file ", splitFilename[splitFilename.length - 1]);

                zipFile().catch((err) => {
                    console.log(err);
                });

                // unzipFile(splitFilename[Ø]+".zip");
                console.log("fin importFile")
                resolve("ok")
            }
        })
    })
    return p;
}

function zipFile(file) {
    const p = new Promise (function (resolve, reject) {
        console.log("début zipFile");

        const name = file.name.split('.')[0] + ".zip";
        zip.file(name, file);
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            saveAs(content, name);
        });
        console.log("fin zipFile")
        resolve("ok")
    })
    return p;
}

function unzipFile(file) {
    zip.loadAsync(file).then(function (zip) {
        Object.keys(zip.files).forEach(function (filename) {
            zip.files[filename].async('string').then(function (fileData) {
                console.log(fileData) // These are your file contents
            })
        })
    })
}

export { importPresentation, zipFile, unzipFile };
