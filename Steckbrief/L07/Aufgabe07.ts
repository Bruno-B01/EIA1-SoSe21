const sample1 = document.querySelector('.sample1');
const sample2 = document.querySelector('.sample2');
const sample3 = document.querySelector('.sample3');
const sample4 = document.querySelector('.sample4');
const sample5 = document.querySelector('.sample5');
const sample6 = document.querySelector('.sample6');
const sample7 = document.querySelector('.sample7');
const sample8 = document.querySelector('.sample8');
const sample9 = document.querySelector('.sample9');

const playButton = document.querySelector('.playButton');

let sounds = [];
sounds[0] = new Audio("Samples/A.mp3");
sounds[1] = new Audio("Samples/C.mp3");
sounds[2] = new Audio("Samples/F.mp3");
sounds[3] = new Audio("Samples/G.mp3");
sounds[4] = new Audio("Samples/hihat.mp3");
sounds[5] = new Audio("Samples/kick.mp3");
sounds[6] = new Audio("Samples/laugh-1.mp3");
sounds[7] = new Audio("Samples/laugh-2.mp3");
sounds[8] = new Audio("Samples/snare.mp3");

let beatfolge = [];
beatfolge[0] = sounds[3];
beatfolge[1] = sounds[1];
beatfolge[2] = sounds[0];
beatfolge[3] = sounds[2];
sample1.addEventListener("click", function () { sounds[0].play() });
sample2.addEventListener("click", function () { sounds[1].play() });
sample3.addEventListener("click", function () { sounds[2].play() });
sample4.addEventListener("click", function () { sounds[3].play() });
sample5.addEventListener("click", function () { sounds[4].play() });
sample6.addEventListener("click", function () { sounds[5].play() });
sample7.addEventListener("click", function () { sounds[6].play() });
sample8.addEventListener("click", function () { sounds[7].play() });
sample9.addEventListener("click", function () { sounds[8].play() });

playButton.addEventListener("click", beat);

function beat() {

    setTimeout(function () { beatfolge[0].play() }, 500);
    setTimeout(function () { beatfolge[1].play() }, 1000);
    setTimeout(function () { beatfolge[2].play() }, 1500);
    setTimeout(function () { beatfolge[3].play() }, 2000);                             
}
