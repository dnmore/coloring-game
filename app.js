const btnRed = document.getElementById("redBtn");
const btnGreen = document.getElementById("greenBtn");
const btnYellow = document.getElementById("yellowBtn");
const btnBlue = document.getElementById("blueBtn");
const btnClear = document.querySelector("#clear");

const fieldOne = document.getElementById("one");
const fieldTwo = document.getElementById("two");
const fieldThree = document.getElementById("three");
const fieldFour = document.getElementById("four");
const fieldFive = document.getElementById("five");
const fieldSix = document.getElementById("six");
const fieldSeven = document.getElementById("seven");
const fieldEight = document.getElementById("eight");
const fieldNine = document.getElementById("nine");
const fieldTen = document.getElementById("ten");
const fieldEleven = document.getElementById("eleven");
const fieldTwelve = document.getElementById("twelve");

function colorRed() {
  fieldOne.style.backgroundColor = "#fc0313";
  fieldSix.style.backgroundColor = "#fc0313";
  fieldTwelve.style.backgroundColor = "#fc0313";
}

function colorYellow() {
  fieldThree.style.backgroundColor = "#f2f202";
  fieldFive.style.backgroundColor = "#f2f202";
  fieldSeven.style.backgroundColor = "#f2f202";
}

function colorGreen() {
  fieldTwo.style.backgroundColor = "#05f005";
  fieldNine.style.backgroundColor = "#05f005";
  fieldEleven.style.backgroundColor = "#05f005";
}

function colorBlue() {
  fieldFour.style.backgroundColor = "#1a02f2";
  fieldEight.style.backgroundColor = "#1a02f2";
  fieldTen.style.backgroundColor = "#1a02f2";
}

function clearColors() {
  fieldOne.style.backgroundColor = "#03dffc";
  fieldTwo.style.backgroundColor = "#03dffc";
  fieldThree.style.backgroundColor = "#03dffc";
  fieldFour.style.backgroundColor = "#03dffc";
  fieldFive.style.backgroundColor = "#03dffc";
  fieldSix.style.backgroundColor = "#03dffc";
  fieldSeven.style.backgroundColor = "#03dffc";
  fieldEight.style.backgroundColor = "#03dffc";
  fieldNine.style.backgroundColor = "#03dffc";
  fieldTen.style.backgroundColor = "#03dffc";
  fieldEleven.style.backgroundColor = "#03dffc";
  fieldTwelve.style.backgroundColor = "#03dffc";
}

btnRed.addEventListener("click", colorRed);
btnGreen.addEventListener("click", colorGreen);
btnYellow.addEventListener("click", colorYellow);
btnBlue.addEventListener("click", colorBlue);
btnClear.addEventListener("click", clearColors);
