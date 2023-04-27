var doorClosed = document.getElementById('doorClosed')
var reveal = document.getElementById('reveal')

function openDoor() {
    doorClosed.src = "img/dooropen.png"
    doorClosed.style= "height: 550px; width: 350px;"
    reveal.style.display="block";
}