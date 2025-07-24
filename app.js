let userScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
 let userWin;


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game is draw");
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor ="gray";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Won");
        msg.innerText = `You Win !! , Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose, comp ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "Red";
    }
};

const playGame = (userChoice) => {
    
    //comp choice
    const compChoice = genCompChoice();   

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});