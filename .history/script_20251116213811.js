//Get, target and save the HTML buuttons in a variable for manipulation
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const resetButton = document.getElementById('reset-button');
let numberCounter = document.getElementById('counter-number');

//Function to increase count
function increaseCount() {
    incrementButton.addEventListener('click', () => {
        console.log('I am increasing');
        numberCounter = numberCounter + 1;
    });
}
//Function to decrease count
function decreaseCount() {
    decrementButton.addEventListener('click', () => {
        console.log('I am decreasing');
    });
}
//Function to reset count
function resetCount() {
    resetButton.addEventListener('click', () => {
        console.log('I have reset');
    });
}

increaseCount();
decreaseCount();
resetCount();
