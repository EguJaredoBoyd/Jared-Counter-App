//Target all buttons for slider
let fontSizeSlider = document.getElementById('font-size-slider');
let textContent = document.getElementById('text-content');

//Target all buttons for light and dark mode
let displayMode = document.getElementById('display-mode');
let documentBody = document.body;

//Manipulate the slider to change font size
fontSizeSlider.addEventListener('input', () => {
    let sizeOfFont = `${fontSizeSlider.value}px`;
    textContent.style.fontSize = sizeOfFont;

})

//Switch to light or dark mode
displayMode.addEventListener('click', () => {
    documentBody.style = `{background-color: "red";}`;
})
