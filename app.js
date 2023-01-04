const btnRed = document.getElementById('redBtn');
const btnGreen = document.getElementById('greenBtn');
const btnYellow = document.getElementById('yellowBtn');
const btnBlue = document.getElementById('blueBtn');
const btnOrange = document.getElementById('orangeBtn');
const btnClear = document.querySelector('#clear button');


const fieldOne = document.getElementById("one");
const fieldTwo = document.getElementById("two");
const fieldThree = document.getElementById("three");
const fieldFour = document.getElementById("four");
const fieldFive = document.getElementById("five");
const fieldSix = document.getElementById("six");
const fieldSeven = document.getElementById("seven");
const fieldEight = document.getElementById("eight");
const fieldNine = document.getElementById("nine");

function colorRed(){
    fieldOne.style.backgroundColor = 'red';
    fieldSix.style.backgroundColor = 'red';

}

function colorYellow(){
    fieldThree.style.backgroundColor = 'yellow';
    fieldSeven.style.backgroundColor = 'yellow';
}


function colorGreen(){
    fieldTwo.style.backgroundColor = 'green';
    fieldNine.style.backgroundColor = 'green';
}

function colorBlue(){
    fieldFour.style.backgroundColor = 'blue';
    fieldEight.style.backgroundColor = 'blue';

}

function colorOrange(){
    fieldFive.style.backgroundColor = 'orange';
}

function clearColors(){
    fieldOne.style.backgroundColor = 'rgb(215, 187, 247)';
    fieldTwo.style.backgroundColor = 'rgb(215, 187, 247)';
    fieldThree.style.backgroundColor = 'rgb(215, 187, 247)';
    fieldFour.style.backgroundColor = 'rgb(215, 187, 247)';
    fieldFive.style.backgroundColor = 'rgb(215, 187, 247)';
    fieldSix.style.backgroundColor = 'rgb(215, 187, 247)';
    fieldSeven.style.backgroundColor = 'rgb(215, 187, 247)';
    fieldEight.style.backgroundColor = 'rgb(215, 187, 247)';
    fieldNine.style.backgroundColor = 'rgb(215, 187, 247)';
}

btnRed.addEventListener('click',colorRed);
btnGreen.addEventListener('click',colorGreen);
btnYellow.addEventListener('click',colorYellow);
btnBlue.addEventListener('click',colorBlue);
btnOrange.addEventListener('click',colorOrange);
btnClear.addEventListener('click', clearColors);



