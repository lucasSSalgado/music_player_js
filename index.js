const btnPlay = document.getElementById('play'),
    btnBackward = document.getElementById('backward'),
    btnForward = document.getElementById('forward'),
    bg_img = document.getElementById('bg-img'),
    album_img = document.getElementById('album'),
    title = document.getElementById('title'),
    artist = document.getElementById('artist')


btnPlay.addEventListener('click', () => clickPlay())
btnBackward.addEventListener('click', () => backward())
btnForward.addEventListener('click', () => forward())

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

const music = new Audio();

let isPlaying = false
let index = 0

function backward() {
    console.log('backward')
    index--
    loadMusic()
    playMusic()
}

function forward() {
    console.log('backward')
    index++
    loadMusic()
    playMusic()
}

function loadMusic() {
    music.src = songs[index].path
    bg_img.src = songs[index].cover
    album_img.src = songs[index].cover
    title.src = songs[index].displayName
    artist.src = songs[index].artist
    console.log('loadMusic')
}

function clickPlay() {
    if (isPlaying) {
        pauseMusic()
    }
    else {
        playMusic()
    }

    console.log('clickPlay')
}

function playMusic() {
    loadMusic()
    music.play()
    btnPlay.className = 'fa-solid fa-pause'
    isPlaying = true
    console.log('playMusic')
}

function pauseMusic() {
    music.pause()
    btnPlay.className = 'fa-solid fa-play'
    isPlaying = false

    console.log('pauseMusic')
}

