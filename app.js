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
  fieldOne.style.backgroundColor = "rgb(220,53,69)";
  fieldSix.style.backgroundColor = "rgb(220,53,69)";
  fieldTwelve.style.backgroundColor = "rgb(220,53,69)";
}

function colorYellow() {
  fieldThree.style.backgroundColor = "rgb(255,193,7)";
  fieldFive.style.backgroundColor =  "rgb(255,193,7)";
  fieldSeven.style.backgroundColor =  "rgb(255,193,7)";
}

function colorGreen() {
  fieldTwo.style.backgroundColor = "rgb(25,135,84)";
  fieldNine.style.backgroundColor = "rgb(25,135,84)";
  fieldEleven.style.backgroundColor = "rgb(25,135,84)";
}

function colorBlue() {
  fieldFour.style.backgroundColor = "rgb(13,110,253)";
  fieldEight.style.backgroundColor = "rgb(13,110,253)";
  fieldTen.style.backgroundColor = "rgb(13,110,253)";
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

