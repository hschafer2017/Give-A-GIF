let randomWords = require('random-words');
let request = new XMLHttpRequest();

function displayGIFNicely(apiData) {
    let newData = JSON.parse(apiData);
    
    let data = newData.data[0].embed_url;
    console.log(data);
    document.getElementById("gif-image").innerHTML =
        // "&lt;embed src='" + data +  "'&gt;";
        "<embed src='" + data +  "'>";
        
}

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        displayGIFNicely(this.responseText);
        
    }
    else if (this.readyState === 4 && this.status === 404) {
        
    }
};


// API KEY USING RANDOM GENERATOR FOR SEARCHED GIFS
export function GIF_api() {
    let search = randomWords({exactly:1, wordsPerString:2});
    request.open("GET", "https://giveagif.herokuapp.com/gifs/" + search);
    request.send();
    return false;
}
