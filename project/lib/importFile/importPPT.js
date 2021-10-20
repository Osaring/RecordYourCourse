import ZipFile from 'adm-zip';
//const ZipFile = require('adm-zip');

function importPresentation() {

    document.getElementById('file').click();
    document.getElementById("file").addEventListener('change', (e) => {

        const file = e.target.files[0];

        console.log(file)
        const extension = file.name.split('.');
        console.log(extension[extension.length-1]);
        console.log(file.name)
        
        // Get a Zip FILE
        const fileToZip = new ZipFile();
        fileToZip.addLocalFile('./');
        fileToZip.writeZip('./document1.zip');
       
        // Dézipper 
        // GEt XML FILE
        // Table des matières
        // Slides => Images / Timing
      
        

        if (file === "") return "";
        else return file.name;

    })
}

export { importPresentation };
