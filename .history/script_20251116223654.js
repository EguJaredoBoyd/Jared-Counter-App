//Get the last number clicked
let numberCount = Number(localStorage.getItem('increment')) || 0;

//Get last button clicked once the browser loads
let savedColor = localStorage.getItem('color');
let savedColor2 = localStorage.getItem('color2');
let savedColor3 = localStorage.getItem('color3')

let numberIncrement = document.querySelector('#increment');
let numberDecrement = document.getElementById('decrement');
let numberReset = document.querySelector('#reset');
let startCount = document.getElementById('start-count');

//Loads the the page with the last clicked number
startCount.textContent = numberCount;

//Uses the saved colour as a variable for the string 'red'
if (savedColor) {
    numberIncrement.style.backgroundColor = savedColor;
}
if (savedColor2) {
    numberDecrement.style.backgroundColor = savedColor2
}
if (savedColor3) {
    numberReset.style.backgroundColor = savedColor3;
}



numberIncrement.addEventListener('click', () => {
    let incrementColor = numberIncrement.style.backgroundColor = 'red';

    //Reset the other button colours
    numberDecrement.style.background = '';
    numberReset.style.background = '';

    //Save the color so it reminds user of last button clicked
    localStorage.setItem('color', incrementColor)
    //Remove colour storage for other buttons
    localStorage.removeItem('color2')
    localStorage.removeItem('color3')

    let counting = startCount.textContent = numberCount += 1;
    if (counting > 0) {
        startCount.style.color = 'green'
    }
    else if (counting === 0) {
        startCount.style.color = 'black';
    }
    if (numberCount < 0) {
        startCount.style.color = 'red'
    }

    //Save the number count to the localStorage
    localStorage.setItem('increment', numberCount);

})
numberDecrement.addEventListener('click', () => {
    let decrementColor = numberDecrement.style.backgroundColor = 'yellow';

    //Reset the other button colours
    numberIncrement.style.backgroundColor = '';
    numberReset.style.backgroundColor = '';

    //Save the color so it reminds user of last button clicked
    localStorage.setItem('color2', decrementColor)
    //Remove colour storage for other buttons
    localStorage.removeItem('color');
    localStorage.removeItem('color3')

    let negativeCounting = startCount.textContent = numberCount -= 1;
    if (negativeCounting < 0) {
        startCount.style.color = 'red'
    }
    else if (negativeCounting === 0) {
        startCount.style.color = 'black'
    }
    localStorage.setItem('increment', numberCount);
})
numberReset.addEventListener('click', () => {
    let resetColor = numberReset.style.backgroundColor = 'Blue';

    //Save the color so it reminds user of last button clicked
    localStorage.setItem('color3', resetColor)

    let resetCounting = startCount.textContent = numberCount = 0;
    if (resetCounting === 0) {
        startCount.style.color = 'black'
    }
    localStorage.setItem('increment', numberCount);
})