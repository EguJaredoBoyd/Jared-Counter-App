//Target all input and save button
const counterInput = document.getElementById('counter-input');
const buttonInputSave = document.getElementById('button-input-save');

//Check if variables exist on this page and run this code
if (counterInput && buttonInputSave) {
    buttonInputSave.addEventListener('click', () => {
        let newEntry = {
            entryName: counterInput.value,
            entryValue: Number(localStorage.getItem('increment')) || 0,
            entryDate: new Date().toLocaleString()
        };

        //Get existing history, or start with an empty array
        let savedHistory = JSON.parse(localStorage.getItem('counter-history')) || [];

        //Add the new entry to the history array
        savedHistory.push(newEntry);

        //Save the updated history back to my local Storage
        localStorage.setItem('counter-history', JSON.stringify(savedHistory));

        alert('Your Counter Has been Saved!')
    })
}