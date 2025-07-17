
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


function updateComputer(choice) {
    const computerDiv = document.querySelector('.computerLabel');
    computerDiv.textContent = 'Computer: ' + choice; // updates text content
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
rollButton.addEventListener('click', () => updateComputer(getComputerChoice())); //updates computer label on click (roll)



