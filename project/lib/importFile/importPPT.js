var fs = require('fs');

function importPresentation() {
    return new Promise((resolve, reject) => {
        document.getElementById('file').click();
        document.getElementById('file').addEventListener('change', (e) => {
            if (e.target.files) {
                const file = e.target.files[0];
                console.log("length ", e.target.files.length)
                const splitFilename = file.name.split('.');
                console.log("metadata file ", file)
                console.log("extension file ", splitFilename[splitFilename.length - 1]);

                zipFile(file, splitFilename[0]);
                console.log("fin importFile")
            }
        })
        resolve("ok");
    })
}

function zipFile(file, name) {
    console.log("zipFile");
    const splitPath = file.path.split('.');
    console.log(splitPath);

    var newPath = splitPath[0] + ".zip";
    console.log(newPath);

    fs.rename(file.path, newPath, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
}

export { importPresentation, zipFile };
