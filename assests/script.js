

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
        location: "assests/Photograph.m4a",
        bgimg: "url(assests/ed.jpg)"
    },
    {
        Name: "Tali Bajaideu Nepali",
        Singer: "unknown",
        location: "assests/Tali Bajai Deu... Nepali T20 World cup song.mp3",
        bgimg: "url(assests/cricket.jpeg)"
    },
    {
        Name: "Uran",
        Singer: "Raffey - Usama",
        location: "assests/Uraan - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video).mp3",
        bgimg: "url(assests/breakup.jpg)"
    },
    {
        Name: "Flirty Maya",
        Singer: "Nitesh Jung Kunwar",
        location: "assests/Flirty Maya  Official Music Video  Neetesh Jung Kunwar.mp3",
        bgimg: "url(assests/njk.jpg)"
    },
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
    updateListItem(currentSongIndex);
});

backward.addEventListener("click", function() {
    currentSongIndex = Songrev(currentSongIndex);
    songDetailsChange(currentSongIndex);
    updateListItem(currentSongIndex);
});

//fowarding songs and reversing songs 
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


// chnaging all the thinga that needs to be chnaged on playing a music inside a player
function songDetailsChange(i){
    song.src = musics[i].location;
    bgimgframe.style.backgroundImage = musics[i].bgimg;
    imagebox2.style.backgroundImage = musics[i].bgimg;
    songName.innerHTML = musics[i].Name;
    songname2.innerHTML = musics[i].Name;
    singerName.innerHTML = musics[i].Singer;
    song.play();
}







// music lists 


// generating lists items according to the music array and the details of the songs iside it 

function listGenerator() {
    for (var i = 0; i < 4; i++) {
        var li = document.createElement("li");
        li.classList.add('song-list-item'); 
        var codetoinject = '<div class="miniimageicon miniimag'+i+'"></div><div id="songdetailslist"><h5>' +musics[i].Name +'</h5><p>' +musics[i].Singer+'</p></div><div class="circle"><i class="fa-solid fa-play playbutton" id="playbutton'+i+'"></i></div>';
        li.innerHTML = codetoinject;
        ul.appendChild(li);

        var playButton = document.getElementById('playbutton'+i);

        playButton.addEventListener('click', function() {
            var index = parseInt(this.id.split('playbutton')[1]);
            playPauseSong(index);
        });

        var miniimag = document.querySelector('.miniimag'+i);
        miniimag.style.backgroundImage =  musics[i].bgimg;
    }
}


// function that allows user to play or pause song using the play and pause button near the song name in list are and change the qualities if the song is being played currently
function playPauseSong(index) {
    var listItems = document.querySelectorAll('.song-list-item');
    var currentListItem = listItems[index];
    var playButton = document.getElementById('playbutton' + index);
    var playCircle = playButton.parentElement; 
    if (index === currentSongIndex && !song.paused) {
        song.pause();
        playctrl.classList.remove("fa-pause");
        playctrl.classList.add("fa-play");
        currentListItem.style.backgroundColor = '';
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
        playCircle.style.backgroundColor = ''; 
    } else {
        currentSongIndex = index;
        songDetailsChange(currentSongIndex);
        song.play();
        playctrl.classList.remove("fa-play");
        playctrl.classList.add("fa-pause");

        listItems.forEach(function(item) {
            item.style.backgroundColor = '';
        });

        currentListItem.style.backgroundColor = '#151618';

        document.querySelectorAll('.playbutton').forEach(function(button) {
            button.classList.remove("fa-pause");
            button.classList.add("fa-play");
        });

        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");

        // Resetting play circle background color
        document.querySelectorAll('.circle').forEach(function(circle) {
            circle.style.backgroundColor = '';
        });

        playCircle.style.backgroundColor = '#07b9ff'; 
    }
}

listGenerator();





// what if the user chnages songs from the player are then the list item song also shows which song is being played in the main area through the described qualities 
function updateListItem(index) {
    var listItems = document.querySelectorAll('.song-list-item');

    listItems.forEach(function(item, i) {
        var playButton = item.querySelector('.playbutton');
        var playCircle = playButton.parentElement;

        if (i === index) {
            item.style.backgroundColor = '#151618';
            playButton.classList.remove("fa-play");
            playButton.classList.add("fa-pause");
            playCircle.style.backgroundColor = '#07b9ff';
        } else {
            item.style.backgroundColor = '';
            playButton.classList.remove("fa-pause");
            playButton.classList.add("fa-play");
            playCircle.style.backgroundColor = '';
        }
    });
}
