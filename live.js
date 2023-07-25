var nick = document.getElementById('nick')
var ownNothing = document.getElementById('ownNothing')
var woke = document.getElementById('woke')
var money = document.getElementById("money")
var work = document.getElementById("noWork")
var republicans = document.getElementById("republicans")
var republicansTwo = document.getElementById('republicansTwo')

function revealRepublicansTwo(){
    closeMoney();
    closeNick();
    closeOwnNothing();
    closeWoke();
    closeRepublicans();
    republicansTwo.style.display = "block"

}

function revealRepublicans() {
    closeMoney()
    closeNick()
    closeOwnNothing()
    closeWoke()
    republicans.style.display="block"
    closeRepublicansTwo()
}

function revealWork() {
    closeMoney()
    closeNick()
    closeOwnNothing()
    closeWoke()
    closeRepublicans()
    work.style.display="block"
    closeRepublicansTwo();
}

function revealNick() {
    closeOwnNothing()
    closeWoke()
    closeMoney()
    closeWork()
    closeRepublicans()
    nick.style.display= "block"
    closeRepublicansTwo()
}

function revealOwnNothing() {
    closeNick()
    closeWoke()
    closeMoney()
    closeWork()
    closeRepublicans()
    ownNothing.style.display="block"
    closeRepublicansTwo()
}

function revealWoke() {
    closeNick()
    closeOwnNothing()
    closeMoney()
    closeWork()
    closeRepublicans()
    woke.style.display = "block"
    closeRepublicansTwo()
}

function revealMoney() {
    money.style.display = "block"
    closeNick()
    closeOwnNothing()
    closeWoke()
    closeWork()
    closeRepublicans()
    closeRepublicansTwo()
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

function closeRepublicansTwo(){
    republicansTwo.style.display = "none"
}


