var sample1 = document.querySelector('.sample1');
var sample2 = document.querySelector('.sample2');
var sample3 = document.querySelector('.sample3');
var sample4 = document.querySelector('.sample4');
var sample5 = document.querySelector('.sample5');
var sample6 = document.querySelector('.sample6');
var sample7 = document.querySelector('.sample7');
var sample8 = document.querySelector('.sample8');
var sample9 = document.querySelector('.sample9');
var stopAndPlay = document.querySelector('.stopAndPlay');
var playButtonStyle = document.getElementById("playbutton");
var stopButtonStyle = document.getElementById("stopbutton");
var playRandomized = document.querySelector('.randomizer');
var interval = setInterval(function () {
}, 2000);
var sounds = [];
sounds[0] = new Audio("Samples/A.mp3");
sounds[1] = new Audio("Samples/C.mp3");
sounds[2] = new Audio("Samples/F.mp3");
sounds[3] = new Audio("Samples/G.mp3");
sounds[4] = new Audio("Samples/hihat.mp3");
sounds[5] = new Audio("Samples/kick.mp3");
sounds[6] = new Audio("Samples/laugh-1.mp3");
sounds[7] = new Audio("Samples/laugh-2.mp3");
sounds[8] = new Audio("Samples/snare.mp3");
var beatfolge = [];
beatfolge[0] = sounds[3];
beatfolge[1] = sounds[1];
beatfolge[2] = sounds[0];
beatfolge[3] = sounds[2];
var i;
sample1.addEventListener("click", function () { sounds[0].play(); });
sample2.addEventListener("click", function () { sounds[1].play(); });
sample3.addEventListener("click", function () { sounds[2].play(); });
sample4.addEventListener("click", function () { sounds[3].play(); });
sample5.addEventListener("click", function () { sounds[4].play(); });
sample6.addEventListener("click", function () { sounds[5].play(); });
sample7.addEventListener("click", function () { sounds[6].play(); });
sample8.addEventListener("click", function () { sounds[7].play(); });
sample9.addEventListener("click", function () { sounds[8].play(); });
stopAndPlay.addEventListener("click", beat);
stopAndPlay.addEventListener("click", changebutton);
playRandomized.addEventListener("click", random);
function beat() {
    if (stopButtonStyle.style.display == "block") {
        clearInterval(interval);
    }
    if (playButtonStyle.style.display == "block") {
        setTimeout(function () { beatfolge[0].play() }, 500);
        setTimeout(function () { beatfolge[1].play() }, 1000);
        setTimeout(function () { beatfolge[2].play() }, 1500);
        setTimeout(function () { beatfolge[3].play() }, 2000);
        interval = setInterval(function () {
            setTimeout(function () { beatfolge[0].play() }, 500);
            setTimeout(function () { beatfolge[1].play() }, 1000);
            setTimeout(function () { beatfolge[2].play() }, 1500);
            setTimeout(function () { beatfolge[3].play() }, 2000);
        },2500)
    }
}
function changebutton() {
    if (playButtonStyle.style.display == "none") {
        playButtonStyle.style.display = "block";
        stopButtonStyle.style.display = "none";
    }
    else {
        playButtonStyle.style.display = "none";
        stopButtonStyle.style.display = "block";
    }
}
function random() {
    var number1 = Math.floor(Math.random() * 8);
    var number2 = Math.floor(Math.random() * 8);
    var number3 = Math.floor(Math.random() * 8);
    setTimeout(function () { sounds[number1].play() }, 500);
    setTimeout(function () { sounds[number2].play() }, 1000);
    setTimeout(function () { sounds[number3].play() }, 1500);
}
clearInterval(interval);
//# sourceMappingURL=Aufgabe08.js.map