var hidden = document.getElementById('hidden_div')
var hiddenTwo = document.getElementById('hidden_divTwo')
var hiddenThree = document.getElementById('hidden_divThree')
var impImage = document.getElementById('imps')
var contact = document.getElementById('contact')

hoverImp()

function show() {
    console.log(hidden)
    hidden.style.display = "block"
}

function showTwo() {
    console.log(hidden)
    hiddenTwo.style.display = "block"
}

function showThree() {
    console.log(hidden)
    hiddenThree.style.display = "block"
}

function hoverImp() {
    impImage.addEventListener("mouseover", (e) => {
        contact.style.display="block"
    })
    impImage.addEventListener("mouseout", (e) => {
        contact.style.display="none"
    })
}

