console.log("welcome to spotify")
// let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.

let songIndex=0;
let audioElement=new Audio('najik.mp3');
//audioElement.play();
let masterPlay = document.getElementById('masterPlay');//elementaccess
let myProgressBar = document.getElementById('myProgessBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songItem');

let songs= [
    
    {songNAme:"moonlight-aliGatie",filePath:"songs/najik.mp3",coverPath:"cover/najik.jpg"},
    {songNAme:"sasto mutu-sajjan Raj vaidya",filePath:"songs/najik.mp3",coverPath:"cover/srv1.jpg"},
    {songNAme:"najik-bartika",filePath:"songs/najik.mp3",coverPath:"cover/najik.jpg"},
    {songNAme:"hataridai batasidai-sajjan raj vaidya",filePath:"songs/najik.mp3",coverPath:"cover/najik.jpg"},
    {songNAme:"hawaijaja-sajjan Raj vaidya",filePath:"songs/najik.mp3",coverPath:"cover/najik.jpg"},
    {songNAme:"lukamari-sajjan Raj vaidya",filePath:"songs/najik.mp3",coverPath:"cover/najik.jpg"},
    {songNAme:"khamosiyaan",filePath:"songs/najik.mp3",coverPath:"cover/najik.jpg"},
]

songItems.forEach((element,i) =>{
    console.log(element,i);
    element.getElementByTagName("img")[0].src=songs[i].filePath;

})
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlayclassList.add('fa-circle-pause');
        gif.style.offsetPath=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlayclassList.add('fa-circle-play');
        gif.style.offsetPath=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener9('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration;

})
//need to understand






const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

