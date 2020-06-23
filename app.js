let userScore = 0;
let computerScore = 0;
const userScore_spam = document.getElementById("user-score");
const computerScore_spam = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_spam.innerHTML = userScore;
    computerScore_spam.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " You Win!";
    console.log('test')
    document.getElementById(userChoice).classList.add('green-glow');
    console.log(document.getElementById(userChoice).classList)
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_spam.innerHTML = computerScore;
    userScore_spam.innerHTML = userScore;
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + " You Lose!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 500);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(computerChoice) + convertToWord(userChoice) + " You Draw!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('gray-glow');
    }, 500);



}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;


    }


}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");

    })
}

main();