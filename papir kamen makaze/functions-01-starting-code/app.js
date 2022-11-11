const startGameBtn = document.getElementById('start-game-btn');

const ROCK= 'kamen';
const PAPER= 'papir';
const SCISSORS= 'makaze';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW= 'NERESENO';
const RESULT_PLAYER_WINS= 'POBEDIO SI';
const RESULT_COMPUTER_WINS= 'KOMP JE POBEDIO';

let gameIsRunning=false;

const getPlayerChoise = function(){
    const selection = prompt(`${ROCK}, ${PAPER} ili ${SCISSORS}?`,'').toUpperCase();
    if (
        selection!== ROCK &&
        selection!== PAPER &&
        selection!== SCISSORS
        ){
            alert(`Pogresan izbor! Izabrao sam ${DEFAULT_USER_CHOICE} za tebe!`)
            return DEFAULT_USER_CHOICE
            }  
        return selection
    }


const getComputerChoise= function(){
        const randomValue = Math.random();
        if (randomValue <0.34) {
            return ROCK;
        } else if( randomValue <0.67) {
            return PAPER;
        } else {
            return SCISSORS;
        }
    }



const getWinner = (cChoise, pChoise) =>
    cChoise===pChoise ? RESULT_DRAW:
    cChoise===ROCK && pChoise===PAPER ||
    cChoise===PAPER && pChoise===SCISSORS ||
    cChoise===SCISSORS && pChoise===ROCK?
    RESULT_PLAYER_WINS:RESULT_COMPUTER_WINS


// const getWinner = function(cChoise, pChoise){
//     if (cChoise===pChoise){
//         return RESULT_DRAW;
//     } else if (
//         cChoise===ROCK && pChoise===PAPER ||
//         cChoise===PAPER && pChoise===SCISSORS ||
//         cChoise===SCISSORS && pChoise===ROCK
//     ){
//         return RESULT_PLAYER_WINS;
//     } else {
//         return RESULT_COMPUTER_WINS; 
//     }
// }


startGameBtn.addEventListener('click', function(){
    if (gameIsRunning){
        return
    };
    gameIsRunning=true;
    console.log('igra pocinje..');
    const playerChoice= getPlayerChoise();
    const computerChoise=getComputerChoise();
    const winner=getWinner(computerChoise,playerChoice)
    console.log(winner);
    let message=`Izabrao si ${playerChoice}, komp je izabrao ${computerChoise},`
    if(winner===RESULT_DRAW) {
        message= message+' igra je neresena';
    } else if (winner===RESULT_PLAYER_WINS){
        message=message+ 'Ti si pobedio!';
    } else {
        message=message+ 'Komp je pobedio!';
    }
    alert(message)
    gameIsRunning=false;

});
