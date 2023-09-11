function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

let playerPts = 0
let compPts = 0
let para = document.getElementById('resPara')
let pts = document.getElementById('pts')
pts.textContent = `Player: ${playerPts} Computer: ${compPts}`
function playRound() {
    let computerSelection = getComputerChoice()
    let playerSelection = this.value
    if (playerSelection === computerSelection) {
        para.textContent = 'Tied!'
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissor'
        || playerSelection == 'scissor' && computerSelection == 'paper'
        || playerSelection == 'paper' && computerSelection == 'rock') {
        para.textContent = 'You won!'
        playerPts++
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock'
        || playerSelection == 'paper' && computerSelection == 'scissor'
        || playerSelection == 'rock' && computerSelection == 'paper') {
        para.textContent = `You lose!`
        compPts++
    }
    para.textContent += ` Your choice: ${playerSelection} and Computer choice: ${computerSelection}`
    pts.textContent = `Player: ${playerPts} Computer: ${compPts}`
    winner()
}
// event firing
const btn = document.querySelectorAll('.option')
btn.forEach(ele => {
    ele.addEventListener('click', playRound)
})
// decide winner
function winner(){
    if (playerPts == 5 || compPts == 5) {
        btn.forEach(ele => {
            ele.removeEventListener('click', playRound)
        })
        if (playerPts == 5)
            para.textContent = "You won the game!"
        else
            para.textContent = "You lost the game to a computer!"
    }
}
// play again 
const again = document.getElementById('again')
again.addEventListener('click', () => {
    location.reload()
})