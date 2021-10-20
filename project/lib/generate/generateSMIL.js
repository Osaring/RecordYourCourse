const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const chemin = __dirname + '/../../history/cours1/';

const generateSMIL = document.querySelector('button#generate');
generateSMIL.addEventListener('click', async () => {
    copyTemplateSmil();

});

function copyTemplateSmil(){
    fs.copyFile(__dirname + '/../../lib/templates/timesheet.smil', chemin + 'timesheet.smil', (err) => {
        if (err) {
            alert("Le fichier generate template n'a pas été copié");
            throw err;
        }
    });
}