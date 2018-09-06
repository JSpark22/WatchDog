/**
 * A .js file that accepts user input and provides methods to properly
 * execute the extension in background.js.
 * @author James Park
 * @date 2018-09-06
 */

// HTML elements
submit = document.getElementById('submit');
setting = document.getElementById("setting");
url1 = document.getElementById("url1");
url2 = document.getElementById("url2");
url1text = document.getElementById("url1text");
url2text = document.getElementById("url2text");
url1display = document.getElementById("url1display");
url2display = document.getElementById("url2display");
time = document.getElementById("time");
facebook = document.getElementById("facebook");
youtube = document.getElementById("youtube");
reddit = document.getElementById("reddit");
netflix = document.getElementById("netflix");
doggo = document.getElementById("doggo");
text = document.getElementById("text");
clear = document.getElementById("clear");
mute = document.getElementById("mute");

// Audio file of Dog-Bark.
let dogBark = new Audio();
dogBark.src = "Dog-Bark.mp3";

// When input submitted.
submit.onclick = function(){
    localStorage.setItem("input","received");
    localStorage.setItem("doggo","true");
    hideHTML();
    submit.style.display = "none";
    time.style.display = "block";
    setting.style.display = "block";
    doggo.style.display = "block";
    text.style.display = "block";
    clear.style.display = "block";
    if (url1text.value !==""){
        url1.style.display = "none";
        localStorage.setItem("site4",url1text.value.toLowerCase());
        url1display.innerHTML = url1text.value.substring(0,6);
        url1display.style.display = "block";
        url1text.style.display = "none";
        setTimeout(function(){gifChanger()},1000);
    }
    if (url2text.value !== ""){
        url2.style.display = "none";
        localStorage.setItem("site5",url2text.value.toLowerCase());
        url2display.innerHTML = url2text.value.substring(0,6);
        url2display.style.display = "block";
        url2text.style.display = "none";
        setTimeout(function(){gifChanger()},1000);
    }
};

// When setting clicked
setting.onclick = function(){
    unhideHTML();
    submit.style.display = "block";
    time.style.display = "none";
    setting.style.display = "none";
    doggo.style.display = "none";
    text.style.display = "none";
    clear.style.display = "none";
    if(localStorage.getItem("site4")!=="null" && localStorage.getItem("site4")!==null){
        url1.style.display = "none";
    }
    if(localStorage.getItem("site5")!=="null" && localStorage.getItem("site5")!==null){
        url2.style.display = "none";
    }
};

// When url1 button is clicked;
url1.onclick = function(){
    url1text.style.display = "block";
};

// When url2 button is clicked.
url2.onclick = function(){
    url2text.style.display = "block";
};

// When the displayed url1 is clicked.
url1display.onclick = function(){
    url1.style.display = "block";
    url1text.value = "";
    url1display.style.display = "none";
    localStorage.setItem("site4",null);
    // Consider for time it takes to change in localStorage
    setTimeout(function(){gifChanger()},1000);
};

// When the displayed url2 is clicked.
url2display.onclick = function(){
    url2.style.display = "block";
    url2text.value = "";
    url2display.style.display = "none";
    localStorage.setItem("site5",null);
    setTimeout(function(){gifChanger()},1000);
};

// When the textbox of url1 is selected.
url1text.addEventListener("keyup",function(event){
    event.preventDefault();
    // If 'enter' key is clicked
    if (event.keyCode === 13){
        if (url1text.value !==""){
            url1.style.display = "none";
            localStorage.setItem("site4",url1text.value.toLowerCase());
            url1display.innerHTML = url1text.value.substring(0,6);
            url1display.style.display = "block";
            url1text.style.display = "none";
            setTimeout(function(){gifChanger()},1000);
        }
    }
});

// When the textbox of url2 is selected.
url2text.addEventListener("keyup",function(event){
    if (event.keyCode === 13){
        if (url2text.value !== ""){
            url2.style.display = "none";
            localStorage.setItem("site5",url2text.value.toLowerCase());
            url2display.innerHTML = url2text.value.substring(0,6);
            url2display.style.display = "block";
            url2text.style.display = "none";
            setTimeout(function(){gifChanger()},1000);
        }
    }
});

// When Facebook is clicked.
facebook.onclick = function(){
    if(localStorage.getItem("site0")=="null" || localStorage.getItem("site0")==null){
        localStorage.setItem("site0","facebook");
        facebook.style.color = "#3B5998";
    } else {
        localStorage.setItem("site0",null);
        facebook.style.color = "#767474";
    }
    setTimeout(function(){gifChanger()},1000);
};

youtube.onclick = function(){
    if(localStorage.getItem("site1")=="null"|| localStorage.getItem("site1")==null){
        localStorage.setItem("site1","youtube");
        youtube.style.color = "#ff0000";
    } else {
        localStorage.setItem("site1",null);
        youtube.style.color = "#767474";
    }
    setTimeout(function(){gifChanger()},1000);
};

reddit.onclick = function(){
    if(localStorage.getItem("site2")=="null"|| localStorage.getItem("site2")==null){
        localStorage.setItem("site2","reddit");
        reddit.style.color = "#ff4500";
    } else {
        localStorage.setItem("site2",null);
        reddit.style.color = "#767474";
    }
    setTimeout(function(){gifChanger()},1000);
};

netflix.onclick = function(){
    if(localStorage.getItem("site3")=="null"|| localStorage.getItem("site3")==null){
        localStorage.setItem("site3","netflix");
        netflix.style.color = "#B9090B";
    } else {
        localStorage.setItem("site3",null);
        netflix.style.color = "#767474";
    }
    setTimeout(function(){gifChanger()},1000);
};


