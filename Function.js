function playGame(playerMove){

    const computerMove = pickComputerMove();
    let result = '';
    

    if (playerMove === 'Rock' ){
        if(computerMove === 'Rock'){
            result = 'Tie.'
        }else if(computerMove === 'Paper'){
            result = 'You Lose.'
        }else if(computerMove ==='Scissors'){
            result = 'You Win'
        }
    }

    if (playerMove === 'Paper' ){
        if(computerMove === 'Rock'){
            result = 'You Win'
        }else if(computerMove === 'Paper'){
            result = 'Tie.'
        }else if(computerMove ==='Scissors'){
            result = 'You Lose'
        }
    }

    if (playerMove === 'Scissors' ){
        if(computerMove === 'Rock'){
            result = 'You Lose.'
        }else if(computerMove === 'Paper'){
            result = 'You Win.'
        }else if(computerMove ==='Scissors'){
            result = 'Tie'
        }
    }
    console.log(result)
        
        alert(`Your picked ${playerMove}. Computer picker ${computerMove}. ${result}.`)
}

function pickComputerMove(){
    const randomNum = Math.random();
    let computerMove = '';

    if(randomNum >= 0 && randomNum < 1/3){
        computerMove='Rock'
    }else if(randomNum >= 1/3 && randomNum < 2/3){
        computerMove='Paper'
    }else if(randomNum >= 2/3 && randomNum < 1){
        computerMove = 'Scissors'
    }

    return computerMove;
}