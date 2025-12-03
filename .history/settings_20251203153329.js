//Target all buttons for slider
let fontSizeSlider = document.getElementById('font-size-slider');
let textContent = document.getElementById('text-content');

//Manipulate the slider to change font size
fontSizeSlider.addEventListener('input', () => {
    let sizeOfFont = fontSizeSlider.value + 'rem';
    textContent.style.fontSize = sizeOfFont;

})