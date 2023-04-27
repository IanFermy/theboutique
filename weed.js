var textHere = document.getElementById('introText')
var textOne = document.getElementById('textOne')
var textTwo = document.getElementById('textTwo')
var textThree = document.getElementById('textThree')
var textFour = document.getElementById('textFour')
var textFive = document.getElementById('textFive')
var textSix = document.getElementById('textSix')
var textSeven = document.getElementById('textSeven')
var specialNote = document.getElementById('note')
var noteButton = document.getElementById('noteButton')
var endHide = document.getElementById('endHide')


function revealOne() {
    textHere.style.display = "block"
    textOne.style.display = "block"
}

function revealTwo() {
    textOne.style.display="none"
    textTwo.style.display="block"
}

function revealThree() {
    textTwo.style.display="none"
    textThree.style.display="block"
}

function revealFour() {
    textThree.style.display="none"
    textFour.style.display="block"
}

function revealFive() {
    textFour.style.display="none"
    textFive.style.display="block"
}

function revealSix() {
    textFive.style.display="none"
    textSix.style.display="block"
}

function revealSeven() {
    textSix.style.display="none"
    textSeven.style.display="block"
}

function closeIntro() {
    textHere.style.display = "none"
}

function specialNoteReveal() {
    specialNote.style.display = "block"
    noteButton.style.display = "none"
}

function specialNoteClose() {
    specialNote.style.display = "none"
    noteButton.style.display = "block"
}

function endSpecial() {
    endHide.style.display= "block"
    
}