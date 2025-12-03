//Target the toggle button
let toggleButton = document.getElementById('toggle-button');
let toggleList = document.getElementById('toggle-list');
let toggleButtonClose = document.getElementById('toggle-button-close');


//Toggle the button to show the list
toggleButton.addEventListener('click', () => {
    toggleList.classList.toggle('show');
})

//Toggle the close button to remove list
toggleButtonClose.addEventListener('click', () => {
    toggleList.classList.toggle('show');
})

