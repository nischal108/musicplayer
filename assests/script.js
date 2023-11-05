
// const song = document.getElementById("song");
// const slider = document.getElementById("sliderline");
// const playctrl = document.getElementById("playctrl");
// const forward = document.getElementById("forward");
// const backward = document.getElementById("backward");
// const bgimgframe = document.getElementById("#imagebox");
// const songName = document.getElementById("#songname");
// const singerName = document.getElementById("#singer");

// //slider 

// song.onloadedmetadata = function () {
//     slider.max = song.duration;
//     slider.value = song.currentTime;
// }

// //play and pause

// playctrl.onclick = function(){
//     if(playctrl.classList.contains("fa-pause")){
//         song.pause();
//         playctrl.classList.remove("fa-pause");
//         playctrl.classList.add("fa-play");
//     }
//     else{
//         song.play();
//         playctrl.classList.remove("fa-play");
//         playctrl.classList.add("fa-pause");
//     }
// }

// // slider event listener

// if(song.play()){
//     setInterval(()=>{
//         slider.value = song.currentTime;
//     },500);
// }

// slider.onchange = function(){
//     song.play();
//     song.currentTime= slider.value;
//     playctrl.classList.remove("fa-play");
//     playctrl.classList.add("fa-pause");
// }

// //songs and details 
// // let musics = {
// //     song1:{
// //         Name:"Photograph",
// //         Singer:"Ed Sheran",
// //         location:"/assests/Photograph.m4a",
// //         bgimg:url(/assests/ed.jpg),
// //     },
// //     song2:{
// //         Name: "Tali Bajaideu Nepali",
// //         Singer:"unknown",
// //         location:"/assests/Tali Bajai Deu... Nepali T20 World cup song.mp3",
// //         bgimg:url(/assests/cricket.jpeg),
// //     },
// //     song3:{
// //         Name:" Uran",
// //         Singer: "Raffey - Usama",
// //         location:"/assests/Uraan - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video).mp3",
// //         bgimg:url(/assests/breakup.jpg),
// //     },
// //     song4:{
// //         Name:"Flirty Maya",
// //         Singer:"Nitesh Jung Kunwar",
// //         location:"/assests/Flirty Maya  Official Music Video  Neetesh Jung Kunwar.mp3",
// //         bgimg:url(/assests/njk.jpg),
// //     },song5:{
// //         Name: "Castle On The Hill",
// //         Singer:"Ed Sheran",
// //         location:"/assests/Ed Sheeran - Castle On The Hill [Official Music Video].mp3",
// //         bgimg:url(/assests/edsheeran1.jpg),
// //     }
// // }




const song = document.getElementById("song");
const slider = document.getElementById("sliderline");
const playctrl = document.getElementById("playctrl");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const bgimgframe = document.getElementById("imagebox");
const songName = document.getElementById("songname");
const singerName = document.getElementById("singer");


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
song.play();
song.onloadedmetadata = function () {
    slider.max = song.duration;
    slider.value = song.currentTime;
}

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

if(song.played){
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

forward.onclick = function (i){
    alert("hello");
    song.src = musics[i].location;
    bgimgframe.style.backgroundImage = musics[i].bgimg;
    songName.innerHTML = musics[i].Name;
    singerName.innerHTML = musics[i].Singer;
    song.play();
     // fixed typo
}