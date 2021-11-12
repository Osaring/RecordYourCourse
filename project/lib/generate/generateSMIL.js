const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

const chemin = __dirname + '/../../history/cours1/'; // à modifier

const clock = document.getElementById('timer');
var hrs = 0, min = 0, sec = 0;
var start = false;

const generateSMIL = document.querySelector('button#generate');
generateSMIL.addEventListener('click', async () => {
    copyTemplateSmil();
    if(!start){
        start = true;
        timer();
    }
    /*start.onclick = timer;
    stop.onclick = function() {
        clearTimeout(t);
    }
    reset.onclick = function() {
        h1.textContent = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;
    }
    */
});


document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if(code == 'ArrowRight' && start)
    alert(clock.innerHTML);
    // Alert the key name and key code on keydown
  });

function copyTemplateSmil(){
    fs.copyFile(__dirname + '/../../lib/templateCourse/controls/timesheet.smil', chemin + 'timesheet.smil', (err) => {
        if (err) {
            alert("Le fichier generate template n'a pas été copié");
            throw err;
        }
    });
}

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

function add() {
    tick();
    console.log(hrs + " " + min + " " + sec);
    clock.innerHTML = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);     
    timer();
}

function timer() {
    var t = setTimeout(add, 1000);
}

function addDiapo(){
}

function beginTimer(){
}