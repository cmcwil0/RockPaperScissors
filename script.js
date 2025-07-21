
const image = document.querySelector('.diceImg');

function spinAnimation(computerChoice) {
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
            
            image.src = images[computerChoice]; // sets final choice to computerChoice
        }
    }, 100); //Change image every 100ms
}

const choices = document.querySelectorAll('.choiceWrapper');
let userChoice = null;

choices.forEach((choice, index) => { //handles user selection
    choice.addEventListener('click', () => {
        choices.forEach((c) => c.classList.remove('selected')); //for each element in choices deletes selected class
        choice.classList.add('selected'); // adds it back to whatever was selected
        userChoice = index;
    })
})

let outputReference = document.querySelector('.outputLabel');

function gameResult(computerChoice) {
    if(userChoice === 0) {
        if(computerChoice === 0) {
            outputReference.textContent = 'Tie';
        } else if(computerChoice === 1) {
            outputReference.textContent = 'Computer Wins';
        } else if(computerChoice === 2) {
            outputReference.textContent = 'User Wins';
        }
    } else if(userChoice === 1) {
        if(computerChoice === 0) {
            outputReference.textContent = 'User Wins';
        } else if(computerChoice === 1) {
            outputReference.textContent = 'Tie';
        } else if(computerChoice === 2) {
            outputReference.textContent = 'Computer Wins';
        }
    } else if(userChoice === 2) {
        if(computerChoice === 0) {
            outputReference.textContent = 'Computer Wins';
        } else if(computerChoice === 1) {
            outputReference.textContent = 'User Wins';
        } else if(computerChoice === 2) {
            outputReference.textContent = 'Tie';
        }
    }
}


function roll() {
    let computerChoice = Math.floor(Math.random() * 3); //determines computer choice
    if (userChoice === null) return outputReference.textContent = '*No Option Selected*';
    outputReference.style.visibility = 'hidden';
    spinAnimation(computerChoice);
    
    setTimeout(() => {gameResult(computerChoice); outputReference.style.visibility = 'visible';}, 1010);
    
    
}



image.addEventListener('click', () => {roll()});

