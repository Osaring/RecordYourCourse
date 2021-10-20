import * as JSZip from '../../node_modules/jszip/dist/jszip.js';

function importPresentation() {

    document.getElementById('file').click();
    document.getElementById("file").addEventListener('change', (e) => {

        const file = e.target.files[0];

        console.log(file)
        const extension = file.name.split('.');
        console.log(extension[extension.length-1]);
        console.log(file.name)
        
        getXMLFile(file);
    
        if (file === "") return "";
        else return file.name;

    })
}

function getXMLFile(file) {
    //
    var zip = new JSZip();
    zip.add(file, {base64: true});
    content = zip.generate();
    location.href = "data:application/zip;base64," + content;
    //
}

export { importPresentation, getXMLFile };
