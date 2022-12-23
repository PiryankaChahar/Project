console.log("Welcome to MyTaste Music Player");
let songIndex=0;
let audioElement=new Audio('Eda Nahi Chalda Pyar - Shubh(audiosong.in).mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let progress;
let songlist=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"NO love",FilePath:"Eda Nahi Chalda Pyar - Shubh(audiosong.in).mp3",CoverPath:"cvr.jfif"},
    {songName:"The Last Ride",FilePath:"Sidhu Moose Wala - The Last Ride 128kbps(audiosong.in).mp3",CoverPath:"cvr.jfif"},
    {songName:"Todh Lagi Jat Nu",FilePath:"Odo Meri Odo Meri Tod Lage Jatt Nu(audiosong.in).mp3",CoverPath:"cvr.jfif"},
    {songName:"Naa Tere Bin",FilePath:"Naa Tere Bin - Altamash Faridi 320kbps(audiosong.in).mp3",CoverPath:"cvr.jfif"},
    {songName:"Jhanjar",FilePath:"Mainu Jhanjar Bana Le Pair Di - B Praak(audiosong.in).mp3",CoverPath:"cvr.jfif"},
    {songName:"Jehda Nasha",FilePath:"Jehda Nasha - Amar Jalal",CoverPath:"cvr.jfif"},
    {songName:"Good Luck",FilePath:"Good Luck - Jordan Sandhu(audiosong.in).mp3",CoverPath:"cvr.jfif"},
    {songName:"Farming",FilePath:"Farming - Laddi Chahal",CoverPath:"cvr.jfif"}
]
songlist.forEach((element,i)=>{
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
    
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=songs[songIndex].FilePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        
    })
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
});
audioElement.addEventListener('timeupdate',()=>{
    console.log('hello');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;
})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
    songIndex=0;
    }
    else{
    songIndex=songIndex+1;
    }
    audioElement.src=songs[songIndex].FilePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
    songIndex=0;
    }
    else{
    songIndex=songIndex-1;
    }
        audioElement.src=songs[songIndex].FilePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})
