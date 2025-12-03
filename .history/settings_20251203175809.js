//Target all buttons for slider
let fontSizeSlider = document.getElementById('font-size-slider');
let textContent = document.getElementById('text-content');

//Target all buttons for light and dark mode
let displayMode = document.getElementById('display-mode');
let documentBody = document.querySelector('.body');

//Get the user last chosen background mode
localStorage.getItem('light-or-dark-mode');

//Manipulate the slider to change font size
fontSizeSlider.addEventListener('input', () => {
    let sizeOfFont = `${fontSizeSlider.value}px`;
    textContent.style.fontSize = sizeOfFont;

})

//Switch to light or dark mode
displayMode.addEventListener('click', () => {
    const isLightOrDark = documentBody.classList.toggle('light-or-dark-mode');
    document.querySelector('main').style.backgroundColor = 'orange';
    localStorage.setItem('light-or-dark-mode', isLightOrDark);

})
