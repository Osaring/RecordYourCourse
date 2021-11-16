var numberSlide = 1;

var smilPrev = document.getElementById("smil-prev");
var smilNext = document.getElementById("smil-next");
var smilFirst = document.getElementById("smil-first");
var smilLast = document.getElementById("smil-last");

smilPrev.addEventListener('click', (e) => {
    console.log("smilPrev")
    if(numberSlide > 1) numberSlide -= 1;
    document.getElementById("diapo03").src = "images/slide0" + numberSlide.toString() + ".png";
})

smilNext.addEventListener('click', (e) => {
    console.log("smilNext")
    numberSlide += 1;
    document.getElementById("diapo03").src = "images/slide0" + numberSlide.toString() + ".png";
})

smilFirst.addEventListener('click', (e) => {
    console.log("smilFirst")
    numberSlide = 1;
    document.getElementById("diapo03").src = "images/slide0" + numberSlide.toString() + ".png";
})

smilLast.addEventListener('click', (e) => {
    console.log("smilLast")
    numberSlide = 3;
    document.getElementById("diapo03").src = "images/slide0" + numberSlide.toString() + ".png";
})