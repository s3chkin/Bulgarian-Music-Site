var mysong1 = document.getElementById("mysong2-1");
var icon1 = document.getElementById("icon1");

icon1.onclick = function() {
    if (mysong1.paused) {
        mysong1.play();
        icon1.src = "./images/pause.png";

    } else {
        mysong1.pause();
        icon1.src = "./images/play.png";
    }
}