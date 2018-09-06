/**
 * A .js file that constantly runs isFocused() every 1000ms (1second) once extension is installed.
 * Calls methods from user-data.js through the Chrome Runtime API.
 * @author James Park
 * @date 2018-09-06
 */

/**
 * Initiates the program when the extension is first installed.
 */
chrome.runtime.onInstalled.addListener(()=>{
    localStorage.setItem("elapsedTime",0);
    localStorage.setItem("mute","true");
    setInterval(()=> isFocused(),1000);
});

/**
 * Initiates the program when the extension is started up.
 */
chrome.runtime.onStartup.addListener(()=>{
    localStorage.setItem("elapsedTime",0);
    localStorage.setItem("mute","true");
    setInterval(()=> isFocused(),1000);
});

/**
 * Updates the current value of "elapsedTime" in localStorage.
 */
setInterval(()=>printTime(),50);

let seconds,minutes,hours,display;
let h1 = document.getElementById('time');
function printTime(){
    h1.textContent = formatTime(localStorage.getItem("elapsedTime"));
}

/**
 * Accepts a value of time in seconds and converts it to the form 00:00:00.
 * @param input The string value of time that needs to be converted.
 * @returns display The string value of the converted time.
 */
function formatTime(input){
    seconds = parseInt(input);
    minutes = hours = 0;
    if (seconds >= 60){
        minutes = Math.floor(seconds / 60);
        seconds = seconds%60;
    }
    if (minutes >= 60){
        hours = Math.floor(minutes / 60);
        minutes = minutes%60;
    }
    let display = "";

    if (hours > 9) {
        display += hours;
    } else {
        display += ("0" + hours);
    }
    display += ":";
    if (minutes > 9){
        display += minutes;
    } else {
        display += ("0" + minutes);
    }
    display += ":";
    if (seconds > 9){
        display += seconds;
    } else {
        display += ("0" + seconds);
    }
    return display;
}