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
let round = 0;