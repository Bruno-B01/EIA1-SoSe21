var Africa: string="Africa";
var Asia: string="Asia";
var Australia: string="Australia";
var Europe: string="Europe";
var NorthAmerica: string="NorthAmerica";
var SouthAmerica: string="SouthAmerica";
var Africa2008: number= 1028;
var Africa2018: number= 1235.5;
var Asia2008: number= 12954.7;
var Asia2018: number= 16274.1;
var Australia2008: number= 1993;
var Australia2018: number= 2100.5;
var Europe2008: number= 4965.7;
var Europe2018: number= 4209.3;
var NorthAmerica2008: number= 6600.4;
var NorthAmerica2018: number= 6035.6;
var SouthAmerica2008: number= 1132.6;
var SouthAmerica2018: number= 1261.5;
var Gesamt: number= Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018;

window.addEventListener("load", function() {
    document.querySelector(".africa").addEventListener("click" , function() { emissions (Africa, Africa2018, Africa2008)});
    document.querySelector(".asia").addEventListener("click" , function() { emissions (Asia, Asia2018, Asia2008)});
    document.querySelector(".australia").addEventListener("click" , function() { emissions (Australia, Africa2018, Africa2008)});
    document.querySelector(".europe").addEventListener("click", function() { emissions (Europe, Europe2018, Europe2008)});
    document.querySelector(".northamerica").addEventListener("click" , function() { emissions (NorthAmerica, NorthAmerica2018, NorthAmerica2008)});
    document.querySelector(".southamerica").addEventListener("click" , function() { emissions (SouthAmerica, SouthAmerica2018, SouthAmerica2008)});
});

function emissions (continentName: string, emissions2018: number, emissions2008: number) {
    document.querySelector(".continent").innerHTML = continentName;
    document.querySelector(".continentAbsolute").innerHTML = continentName;
    document.querySelector(".emissions2018").innerHTML = emissions2018.toString();
    document.querySelector(".relativeTotalWorld").innerHTML = Math.round(emissions2018 / Gesamt * 100 * 100) / 100 + "%"; 
    document.querySelector(".growthRate").innerHTML = Math.round((emissions2018 - emissions2008) / emissions2008 * 100 * 100 / 100) + "%";
    document.querySelector(".growthRateAbsolute").innerHTML = `${Math.round((emissions2018 - emissions2008) * 100) / 100}`; 
    document.querySelector<HTMLElement>(".chart").style.height = `${Math.round((emissions2018 / Gesamt * 100 * 100) / 100)}%`;
};