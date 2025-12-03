//Target the toggle button
let toggleButton = document.getElementById('toggle-button');
let toggleList = document.getElementById('toggle-list');
let toggleButtonClose = document.getElementById('toggle-button-close');

//Targe the button for settings
let settingsButton = document.querySelector('#settings-button');
let settingsBody = document.querySelector('#settings-body')

//Toggle the button to show the list
toggleButton.addEventListener('click', () => {
    toggleList.classList.toggle('show');
})

//Toggle the close button to remove list
toggleButtonClose.addEventListener('click', () => {
    toggleList.classList.toggle('show');
})

//Click and toggle the settings button to slide in settings page
settingsButton.addEventListener('click', () => {
    settingsBody.style.backgroundColor = 'yellow';
})