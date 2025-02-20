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

function playRoundOld(humanChoice, computerChoice, resultsTable) {

    let gamestring = 'h' + humanChoice.charAt(0) + 'c' + computerChoice.charAt(0);
    let result = resultsTable[gamestring];
    const winnerTable = {
        hrcr: "=",
        hrcs: "h",
        hrcp: "c",
        hscs: "=",
        hscp: "h",
        hpcp: "="
    };

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

function selectOption(clicked_id) {
    console.log("Button clicked - " + clicked_id);
    let preview = document.getElementById('preview-item');
    let image = document.createElement('img')
    image.src = "img/" + clicked_id + ".png";
    image.style = "height: 150px; width: 150px;"
    if (preview.childElementCount > 0) {
        preview.removeChild(preview.childNodes[0])
    }
    preview.appendChild(image)
}

function playRound() {

    const choices = document.querySelectorAll('#preview-item');
    const results = document.querySelector('#results');
    const nextRound = document.querySelector('#nextRound-button');
    const submit = document.querySelector('#submit-button');
    const humanScore = document.querySelector('#h-score');
    const computerScore = document.querySelector('#c-score');
    const winnerTable = {
        hrcr: "=",
        hscs: "=",
        hpcp: "=",        
        hrcs: "h",
        hscp: "h",
        hpcr: "h",        
        hrcp: "c",
        hpcs: "c"
    }

    if (lockRound) {
        console.log('this round is over. Please go to next round')
        return
    }

    if (choices[0].childElementCount == 0) {
        results.textContent = 'Select a Choice'
        console.log('human must select a choice')
        return
    }

    if (results.textContent == 'Select a Choice') {
        results.textContent = ''
    }

    let cChoice;
    let hChoice = choices[0].childNodes[0].src.split('/').at(-1).split('.')[0]

    if (choices[1].childElementCount == 0) {
        cChoice = getComputerChoice()
    } else {
        cChoice = choices[1].childNodes[0].src.split('/').at(-1).split('.')[0]
    }
    
    if (choices[1].childElementCount == 0) {
        choices[1].appendChild(document.createElement('img'))
        choices[1].childNodes[0].src = "img/" + cChoice + ".png"
        choices[1].childNodes[0].style = "height: 150px; width: 150px;"
    }

    resultString = 'h' + hChoice.charAt(0) + 'c' + cChoice.charAt(0)
    console.log('result string - ' + resultString)
    let winner = winnerTable[resultString]

    switch (winner) {
        case '=':
            results.textContent = 'Its a Tie'
            lockRound = true;
            break;
        case 'h':
            results.textContent = 'You Won'
            humanScore.textContent++
            lockRound = true;
            break;
        case 'c':
            results.textContent = 'The Computer Won'
            computerScore.textContent++
            lockRound = true;
            break;
        default:
            console.log('something broke');
            break;
    }


    nextRound.style = ''
    submit.style = 'display: none;'
    
}

function nextRound() {
    const choices = document.querySelectorAll('#preview-item');
    const results = document.querySelector('#results');
    const nextRound = document.querySelector('#nextRound-button');
    const submit = document.querySelector('#submit-button');
    const round = document.querySelector('#round-num');

    if (round.textContent >= 5) {
        gameOver()
        return
    }

    nextRound.style = 'display: none;'
    submit.style = ''
    round.textContent++
    choices[0].removeChild(choices[0].childNodes[0])
    choices[1].removeChild(choices[1].childNodes[0])
    results.textContent = ''

    lockRound = false
    
}

function gameOver() {
    console.log('game over')
    const preview = document.getElementById('preview')
    const humanScore = document.querySelector('#h-score');
    const computerScore = document.querySelector('#c-score');
    const results = document.querySelector('#results');
    const submit = document.querySelector('#submit-button');
    const nextRound = document.querySelector('#nextRound-button');

    while (preview.firstChild) {
        preview.removeChild(preview.lastChild)
    }
    results.textContent = ''
    submit.style = 'display: none;'
    nextRound.style = 'display: none;'


    if (humanScore.textContent > computerScore.textContent) {
        preview.textContent = 'GAME OVER YOU WON'
    }
    if (computerScore.textContent > humanScore.textContent) {
        preview.textContent = 'GAME OVER THE COMPUTER WON'
    }

};

let lockRound = false;
let gameEnd = false;