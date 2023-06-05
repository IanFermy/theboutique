var nick = document.getElementById('nick')
var ownNothing = document.getElementById('ownNothing')
var woke = document.getElementById('woke')
var money = document.getElementById("money")
var work = document.getElementById("noWork")
var republicans = document.getElementById("republicans")

function revealRepublicans() {
    closeMoney()
    closeNick()
    closeOwnNothing()
    closeWoke()
    republicans.style.display="block"
}

function revealWork() {
    closeMoney()
    closeNick()
    closeOwnNothing()
    closeWoke()
    closeRepublicans()
    work.style.display="block"
}

function revealNick() {
    closeOwnNothing()
    closeWoke()
    closeMoney()
    closeWork()
    closeRepublicans()
    nick.style.display= "block"
}

function revealOwnNothing() {
    closeNick()
    closeWoke()
    closeMoney()
    closeWork()
    closeRepublicans()
    ownNothing.style.display="block"
}

function revealWoke() {
    closeNick()
    closeOwnNothing()
    closeMoney()
    closeWork()
    closeRepublicans()
    woke.style.display = "block"
}

function revealMoney() {
    money.style.display = "block"
    closeNick()
    closeOwnNothing()
    closeWoke()
    closeWork()
    closeRepublicans()
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

function closeRepublicans() {
    republicans.style.display="none"
}

function closeWork() {
    work.style.display = "none"
}


