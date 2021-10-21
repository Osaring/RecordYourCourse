const JSZip = require('jszip')
const FileSaver = require('file-saver');

async function importPresentation() {
    return new Promise((resolve,reject)=>{

        document.getElementById('file').click();
        document.getElementById("file").addEventListener('change', (e) => {
            while (e.target.files && e.target.files.length === 0){
                const file = e.target.files[0];
                const extension = file.name.split('.');
                console.log("metadata file ", file)
                console.log("filename ", file.name)
                console.log("extension file ", extension[extension.length-1]);
                zipFile(file); // zip le fichier importé
                console.log("fileeee return")
            }
        })
    })
}

function zipFile(file) {
    return new Promise((resolve,reject)=>{

        const zip = new JSZip();
        const name = file.name.split('.')[0] + ".zip";
        zip.file(name, file);
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            saveAs(content, name);
            /*
            var item = {
            'name': name,
            'type': content.type,
            'size': content.size,
            'guid': generatorguid()
            };
            */
        });
        console.log("zipfile func")
    })
}

function getXMLFile(zipFile) {
    console.log("zipFile ", zipFile)
    return ;
}


export { importPresentation, zipFile, getXMLFile };
