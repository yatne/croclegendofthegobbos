
var answer = 'lllldrrlldrdlur';
var counter = 0;

function up() {
    checkAnswer('u');
}
function down() {
    checkAnswer('d');
}
function left() {
    checkAnswer('l');
}
function right() {
    checkAnswer('r');
}

function checkAnswer(char) {
    if (answer[counter] === char) {
        goodAnswer();
    } else {
        wrongAnswer();
    }
}

function goodAnswer() {
    if (counter < answer.length - 1) {
        counter = counter + 1;
    } else {
        alert('kobyle caco');
    }
}

function wrongAnswer() {
    document.getElementsByClassName('content')[0].style = 'background-color: red;';
    setTimeout(() => {
        document.getElementsByClassName('content')[0].style = 'background-color: greenyellow;';
    }, 200)
    counter = 0;
}
