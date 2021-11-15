var fs = require('fs');

const loadCourseButton = document.querySelector('button#load-course');
const inputLoadCourse = document.querySelector('input#inputLoadCourse');

loadCourseButton.addEventListener('click', (e) => {
    console.log("test")
    alert("Sélectionner le fichier du cours HTML que vous voulez présenter.")
    inputLoadCourse.click();
});

inputLoadCourse.addEventListener('change', (e) => {
    return new Promise((resolve, reject) => {
        if (e.target.files) {
            const file = e.target.files[0];
            console.log("metadata selected file ", file);

            window.open(file.path, '_blank', 'top=500,left=200,frame=false,nodeIntegration=yes')

            console.log("[loadVideo] success");
            resolve("promise loadVideo");
        }
    })
});