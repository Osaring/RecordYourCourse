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
    const splitPath = file.path.split('/');
    console.log(splitPath);

    var newPath = "/";
    for(var i = 1; i <= splitPath.length - 2; i++){
        newPath += splitPath[i] + "/";
    }
    newPath += name + ".zip";

    console.log(newPath);
    fs.rename(file.path, newPath , function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });


    /*
    zip.file(name+".zip", file, {blob: true});
    zip.generateAsync({type:"blob"}).then(function (content) {
        location.href="data:application/zip;base64," + content;
    });
    return ;

    */
}

export { importPresentation, zipFile };
