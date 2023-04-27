var videoChoices = document.getElementById('videoChoices')
var videoContent = document.getElementById('videoContent')
var yinYang = document.getElementById('yinYangContent')
var drake= document.getElementById('drakePlaceHolder')
var yinYangDiv = document.getElementById('yinYangDiv')
var manLib = document.getElementById('manLib')
var audioContent = document.getElementById('audioContent')

function revealVids() {
    videoChoices.style.display="block"
}

function revealAudio() {
    removeVideo()
    audioContent.style.display="block"
}

function revealYinYang() {
    yinYang.style.display="block"
}

function revealDrakeH() {
    removeYinYang()
    drake.style.display="block"
    
}

function playManLib() {
    manLib.play
}


function removeYinYang() {
    yinYang.style.display="none"
}

function removeVideo() {
    videoChoices.style.display="none"
    videoContent.style.display="none"
}