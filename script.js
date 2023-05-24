let body = document.getElementById("mainB");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let color4 = document.querySelector(".color4");
let colorValue = document.getElementById("colorValue");
let btn1 = document.getElementById("color1");
let btn2 = document.getElementById("color2");
let btn3 = document.getElementById("color3");
let btn4 = document.getElementById("color4");
function setColor() {
 body.style.background = "linear-gradient(to right, " +
 color1.value + ", " + color2.value + ", " + color3.value + ", " + color4.value + ")";
 colorValue.textContent = body.style.background;
}
function randomColor() {
 let values = "0123456789ABCDEF";
 let genColor = "#";
 for (let i = 0; i < 6; i++) {
     genColor += values[Math.floor(Math.random() *16)];
}
return genColor;
}
function setrandom() {
color1.value = randomColor();
color2.value = randomColor();
color3.value = randomColor();
color4.value = randomColor();
setColor();
}
setColor();
color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
color3.addEventListener("input", setColor);
color4.addEventListener("input", setColor);

btn1.addEventListener("click", setrandom);
btn2.addEventListener("click", setrandom);
btn3.addEventListener("click", setrandom);
btn4.addEventListener("click", setrandom);