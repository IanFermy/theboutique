var reel = document.getElementById('reel')
var thief = document.getElementById('thief')
var chuck = document.getElementById('chuck')
var beast = document.getElementById('beast')
var gray = document.getElementById('gray')
var crowley = document.getElementById('crowley')
var intimate = document.getElementById('intimate')
var philly = document.getElementById('philly')
var married = document.getElementById('married')

function playReel() {
    reel.style.display="block"
}

function playThief() {
    removeReel()
    thief.style.display="block"
}

function playChuck() {
    removeReel()
    removeThief()
    chuck.style.display="block"
}

function playBeast() {
    removeReel()
    removeThief()
    removeChuck()
    beast.style.display="block"
}

function playGray() {
    removeReel()
    removeThief()
    removeChuck()
    removeBeast()
    gray.style.display="block"
}

function playCrowley() {
    removeReel()
    removeThief()
    removeChuck()
    removeBeast()
    removeGray()
    crowley.style.display="block"
}

function playIntimate() {
    removeReel()
    removeThief()
    removeChuck()
    removeBeast()
    removeGray()
    removeCrowley()
    intimate.style.display="block"
}

function playPhilly(){
    removeReel()
    removeThief()
    removeChuck()
    removeBeast()
    removeGray()
    removeCrowley()
    removeIntimate()
    philly.style.display="block"
}

function playMarried(){
    removeReel()
    removeThief()
    removeChuck()
    removeBeast()
    removeGray()
    removeCrowley()
    removeIntimate()
    removePhilly()
    married.style.display="block"
}

function removeReel() {
    reel.style.display="none"
}

function removeThief() {
    thief.style.display="none"
}

function removeChuck() {
    chuck.style.display="none"
}

function removeBeast() {
    beast.style.display="none"
}

function removeGray() {
    gray.style.display="none"
}

function removeCrowley() {
    crowley.style.display="none"
}

function removeIntimate() {
    intimate.style.display="none"
}

function removePhilly() {
    philly.style.display="none"
}