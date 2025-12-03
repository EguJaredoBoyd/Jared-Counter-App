//Target the toggle button
let toggleButton = document.getElementById('toggle-btton');
let toggleList = document.getElementById('header__button__ul--toggle-list');

//Toggle the button to show the list
toggleButton.addEventListener('click', () => {
    toggleList.style.backgroundColor = 'green';
})