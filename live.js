var nick = document.getElementById('nick')
var ownNothing = document.getElementById('ownNothing')
var woke = document.getElementById('woke')
var money = document.getElementById("money")
var work = document.getElementById("noWork")

function revealWork() {
    closeMoney()
    closeNick()
    closeOwnNothing()
    closeWoke()
    work.style.display="block"
}

function revealNick() {
    closeOwnNothing()
    closeWoke()
    closeMoney()
    nick.style.display= "block"
}

function revealOwnNothing() {
    closeNick()
    closeWoke()
    closeMoney()
    ownNothing.style.display="block"
}

function revealWoke() {
    closeNick()
    closeOwnNothing()
    closeMoney()
    woke.style.display = "block"
}

function revealMoney() {
    money.style.display = "block"
    closeNick()
    closeOwnNothing()
    closeWoke()
}



function closeNick() {
    nick.style.display = "none"
}

function closeOwnNothing() {
    ownNothing.style.display="none"
}

function closeWoke() {
    woke.style.display = "none"
}

function closeMoney() {
    money.style.display = "none"
}



