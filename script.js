var ConReq = 2
var Cons = 500
var Todd = document.querySelector(".Todd")
var Phil = document.querySelector(".Phil")
numberbox = document.querySelector(".numberbox")
conbox = document.querySelector(".conbox")
var username = document.querySelector(".name")

function ToddAccept() {
    ConReq--
    Cons++
    Todd.remove();
    numberbox.innerText = ConReq;
    conbox.innerText = Cons;
}

function ToddRemove() {
    ConReq--
    Todd.remove();
    numberbox.innerText = ConReq;
    conbox.innerText = Cons;
}

function PhilAccept() {
    ConReq--
    Cons++
    Phil.remove();
    numberbox.innerText = ConReq;
    conbox.innerText = Cons;
}

function PhilRemove() {
    ConReq--
    Phil.remove();
    numberbox.innerText = ConReq;
    conbox.innerText = Cons;
}

function changename() {
    username.innerText = "Beep Boop Bop"
}