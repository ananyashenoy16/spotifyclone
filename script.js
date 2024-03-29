console.log("welcome to sPotify");

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    
      {songName:"love story",filePath:"songs/1.mp3",coverPath:"covers/10.jpg"},
      {songName:"SnowMan",filePath:"songs/2.mp3",coverPath:"covers/9.jpg"},      
      {songName:"Attention",filePath:"songs/3.mp3",coverPath:"covers/8.jpg"},
      {songName:"Left and Right",filePath:"songs/4.mp3",coverPath:"covers/7.jpg"},
      {songName:"Light Switch",filePath:"songs/5.mp3",coverPath:"covers/6.jpg"},
      {songName:"With You",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
      {songName:"Din Te Raat",filePath:"songs/7.mp3",coverPath:"covers/6.jpg"},
      {songName:"obssessed",filePath:"songs/8.mp3",coverPath:"covers/6.jpg"},
      {songName:"Dil nu",filePath:"songs/9.mp3",coverPath:"covers/6.jpg"},
      {songName:"dil diyaan gallan ",filePath:"songs/10.mp3",coverPath:"covers/6.jpg"},
]
//songItems.forEach((element)=>{
  //   console.log(element,i);
    // element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    // element.getElementsByClassName("songName")[0].innerText =songs[i].songName;

//})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;


    }
    
})

audioElement.addEventListener('timeupdate', ()=>{
 progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    
})

}

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
    })
    
    
})

document.getElementById('next').addEventListener('click',() =>{
    if(songIndex>=10)
    {
     songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
   
})
document.getElementById('previous').addEventListener('click',() =>{
    if(songIndex<=0)
    {
     songIndex=10;
    }
    else{
        songIndex-=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
   
})
 audioElement,addEventListener