function getComputerChoice() {
    rand = Math.random() * 100

    switch (true) {
        case rand < 33.3:
            return 'rock';
        case rand > 33.3 && rand < 66.6:
            return 'scissors';
        case rand > 66.6:
            return 'paper';
    }

}

function getHumanChoice() {
    let response = 'string'
    let a = 'string'
    let keepgoing = true

    while (keepgoing) {
        response = prompt('rock | paper | scissors')
        switch (response.toLowerCase()) {
            case 'rock':
                a = "rock";
                keepgoing = false;
                break;
            case 'paper':
                a = 'paper';
                keepgoing = false;
                break;
            case 'scissors':
                a = 'scissors';
                keepgoing = false;
                break;
        }
    }

    return a

}

function playRound(humanChoice, computerChoice, resultsTable) {

    let gamestring = 'h' + humanChoice.charAt(0) + 'c' + computerChoice.charAt(0);
    let result = resultsTable[gamestring];

    if (result == '=') {
        console.log('TIE!')
        console.log('Human Choice: ' + humanChoice)
        console.log('Computer Choice: ' + computerChoice)
    }
    if (result == 'h') {
        console.log('You won!')
        console.log('Human Choice: ' + humanChoice)
        console.log('Computer Choice: ' + computerChoice)
    }
    if (result == 'c') {
        console.log('You lost!')
        console.log('Human Choice: ' + humanChoice)
        console.log('Computer Choice: ' + computerChoice)
    }

    return result
}

const winnerTable = {
    hrcr: "=",
    hrcs: "h",
    hrcp: "c",
    hscs: "=",
    hscp: "h",
    hpcp: "="
}

let humanScore = 0;
let computerScore = 0;

let round = 0
while (round < 5) {
    let winner = playRound(getHumanChoice(), getComputerChoice(), winnerTable)

    if (winner == 'h') {
        humanScore += 1
    }
    if (winner == 'c') {
        computerScore += 1
    }

    console.log('---SCORE---')
    console.log('Your Score: ' + humanScore)
    console.log('Computer Score: ' + computerScore)
    console.log(' ')

    round++

}