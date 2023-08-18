let choice1;
let result='';
let score = JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses: 0,
        ties: 0
    };

// showResult();
updateScoreElement();



//!score checks if score is null
// if (!score) {
//     score = {
//         wins:0,
//         losses: 0,
//         ties: 0
//     };
// }

var choose = function(){
    const pick = ['rock', 'paper', 'scissors'];
    var choice2 = Math.floor(Math.random() * pick.length);
    console.log(pick[choice2]);
    return pick[choice2];
}




var playGame = function (playerChoice) {
    const computerChoice = choose();
    
    if (playerChoice === 'rock') {
        if(computerChoice=='rock'){
            result='TIE';
        }else if (computerChoice == 'paper'){
            result='You Lose';
        }else if (computerChoice === 'scissors') {
            result='You Win';
        }

        // 
        //alert(`You Chose: ${choice1} \n System Chose: ${choice2} \n Result: ${result}`);
    }else if (playerChoice == 'paper') {
        if(computerChoice=='paper') {
            result='TIE';
        }else if (computerChoice == 'rock') {
            result='You Win';
        }else{
            result='You Lose';
        }
        //alert(`You Chose: ${choice1} \n System Chose: ${choice2} \n Result: ${result}`);
    }else if (playerChoice == 'scissors') {
        if(computerChoice=='scissors'){
            result='TIE';
        }  
        else if (computerChoice == 'paper') {
            result='You Win';
        }  
        else{
            result='You Lose';
        }   
        //alert(`You Chose: ${choice1} \n System Chose: ${choice2} \n Result: ${result}`);
    }
    if (result === 'You Win'){
            score.wins += 1;
        } else if ( result === 'You Lose') {
            score.losses += 1;
        } else if( result === 'TIE') {
            score.ties += 1;
        }
    
        localStorage.setItem('score', JSON.stringify(score));

       updateScoreElement();

       document.querySelector('.js-result').innerHTML = result;
       document.querySelector('.js-status')
        .innerHTML = `You :
        <img src="images/${playerChoice}-emoji.png" class="move-icon">
        <img src="images/${computerChoice}-emoji.png" class="move-icon">:
        Computer`;

    
}

function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
