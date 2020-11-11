// Initializing map of gifs
let gifMap = new Map();
gifMap.set("./assets/img/BearMaps.JPG", "./assets/img/BearMapsGif.gif");

// Adding event listener
var imgs = document.querySelectorAll(".proj-container-content img");
imgs.forEach(img => {
    const pathBuilder = img.src.search("assets");
    const path = "./" + img.src.slice(pathBuilder);
    console.log(path, img.id);
    console.log(document.getElementById(img.id));
    document.getElementById(img.id).onclick = function() {playGif(path, img.id);};
    console.log(document.getElementById(img.id).onclick);
  })


function playGif(imgName, elemID) {
    const elem = document.getElementById(elemID);
    if (gifMap.has(imgName)) {
        elem.src = gifMap.get(imgName);
        console.log("swapped");
    }
}