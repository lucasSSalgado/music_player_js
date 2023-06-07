const btnPlay = document.getElementById('play'),
    btnBackward = document.getElementById('backward'),
    btnForward = document.getElementById('forward'),
    bg_img = document.getElementById('bg-img'),
    album_img = document.getElementById('album'),
    title = document.getElementById('title'),
    artist = document.getElementById('artist'),
    bar_player = document.getElementById('bar-player'),
    bar_progress = document.getElementById('bar_progress')


const music = new Audio()

btnPlay.addEventListener('click', () => clickPlay())
btnBackward.addEventListener('click', () => backward())
btnForward.addEventListener('click', () => forward())
music.addEventListener('timeupdate', updateProgressBar);

const songs = [
    {
        path: 'assets/1.mp3',
        displayName: 'The Charmer\'s Call',
        cover: 'assets/1.jpg',
        artist: 'Hanu Dixit'
    },
    {
        path: 'assets/2.mp3',
        displayName: 'You Will Never See Me Coming',
        cover: 'assets/2.jpg',
        artist: 'NEFFEX'
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Intellect',
        cover: 'assets/3.jpg',
        artist: 'Yung Logos'
    }
]

let isPlaying = false
let index = 0
let actualTime = 0

function updateProgressBar() {
    const { duration, currentTime } = music
    const progressPercent = (currentTime / duration) * 100
    bar_progress.style.width = `${progressPercent}%`
    bar_progress.className = 'progress-actual'
}
function backward() {
    index--
    loadMusic()
    playMusic()
}
function forward() {
    index++
    loadMusic()
    playMusic()
}
function loadMusic() {
    music.src = songs[index].path
    bg_img.src = songs[index].cover
    album_img.src = songs[index].cover
    title.innerText = songs[index].displayName
    artist.innerText = songs[index].artist
}
function clickPlay() {
    if (isPlaying) {
        pauseMusic()
    }
    else {
        playMusic()
    }
}
function playMusic() {
    loadMusic()
    music.play()
    btnPlay.className = 'fa-solid fa-pause'
    isPlaying = true
}
function pauseMusic() {
    music.pause()
    btnPlay.className = 'fa-solid fa-play'
    isPlaying = false
}