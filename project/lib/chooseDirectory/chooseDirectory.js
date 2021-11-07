var fs = require('fs');

function chooseDirectory() {
    return new Promise((resolve, reject) => {
        alert("Sélectionner un fichier situé à l'endroit où vous voulez enregistrer le cours.")
        document.getElementById('inputChoosePath').click();
        document.getElementById('inputChoosePath').addEventListener('change', (e) => {
            if (e.target.files) {
                const file = e.target.files[0];
                console.log("file ", file);

                const splitPathWithPoint = file.path.split('.');
                const splitPath = splitPathWithPoint[0].split('/'); // mac
                // const splitPath = splitPathWithPoint[0].split('\\..\\'); // windows
                console.log(splitPath.length)

                var newDirectoryPath = "";
                for(var i = 0; i < splitPath.length - 1; i++){
                    newDirectoryPath += splitPath[i] + '/';
                }
                console.log("[choosePath] ", newDirectoryPath);

                createRepository(newDirectoryPath);
                resolve("promise chooseDirectory");
            }
        })
    })
}

function createRepository(newDirectoryPath){
    const path = newDirectoryPath + 'newCourse/';
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}

export { chooseDirectory };