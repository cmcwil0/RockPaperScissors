
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if(choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Scissors';
    } else if (choice === 2) {
        return 'Paper';
    } 
}


function roll(computerChoice) {

    const userDiv = document.querySelector('.userLabel');
    const outputDiv = document.querySelector('.outputLabel');
    let output = ''; 

    if(userDiv.textContent === "User:") {
        outputDiv.textContent = '!Enter Value!';
        return; //kills function if user has not entered value
    } else if (computerChoice === 'Rock') {

        if(userDiv.textContent === 'User: Rock') {
             output = 'Tie';
        } else if (userDiv.textContent === 'User: Paper') {
            output = 'User Wins';
        } else if (userDiv.textContent === 'User: Scissors') {
            output = 'Computer Wins';
        }
    } else if(computerChoice === 'Paper') {

        if(userDiv.textContent === 'User: Rock') {
            output = 'Computer Wins';
        } else if (userDiv.textContent === 'User: Paper') {
            output = 'Tie';
        } else if (userDiv.textContent === 'User: Scissors') {
            output = 'User Wins';
        }
    } else if (computerChoice === 'Scissors') {
        if(userDiv.textContent === 'User: Rock') {
            output = 'User Wins';
        } else if (userDiv.textContent === 'User: Paper') {
            output = 'Computer Wins';
        } else if (userDiv.textContent === 'User: Scissors') {
            output = 'Tie';
        }
    }
    const computerDiv = document.querySelector('.computerLabel');
    computerDiv.textContent = 'Computer: ' + computerChoice; // updates text content
    outputDiv.textContent = output;
}


function updateUser(choice) {
    const userDiv = document.querySelector('.userLabel');
    userDiv.textContent = 'User: ' + choice;
}

//grabs buttons
const rockButton = document.querySelector('.rockButton');
const scissorsButton = document.querySelector('.scissorsButton');
const paperButton = document.querySelector('.paperButton')


//updates user label on click
rockButton.addEventListener('click', () => updateUser('Rock'));
paperButton.addEventListener('click', () => updateUser('Paper'));
scissorsButton.addEventListener('click', () => updateUser('Scissors'));


const rollButton = document.querySelector('.rollButton'); 
rollButton.addEventListener('click', () => roll(getComputerChoice())); //updates computer label on click (roll)



