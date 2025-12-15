//Target all buttons for slider
let fontSizeSlider = document.getElementById('font-size-slider');
let allCalButton = document.querySelectorAll('.selection-button');
let saveButton = document.getElementById('save-button');
let resetButton = document.getElementById('reset-button');

//Target all buttons for light and dark mode
let displayMode = document.getElementById('display-mode');
let documentBody = document.querySelector('body');

//Get the user last chosen background mode
let savedMode = JSON.parse(localStorage.getItem('light-or-dark-mode'));

//Check if color is saved and then display
if (savedMode === true) {
    document.body.classList.toggle('light-or-dark-mode');

}

//Get the user last button size
let savedScale = localStorage.getItem('scale-button-font');

//Reset the user last button style
let resetSaved = localStorage.getItem('scale-button-font');

//Display the user's last adjusted button
if (savedScale) {
    for (let index = 0; index < allCalButton.length; index++) {
        const element = allCalButton[index];
        element.style.transform = `scale(${savedScale})`;

    }
    fontSizeSlider.value = (savedScale * 50)

};

if (resetSaved) {
    for (let index = 0; index < allCalButton.length; index++) {
        const element = allCalButton[index];
        element.style.transform = `scale(${resetSaved})`;

    }
    fontSizeSlider.value = (resetSaved * 50)

};


//Manipulate the slider to change font size
fontSizeSlider.addEventListener('input', () => {
    const sizeOfFont = (fontSizeSlider.value / 50);

    for (let index = 0; index < allCalButton.length; index++) {
        const element = allCalButton[index];
        element.style.transform = `scale(${sizeOfFont})`;
    }

})

//Save the user's chosen font
saveButton.addEventListener('click', () => {
    let savedFont = (fontSizeSlider.value / 50);
    localStorage.setItem('scale-button-font', savedFont)
});

//Reset the user's chosen font to default
resetButton.addEventListener('click', () => {
    let resetFont = fontSizeSlider.value = 50 / 50;

    for (let index = 0; index < allCalButton.length; index++) {
        const element = allCalButton[index];
        element.style.transform = `scale(${resetFont})`;
    }

    localStorage.setItem('scale-button-font', resetFont);


})

//Switch to light or dark mode
displayMode.addEventListener('click', () => {
    const isLightOrDark = documentBody.classList.toggle('light-or-dark-mode');
    localStorage.setItem('light-or-dark-mode', isLightOrDark);

})


