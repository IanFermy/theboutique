var sex = document.getElementById('sex')
var sea = document.getElementById('sea')
var fuck = document.getElementById('fuck')
var oj = document.getElementById("oj")
var spring = document.getElementById('spring')
var mean = document.getElementById('mean')
var mark = document.getElementById('mark')
var fert = document.getElementById('fert')
var laugh = document.getElementById('laugh')
var lightOne = document.getElementById('lightOne')
var lightTwo = document.getElementById('lightTwo')
var lightTwoImage = document.getElementById('lightOneImage')
var beard = document.getElementById('beard')
var life = document.getElementById('life')
var pokeCenter = document.getElementById('pokeCenter')
var math = document.getElementById('math')
var sugar = document.getElementById('sugar')
var soon = document.getElementById('soon')
var suck = document.getElementById('suck') 
var tomorrow = document.getElementById('tomorrow')
var dream = document.getElementById('dream')
var  cell = document.getElementById('cell')
var wingsuit = document.getElementById('wingsuit')
var suit = document.getElementById('suit')
var river = document.getElementById('river')
var dice = document.getElementById('dice')
var game = document.getElementById('game')
var hole = document.getElementById('hole')
var curb = document.getElementById('curb')
var oneDay = document.getElementById('oneDay')
var clown = document.getElementById('clown');
var coin = document.getElementById('coin');
var dodgeball = document.getElementById('dodgeball');
var fork = document.getElementById('fork');
var knife = document.getElementById('knife');
var bed = document.getElementById("bed");
var kool = document.getElementById('kool');
var meal = document.getElementById('meal');
var speak = document.getElementById('speak');
var going = document.getElementById('going');
var mouth = document.getElementById('mouth');

function showSea() {
    removeSex()
    sea.style.display="block"
}

function revealOj() {
    removeSea()
    oj.style.display="block"
}

function revealFuck() {
    removeOj()
    fuck.style.display="block"
}

function revealSpring() {
    removeFuck()
    spring.style.display = "block"
}

function revealMean() {
    removeSpring()
    mean.style.display="block"
}

function revealMark() {
    removeMean()
    mark.style.display = "block"
}

function revealFert() {
    removeMark()
    fert.style.display = "block"
}

function revealLaugh() {
    removeFert()
    laugh.style.display="block"
}

function revealLightOne() {
    removeLaugh()
    lightOne.style.display="block"
}

function revealBeard() {
    removeLight()
    beard.style.display="block"
}

function revealLife() {
    removeBeard()
    life.style.display="block"
}

function revealPokeCenter() {
    removeLife()
    pokeCenter.style.display="block"
}

function revealMath() {
    removePokeCenter()
    math.style.display="block"
}

function revealSugar() {
    removeMath()
    sugar.style.display="block"
}

function revealSoon() {
    removeSugar()
    soon.style.display="block"
}

function revealSuck() {
    removeSoon()
    suck.style.display="block"
}

function revealTomorrow() {
    removeSuck()
    tomorrow.style.display="block"
}

function revealDream() {
    removeTomorrow()
    dream.style.display="block"
}

function revealoneDay() {
    removeDream()
    oneDay.style.display="block"
}

function revealCell() {
    removeOneDay()
    cell.style.display="block"
}

function revealWingsuit() {
    removeCell()
    wingsuit.style.display="block"
}

function revealSuit() {
    removeWingsuit()
    suit.style.display="block"
}

function revealRiver() {
    removeSuit()
    river.style.display="block"
}

function revealDice() {
    removeRiver()
    dice.style.display="block"
}

function revealHole() {
    removeGame()
    hole.style.display="block"
} 

function revealGame(){
    removeDice()
    game.style.display="block"
}

function revealCurb() {
    removeHole()
    curb.style.display="block"
}

function revealClown(){
    removeCurb();
    clown.style.display='block';
}

function revealCoin() {
    removeClown();
    coin.style.display = "block";
}

function revealDodgeball(){
    removeCoin();
    dodgeball.style.display = "block";
}

function revealFork() {
    removeDodgeball();
    fork.style.display = "block";
}

function revealKnife() {
    removeFork();
    knife.style.display = "block";
}

function revealBed() {
    removeKnife();
    bed.style.display = "block";
}

function revealKool() {
    removeBed();
    kool.style.display = "block";
}

function revealMeal() {
    removeKool();
    meal.style.display="block";
}

function revealSpeak() {
    removeMeal();
    speak.style.display="block";
}

function revealGoing() {
    speak.style.display="none";
    going.style.display="block";
}

function revealMouth() {
    going.style.display="none";
    mouth.style.display="block";
}

function removeMeal() {
    meal.style.display="none";
}

function removeKool() {
    kool.style.display = "none"
}

function removeBed() {
    bed.style.display = "none";
}

function removeKnife() {
    knife.style.display = "none";
}

function removeFork() {
    fork.style.display ="none";
}

function removeDodgeball(){
    dodgeball.style.display = "none"
}

function removeCoin(){
    coin.style.display="none"
}

function removeClown() {
    clown.style.display = "none"
}

function removeCurb() {
    curb.style.display="none"
}

function removeHole() {
    hole.style.display="none"
}
 
function removeGame() {
    game.style.display="none"
}

function removeDice() {
    dice.style.display="none"
}

function removeRiver() {
    river.style.display="none"
}

function removeSuit() {
    suit.style.display="none"
}

function removeWingsuit() {
    wingsuit.style.display='none'
}

function removeCell() {
    cell.style.display = 'none'
}

function removeOneDay() {
    oneDay.style.display="none"
}

function revealLightTwo() {
    lightTwoImage.src="img/noInspirationPosts/lightTwo.jpg"
}

function removeSex() {
    sex.style.display="none"
}

function removeSea() {
    sea.style.display="none"
}

function removeOj() {
    oj.style.display="none"
}

function removeFuck() {
    fuck.style.display = "none"
}

function removeSpring() {
    spring.style.display = "none"
}

function removeMean() {
    mean.style.display = "none"
}

function removeMark() {
    mark.style.display = "none"
}

function removeFert() {
    fert.style.display = "none"
}

function removeLaugh() {
    laugh.style.display="none"
}

function removeLight() {
    lightOne.style.display="none"
}

function removeBeard() {
    beard.style.display="none"
}

function removeLife() {
    life.style.display="none"
}

function removePokeCenter() {
    pokeCenter.style.display="none"
}

function removeMath() {
    math.style.display="none"
}

function removeSugar() {
    sugar.style.display="none"
}

function removeSoon() {
    soon.style.display="none"
}

function removeSuck() {
    suck.style.display="none"
}

function removeTomorrow() {
    tomorrow.style.display="none"
}

function removeDream() {
    dream.style.display="none"
}