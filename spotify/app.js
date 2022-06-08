console.log("welcome to spotify")
// let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used
//unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.

let songIndex=0;
let audioElement = new Audio('songs/ali.mp3'); 
//audioElement.play();
let masterPlay = document.getElementById('masterPlay');//elementaccess
let myProgressBar = document.getElementById('myProgessBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
    
    {songName:"moonlight-aliGatie",filePath: "songs/ali1.mp3",coverPath: "covers/Ali1.jpg"},
    {songName:"sasto mutu-sajjan Raj vaidya",filePath:"sastomutu.mp3",coverPath:"covers/srv1.jpg"},
    {songName:"najik na aau-bartika rai",filePath:"songs/najik.mp3",coverPath:"covers/najik.jpg"},
    {songName:"hataridai batasidai-sajjan raj vaidya",filePath:"songs/hataarindai.mp3",coverPath:"covers/srv2.jpg"},
    {songName:"hawaijaja-sajjan Raj vaidya",filePath:"songs/Hawaijahaj.mp3",coverPath:"covers/srv3.jpg"},
    {songName:"lukamari-sajjan Raj vaidya",filePath:"songs/najik.mp3",coverPath:"covers/srv4.jpg"},
    {songName:"khamosiyaan-Arjit singh",filePath:"songs/khamoshiyan.mp3",coverPath:"covers/kha1.jpg"},
]


 songItems.forEach((element, i)=>{ //
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; //
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;//

})

// event to handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){ //geet start nahuda or pause 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); //%ma kati progress
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();//function 
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;//to update songs accordingly
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

//to use previous and next icon
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;//
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})