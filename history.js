//Target my history list
console.log('history is active');
const historyList = document.getElementById('history-list');

//Stop if the page does not have history list 
if (historyList) {
    //Get my saved counter history
    const historyData = JSON.parse(localStorage.getItem('counter-history')) || [];

    //Create a function to render my counter history
    function renderCounterHistory() {
        //Clear the existing list
        historyList.innerHTML = '';
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

    //Render my history iniitially
    renderCounterHistory();

    //Handle my delete clicks using event delegation
    historyList.addEventListener('click', (event) => {
        //Target the closest button that will be clicked
        const deleteButton = event.target.closest('button');
        console.log(deleteButton);

        //Stop incase a user clicks another button no a delete button
        if (!deleteButton) return;

        //Get the data index from the buttons to delete
        const indexDataToDelete = deleteButton.dataset.index;

        //Remove the item from the array and history
        historyData.splice(indexDataToDelete, 1);

        alert('Counter Deleted Successfully! ')

        //Save the updated history
        localStorage.setItem('counter-history', JSON.stringify(historyData))

        //Re-render my list again
        renderCounterHistory();


    });
}





