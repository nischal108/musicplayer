
const song = document.getElementById("song");
const slider = document.getElementById("sliderline");
const playctrl = document.getElementById("playctrl");


//slider 

song.onloadedmetadata = function () {
    slider.max = song.duration;
    slider.value = song.currentTime;
}

//play and pause

playctrl.onclick = function(){
    if(playctrl.classList.contains("fa-pause")){
        song.pause();
        playctrl.classList.remove("fa-pause");
        playctrl.classList.add("fa-play");
    }
    else{
        song.play();
        playctrl.classList.remove("fa-play");
        playctrl.classList.add("fa-pause");
    }
}

// slider event listener

if(song.play()){
    setInterval(()=>{
        slider.value = song.currentTime;
    },500);
}

slider.onchange = function(){
    song.play();
    song.currentTime= slider.value;
    playctrl.classList.remove("fa-play");
    playctrl.classList.add("fa-pause");
}
