function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection){
        console.log('tied');
        return -1;
    }
    if(playerSelection=='rock' && computerSelection=='scissor' 
    || playerSelection=='scissor' && computerSelection=='paper'
    || playerSelection=='paper' && computerSelection=='rock'){
        console.log('You won!');
        return 1;
    }
    if(playerSelection=='scissor' && computerSelection=='rock' 
    || playerSelection=='paper' && computerSelection=='scissor'
    || playerSelection=='rock' && computerSelection=='paper'){
        console.log('You lose!');
        return 0;
    }
}

function game(){
    let playerCount=0;
    let computerCount=0;
    for(let i=1;i<=5;i++){
        let player=prompt("Enter your choice:").toLowerCase();
        let computer=getComputerChoice();
        console.log('Your choice: ' + player + ' ' + 'Computer choice: ' + computer);
        let result=playRound(player,computer);
        if(result==-1)  
            continue;
        if(result==1)
            playerCount++;
        if(result==0)
            computerCount++;
        console.log('Player: ' + playerCount + ' ' + 'Computer: ' + computerCount);
    }
    if(playerCount>computerCount)
        console.log('You won the game');
    else if(playerCount<computerCount)
        console.log('You lose the game');
    else
        console.log('Game tied');
}
game();