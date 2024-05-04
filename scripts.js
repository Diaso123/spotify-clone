console.log("welcome to spotify")
let songindex = 0;
let audioelement = new Audio('nasheed/ahwarun-ahwarun-wal-khat-u-hussaini.mp3')
let masterplay=document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongname = document.getElementById('mastersongname');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));


let nasheed = [
    {nasheedname:"Ahwarun-Ahwarun",filepath:'nasheed/ahwarun-ahwarun-wal-khat-u-hussaini.mp3',coverpath:"ahwarun.jpg"},
    {nasheedname:"Me-Banda-e-Aasi",filepath:'nasheed/ma-banda-e-aasi-hoon.mp3',coverpath:"mebandaeaasi.jpg"},
    {nasheedname:"Liyakun-yawmuka",filepath:'nasheed/liyakun-yawmuka.mp3',coverpath:"liyakun-yawmuka.jpg"},
    {nasheedname:"Kun-Anta",filepath:'nasheed/kun-anta.mp3',coverpath:"kunanta.jpg"},
    {nasheedname:"Muhammad-nabina",filepath:'nasheed/muhammad-nabina.mp3',coverpath:"muhammad-nabina.jpg"},
    {nasheedname:"Rahmatul-lil-alameen",filepath:'nasheed/rahmatun-lil-alameen.mp3',coverpath:"rahmatun-lil-alameen.jpg"},
    {nasheedname:"Beuty-of-existence",filepath:'nasheed/the-beauty-of-existence.mp3',coverpath:"beauty-of-existence.jpg"},
    {nasheedname:"Ya-adheeman",filepath:'nasheed/ya-adheeman.mp3',coverpath:"ya-adheeman.jpg"},
    {nasheedname:"Ya-nabi-salaam",filepath:'nasheed/ya-nabi-salam-alayka.mp3',coverpath:"Ya-Nabi-Salam-Alaika.png"},
    {nasheedname:"Way-Of-Tears",filepath:'nasheed/the-way-of-the-tears.mp3',coverpath:"way-of-the-tears.jpg"},
]

songitem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = nasheed[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=nasheed[i].nasheedname;
})



// audioelement.play()
//handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime<=0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.add('fa-circle-play')
        masterplay.classList.remove('fa-circle-pause')
        gif.style.opacity = 0;
    }
})

//listen to events
audioelement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('click', () => {
    audioelement.currentTime=((myprogressbar.value *audioelement.duration)/100)
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause');

})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = nasheed[songindex].filepath;
        mastersongname.innerText = nasheed[songindex].nasheedname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex>9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = nasheed[songindex].filepath;
    mastersongname.innerText = nasheed[songindex].nasheedname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex<=0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = nasheed[songindex].filepath;
    mastersongname.innerText = nasheed[songindex].nasheedname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})