function chooseDirectory() {
    return new Promise((resolve, reject) => {
        alert("Sélectionner un fichier situé à l'endroit où vous voulez enregistrer le cours.")
        document.getElementById('inputChoosePath').click();
        document.getElementById('inputChoosePath').addEventListener('change', (e) => {
            if (e.target.files) {
                const file = e.target.files[0];
                console.log("file ", file);

                const splitPath = file.path.split('.');
                // const newSplitPath = splitPath[0].concat('\\..\\'); // windows
                const newSplitPath = splitPath[0].concat('/../'); // windows


                console.log("[choosePath] ", newSplitPath);
                resolve("promise chooseDirectory");
            }
        })
    })
}

export { chooseDirectory };