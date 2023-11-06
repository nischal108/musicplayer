

// html and js links 

const song = document.getElementById("song");
const slider = document.getElementById("sliderline");
const playctrl = document.getElementById("playctrl");
const forward = document.getElementById("forwardsong");
const backward = document.getElementById("backward");
const bgimgframe = document.getElementById("imagebox");
const songName = document.getElementById("songname");
const singerName = document.getElementById("singer");


// song list area next area where songs are listed

var imagebox2 = document.getElementById("imagebox2");
var songname2 = document.getElementById("songname2");
var ul = document.getElementById("ul");
var li = document.createElement("li");


// lists of the details and url of musics to be played 

let musics = [
    {
        Name: "Photograph",
        Singer: "Ed Sheeran",
        location: "/assests/Photograph.m4a",
        bgimg: "url(/assests/ed.jpg)"
    },
    {
        Name: "Tali Bajaideu Nepali",
        Singer: "unknown",
        location: "/assests/Tali Bajai Deu... Nepali T20 World cup song.mp3",
        bgimg: "url(/assests/cricket.jpeg)"
    },
    {
        Name: "Uran",
        Singer: "Raffey - Usama",
        location: "/assests/Uraan - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video).mp3",
        bgimg: "url(/assests/breakup.jpg)"
    },
    {
        Name: "Flirty Maya",
        Singer: "Nitesh Jung Kunwar",
        location: "/assests/Flirty Maya  Official Music Video  Neetesh Jung Kunwar.mp3",
        bgimg: "url(/assests/njk.jpg)"
    },
    {
        Name: "Castle On The Hill",
        Singer: "Ed Sheran",
        location: "/assests/Ed Sheeran - Castle On The Hill [Official Music Video].mp3",
        bgimg: "url(/assests/edsheeran1.jpg)"
    }
];


// play song by default on reload
song.play();



// slider feature 

song.onloadedmetadata = function () {
    slider.max = song.duration;
    slider.value = song.currentTime;
}


// pause and play song feature

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


// slider should move when song plays  and next song to be played when previous ones finishes playing

if (!song.paused) {
    setInterval(() => {
        slider.value = song.currentTime;
        if (song.currentTime >= song.duration) {
            forwardsong.click();
        }
    }, 500);
}


slider.onchange = function(){
    song.play();
    song.currentTime= slider.value;
    playctrl.classList.remove("fa-play");
    playctrl.classList.add("fa-pause");
}



// forward and backward feature to change the song and oher details associated with song 

let currentSongIndex = 0; 
forwardsong.addEventListener("click", function forwardthesong() {
    currentSongIndex = Songfw(currentSongIndex);
    songDetailsChange(currentSongIndex);
});
backward.addEventListener("click", function() {
    currentSongIndex = Songrev(currentSongIndex);
    songDetailsChange(currentSongIndex);
});

function Songfw(i){
    if(i >= musics.length - 1){
        return 0;
    } else {
        return i + 1;
    }
}
function Songrev(i){
    if(i > 0){
        return i- 1;
    } else {
        return musics.length - 1;
    }
}

function songDetailsChange(i){
    song.src = musics[i].location;
    bgimgframe.style.backgroundImage = musics[i].bgimg;
    imagebox2.style.backgroundImage = musics[i].bgimg;
    songName.innerHTML = musics[i].Name;
    songname2.innerHTML = musics[i].Name;
    singerName.innerHTML = musics[i].Singer;
    song.play();
}



// var codetoinject = document.createTextNode('<div id="miniimageicon"></div><div id="songdetailslist"><h5>Photograph</h5><p>Ed Sheran</p></div><div class="circle"><i class="fa-solid fa-play" id="playctrlicon1"></i></div>');

for (var i = 0; i < 4; i++) {
    var li = document.createElement("li");
    var codetoinject = '<div id="miniimageicon"></div><div id="songdetailslist"><h5>' +musics[i].Name +'</h5><p>' +musics[i].Singer+'</p></div><div class="circle"><i class="fa-solid fa-play" id="playctrlicon1"></i></div>';
    li.innerHTML = codetoinject;
    ul.appendChild(li);
     // var miniimgbox= document.getElementById("minimageicon");
   // miniimgbox.style.backgroundImage = musics[i].bgimg;
}

function listGenerator (){
    for (var i = 0; i < 4; i++) {
        var li = document.createElement("li");
        var codetoinject = '<div id="miniimageicon"></div><div id="songdetailslist"><h5>' +musics[i].Name +'</h5><p>' +musics[i].Singer+'</p></div><div class="circle"><i class="fa-solid fa-play" id="playctrlicon1"></i></div>';
        li.innerHTML = codetoinject;
        ul.appendChild(li);
         // var miniimgbox= document.getElementById("minimageicon");
       // miniimgbox.style.backgroundImage = musics[i].bgimg;
    }
}