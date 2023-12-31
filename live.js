var nick = document.getElementById('nick');
var ownNothing = document.getElementById('ownNothing');
var woke = document.getElementById('woke');
var money = document.getElementById("money");
var work = document.getElementById("noWork");
var republicans = document.getElementById("republicans");
var republicansTwo = document.getElementById('republicansTwo');
var changingRoles = document.getElementById('changingRoles');
var social = document.getElementById('social');
var resist = document.getElementById('resist');

function revealResist() {
    closeSocial();
    closeMoney();
    closeNick();
    closeOwnNothing();
    closeWoke();
    closeRepublicans();
    closeRepublicansTwo();
    closeChangingRoles();
    resist.style.display = "block";
}

function revealSocial(){
    closeMoney();
    closeNick();
    closeOwnNothing();
    closeWoke();
    closeRepublicans();
    closeRepublicansTwo();
    closeChangingRoles();
    social.style.display = "block";
}

function revealChangingRoles(){
    closeMoney();
    closeNick();
    closeOwnNothing();
    closeWoke();
    closeRepublicans();
    closeRepublicansTwo();
    changingRoles.style.display = "block";
    closeSocial();
}

function revealRepublicansTwo(){
    closeMoney();
    closeNick();
    closeOwnNothing();
    closeWoke();
    closeRepublicans();
    closeChangingRoles();
    republicansTwo.style.display = "block";
    closeSocial();
}

function revealRepublicans() {
    closeMoney()
    closeNick()
    closeOwnNothing()
    closeWoke()
    republicans.style.display="block"
    closeRepublicansTwo()
    closeChangingRoles();
    closeSocial();
}

function revealWork() {
    closeMoney();
    closeNick();
    closeOwnNothing();
    closeWoke();
    closeRepublicans();
    work.style.display="block"
    closeRepublicansTwo();
    closeChangingRoles();
    closeSocial();
}

function revealNick() {
    closeOwnNothing()
    closeWoke()
    closeMoney()
    closeWork()
    closeRepublicans()
    nick.style.display= "block"
    closeRepublicansTwo();
    closeChangingRoles();
    closeSocial();
}

function revealOwnNothing() {
    closeNick()
    closeWoke()
    closeMoney()
    closeWork()
    closeRepublicans()
    ownNothing.style.display="block"
    closeRepublicansTwo()
    closeChangingRoles();
    closeSocial();
}

function revealWoke() {
    closeNick()
    closeOwnNothing()
    closeMoney()
    closeWork()
    closeRepublicans()
    woke.style.display = "block"
    closeRepublicansTwo()
    closeChangingRoles();
    closeSocial();
}

function revealMoney() {
    money.style.display = "block"
    closeNick()
    closeOwnNothing()
    closeWoke()
    closeWork()
    closeRepublicans()
    closeRepublicansTwo()
    closeChangingRoles();
    closeSocial();
}

function closeSocial() {
    social.style.display = "none";
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

function closeChangingRoles(){
    changingRoles.style.display = "none";
}


