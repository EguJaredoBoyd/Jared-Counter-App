//Target my history list
console.log('history is active');
const historyList = document.getElementById('history-list');

//Stop if the page does not have history list 
if (historyList) {
    //Get my saved counter history
    const historyData = JSON.parse(localStorage.getItem('counter-history')) || [];

    //Render my history items
    historyData.forEach((historyElement, index) => {
        //Create the a new list element
        const listElement = document.createElement('li');

        //Append the list element with the child elements
        listElement.innerHTML = `
        <h3>${historyElement.entryValue}</h3>
        <div class="li__div--content">
            <h5>${historyElement.entryName}</h5>
            <p>${historyElement.entryDate}</p>
        </div>
        <button data-index="${index}">
            <i class="ri-delete-bin-7-line">
        </i></button>
    `;

        //Dynamically append my list element to the ul
        historyList.appendChild(listElement);

    });
}

