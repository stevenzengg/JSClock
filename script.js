const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + ", Min: " + min + ", Seconds: " + sec);
function runTheClock(){
    sec+=6;
    min+=1/10
    hr+=1/120
    HOURHAND.style.transform = "rotate(" + hr +  "deg)";
    MINUTEHAND.style.transform = "rotate(" + min + "deg)";
    SECONDHAND.style.transform = "rotate(" + sec + "deg)";
}
var interval = setInterval(runTheClock, 1000);