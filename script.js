
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

function checkUserChoice() {

}

const image = document.querySelector('.diceImg');

function spinAnimation() {
    let isSpinning = false;
    let intervalId = null;
    const images = ['images/rock.svg', 'images/paper.svg', 'images/scissors.svg'];

    if(isSpinning) return; //prevents user from clicking again

    isSpinning = true;
    let counter = 0;
    let imageIndex = 0;

    intervalId = setInterval(() => {
        image.src = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length; //uses remainder operator to circle through array
        counter++;

        if (counter >= 10) {
            clearInterval(intervalId);
            isSpinning = false;
            // sets final choice
            const finalIndex = Math.floor(Math.random() * images.length);
            image.src = images[finalIndex];
        }
    }, 100); //Change image every 100ms
}  

image.addEventListener('click', () => {spinAnimation()});

function roll(computerChoice) {
    
    
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



