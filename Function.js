let score = JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
};

updateFunction();




//  if(!score){
//     score={
//         wins:0,
//         losses:0,
//         ties:0
//     }
//  }

function playGame(playerMove){

   

    const computerMove = pickComputerMove();
    let result = '';
    

    if (playerMove === 'Rock' ){
        if(computerMove === 'Rock'){
            result = 'Tie'
        }else if(computerMove === 'Paper'){
            result = 'You Lose'
        }else if(computerMove ==='Scissors'){
            result = 'You Win'
        }
    }

    if (playerMove === 'Paper' ){
        if(computerMove === 'Rock'){
            result = 'You Win'
        }else if(computerMove === 'Paper'){
            result = 'Tie'
        }else if(computerMove ==='Scissors'){
            result = 'You Lose'
        }
    }

    if (playerMove === 'Scissors' ){
        if(computerMove === 'Rock'){
            result = 'You Lose'
        }else if(computerMove === 'Paper'){
            result = 'You Win'
        }else if(computerMove ==='Scissors'){
            result = 'Tie'
        }
    }
     
    if(result ==='You Win'){
        score.wins +=1;
    }else if(result ==='You Lose'){
        score.losses +=1;
    }else if(result ==='Tie'){
        score.ties +=1;
    }
     
    localStorage.setItem('score',JSON.stringify(score)); 

    document.querySelector('.result').innerHTML=result;

    updateFunction();
    movesFun(playerMove,computerMove);



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

function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateFunction();
    
}

function updateFunction(){
document.querySelector('.score-board').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function movesFun(playerMove,computerMove){
    document.querySelector('.moves').innerHTML 
    = `Your picked ${playerMove}. Computer picker ${computerMove}`;
}

// function iconSelector(playerMove){
//     if(playerMove ==='Rock'){
//         '<i class="fa-solid fa-hand-fist"></i>'
//     }else if(playerMove==='Scissors'){
//         '<i class="fa-solid fa-hand-scissors"></i>'
//     }else if(playerMove==='Paper'){
//         '<i class="fa-solid fa-hand"></i>'
//     }
//     }