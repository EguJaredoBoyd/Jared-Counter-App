//Get, target and save the HTML buuttons in a variable for manipulation
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-btton');
const resetButton = document.getElementById('reset-button');
const numberCounter = document.getElementById('counter-number');

//Function to select count
function selectCount() {
    incrementButton.addEventListener('click', () => {
        console.log('I am increasing');
    })
}

selectCount()