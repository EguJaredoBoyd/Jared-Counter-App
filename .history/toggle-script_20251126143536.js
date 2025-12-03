//Target the toggle button
let toggleButton = document.querySelector('toggle-button');
let toggleList = document.getElementById('toggle-list');

//Toggle the button to show the list
toggleButton.addEventListener('click', () => {
    toggleList.classList.toggle('show');
})