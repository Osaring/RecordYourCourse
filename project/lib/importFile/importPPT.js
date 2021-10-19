
function importPresentation() {

    document.getElementById('file').click();
    document.getElementById("file").addEventListener('change', (e) => {

        const file = e.target.files[0];

        console.log(file)
        const extension = file.name.split('.');
        console.log(extension[extension.length-1]);
        console.log(file.name)

        // dézipper le ppt pour avoir le xml

        getXMLFile(file);

        if (file === "") return "";
        else return file.name;

    })
}

function getXMLFile(file) {

    return null;
}

export { importPresentation, getXMLFile };
