const CONST_COURS_PATH="";

var fs = require('fs');

function importPresentation() {
    return new Promise((resolve, reject) => {
        document.getElementById('file').click();
        document.getElementById('file').addEventListener('change', (e) => {
            if (e.target.files) {
                const file = e.target.files[0];
                console.log("metadata file ", file);

                const splitFilename = file.name.split('.');
                const extension = splitFilename[splitFilename.length - 1];

                copyFileImported(file, extension);
                zipFile(file, extension);
                console.log("[importPresentation] success");
                //CONST_COURS_PATH = choosePath();
                console.log(CONST_COURS_PATH)
            }
        })
        resolve("ok");
    })
}

function copyFileImported(file, extension){
    const splitPath = file.path.split('.');
    var pathNewFile = splitPath[0] + "_copie." + extension;
    fs.copyFile(file.path, pathNewFile, (err) => {
        if (err) {
            alert("Le fichier importé n'a pas été copié");
            throw err;
        }
    });
    console.log("[copyFileImported] success");
}

function zipFile(file, extension) {
    console.log("[ZipFile] start");
    console.log(file)
    const splitPath = file.path.split('.');

    var oldPath = splitPath[0] + '_copie.' + extension;
    var newPath = splitPath[0] + '.zip';
    console.log('splitPath ', oldPath);
    console.log('splitPath ', newPath);

    fs.rename(oldPath, newPath , function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
    console.log("[ZipFile] success")
}

function choosePath() {
    path = "test path"
    return path;
}

export { importPresentation };
