const fs = require('fs');
const fse = require('fs-extra');

function chooseDirectory() {
    return new Promise((resolve, reject) => {
        // alert("Sélectionner un fichier situé à l'endroit où vous voulez enregistrer le cours.")
        document.getElementById('inputChoosePath').click();
        document.getElementById('inputChoosePath').addEventListener('change', (e) => {
            if (e.target.files) {
                const file = e.target.files[0];
                const splitPathWithPoint = file.path.split('.');
                const splitPath = splitPathWithPoint[0].split('/'); // mac
                // const splitPath = splitPathWithPoint[0].split('\\..\\'); // windows

                console.log(splitPath.length)
                var newDirectoryPath = "";
                for(var i = 0; i < splitPath.length - 1; i++){
                    newDirectoryPath += splitPath[i] + '/';
                }

                const finalPath = createRepository(newDirectoryPath);
                console.log("[choosePath] ", finalPath)
                resolve(finalPath);
            }
        })
    })
}

function createRepository(newDirectoryPath){
    var path = newDirectoryPath + 'newCourse/';
    var i = 1;
    while (fs.existsSync(path)){
        path = newDirectoryPath + 'newCourse_' + i + '/';
        i += 1;
    }
    const pathTemplateCourse = __dirname + '/../../lib/templateCourse/';

    // Create repo for new course
    fs.mkdirSync(path);

    // Copy templateCourse into new repo
    fse.copySync(pathTemplateCourse + 'images/', path + 'images/');
    fse.copySync(pathTemplateCourse + 'css/', path + 'css/');
    fse.copySync(pathTemplateCourse + 'controls/', path + 'controls/');
    fs.copyFile(pathTemplateCourse + 'index.html', path + 'index.html', (err) => {
        if (err) throw err;
    })
    return path;
}


export {
    chooseDirectory
};