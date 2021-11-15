var fs = require('fs');

function importPresentation(choosePathDirectory) {
    return new Promise((resolve, reject) => {
        // alert("Sélectionner le PowerPoint que vous voulez présenter.")
        document.getElementById('inputChooseFile').click();
        document.getElementById('inputChooseFile').addEventListener('change', (e) => {
            if (e.target.files) {
                const file = e.target.files[0];
                console.log("metadata selected file ", file);

                const splitFilename = file.name.split('.');
                const extension = splitFilename[splitFilename.length - 1];

                copyFileImported(file, extension);
                const pathZipFile = zipFile(file, extension);
                moveFile(file, pathZipFile, choosePathDirectory)
                console.log("[importPresentation] success");

                // modify index html
                // modifyIndex("test");

                resolve("promise import");
            }
        })
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
    console.log('[New path Zip File] ', newPath);

    fs.rename(oldPath, newPath , function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
    console.log("[ZipFile] success")
    return newPath;
}

function moveFile(file, pathZipFile, choosePathDirectory){
    const splitName = file.name.split('.');
    choosePathDirectory += splitName[0] + '.zip'

    new Promise((resolve, reject) => {
        fs.copyFileSync(pathZipFile, choosePathDirectory, fs.constants.COPYFILE_FICLONE, (err) => {
            if (err) throw err;
            resolve('success');
        })
    })
    .then((response) => {
        if(response = 'success'){
            fs.unlink(pathZipFile, function(err) {
                if(err) throw err;
                console.log('[Delete old zip file] success');
            });
            console.log("[MoveFile] success");
        }
    });
}

export {
    importPresentation
};