// When reset time is clicked.
clear.onclick = function(){
    localStorage.setItem("elapsedTime",0);
};

mute.onclick = function(){
    let isMute = localStorage.getItem("mute");
    if (isMute == "true"){
        localStorage.setItem("mute","false");
        document.getElementById("muteIcon").innerHTML = "volume_up";
        document.getElementById("mute").style.color = "#4dcf4c"
    } else {
        localStorage.setItem("mute","true");
        document.getElementById("muteIcon").innerHTML = "volume_off";
        document.getElementById("mute").style.color = "#327871"
    }
};


// Execution begins here...
url1text.style.display = "none";
url2text.style.display = "none";
url1display.style.display = "none";
url2display.style.display = "none";
time.style.display = "none";
doggo.style.display = "none";
text.style.display = "none";
clear.style.display = "none";
setting.style.display = "none";
// If Facebook is de-selected.
if(localStorage.getItem("site0")=="null" || localStorage.getItem("site0")==null){
    facebook.style.color = "#767474";
} else {
    facebook.style.color = "#3B5998";
}
if(localStorage.getItem("site1")=="null" || localStorage.getItem("site1")==null){
    youtube.style.color = "#767474";
} else {
    youtube.style.color = "#ff0000";
}
if(localStorage.getItem("site2")=="null" || localStorage.getItem("site2")==null){
    reddit.style.color = "#767474";
} else {
    reddit.style.color = "#ff4500";
}
if(localStorage.getItem("site3")=="null" || localStorage.getItem("site3")==null){
    netflix.style.color = "#767474";
} else {
    netflix.style.color = "#B9090B";
}
if(localStorage.getItem("site4")=="null" || localStorage.getItem("site4")==null){
    url1.style.display = "block";
    url1display.style.display = "none";
} else {
    url1.style.display = "none";
    url1display.style.display = "block";
    url1display.innerHTML = localStorage.getItem("site4").substring(0,6);
}
if(localStorage.getItem("site5")=="null" || localStorage.getItem("site5")==null){
    url2.style.display = "block";
    url2display.style.display = "none";
} else {
    url2.style.display = "none";
    url2display.style.display = "block";
    url2display.innerHTML = localStorage.getItem("site5").substring(0,6);
}
gifChanger();
hideHTML();
if (localStorage.getItem("mute") == "true"){
    document.getElementById("muteIcon").innerHTML = "volume_off";
    document.getElementById("mute").style.color = "#327871"
} else {
    document.getElementById("muteIcon").innerHTML = "volume_up";
    document.getElementById("mute").style.color = "#4dcf4c"
}


/**
 * Hides all HTML elements in the class "input".
 */
function hideHTML(){
    if(localStorage.getItem("input")=="received"){
        let initial = document.getElementsByClassName("initial");
        for (i=0; i<initial.length; i++){
            initial[i].style.display = "none";
        }
        time.style.display = "block";
        doggo.style.display = "block";
        text.style.display = "block";
        clear.style.display = "block";
        setting.style.display = "block";
        console.log("supposed to delete elements");
    }
}

/**
 * Reveals all HTML elements in the class "input".
 */
function unhideHTML(){
    if(localStorage.getItem("input")=="received") {
        let initial = document.getElementsByClassName("initial");
        for (i = 0; i < initial.length; i++) {
            initial[i].style.display = "block";
        }
        time.style.display = "none";
        doggo.style.display = "none";
        text.style.display = "none";
        clear.style.display = "none";
        setting.style.display = "block";
        localStorage.setItem("input",null);
    }
}

/**
 * Debugging function that prints all stored sites.
 */
function printStored(){
    var tempString = "";
    var tempSite;
    for (i = 0; i < 4; i++){
        tempSite = localStorage.getItem("site"+i);
        if (tempSite !== null){
            tempString = tempString + tempSite + " ";
        }
    }
    alert(tempString);
}

/**
 * Fetches the current URL through chrome.tabs.query and uses Promise to
 * execute the comparison once the URL is fetched.
 * If URL contains websites user selected, distracted becomes true,
 * and otherwise distracted is false.
 */
function isFocused() {
    var distracted = false, tempSite;
    var inputLength = document.getElementsByClassName("input").length;
    let currURL = new Promise(function (resolve) {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            resolve(tabs[0].url);
        })
    });
    // If currURL is satisfied
    currURL.then(function (url) {
        for (i=0; i<6; i++){
            tempSite = localStorage.getItem("site" + i);
            if (url !== null && url.includes(tempSite)){
                distracted = true;
            }
        };
        if (distracted){
            if (localStorage.getItem("mute")=="false"){
                dogBark.play();
            } else {
                dogBark.pause();
            }
            disTime = parseFloat(localStorage.getItem("elapsedTime"));
            disTime += 1;
            localStorage.setItem("elapsedTime",disTime);
            localStorage.setItem("distracted","true");
            console.log("start");
            console.log("disTime is " + disTime);
        } else {
            localStorage.setItem("distracted","false");
            console.log("stop");
        }
    }
    );
    printTime();
}


/**
 * Changes the gif image of the dog animation.
 */
function gifChanger(){
    let distracted = JSON.parse(localStorage.getItem("distracted"));
    if (distracted){
        doggo.src = "Doggo-Barking.gif";
    } else {
        // Occasionally changes neutral dog gif between Doggo-Blink.gif and Doggo-Still.gif.
        let x = Math.floor((Math.random() * 5) + 1);
        if (x==2){
            doggo.src = "Doggo-Blink.gif";
        } else {
            doggo.src = "Doggo-Still.gif";
        }
    }
}
