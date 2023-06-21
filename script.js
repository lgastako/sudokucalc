window.onload = function() {
    // Generate the 9x9 grid
    const gridContainer = document.getElementById('grid-container');
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.id = 'cell-' + i;
        gridContainer.appendChild(cell);
    }

    // Generate the digit status selectors
    const digitStatusSelector = document.getElementById('digit-status-selector');
    for (let i = 1; i <= 9; i++) {
        const digitStatus = document.createElement('div');
        digitStatus.classList.add('digit-status');
        digitStatus.innerHTML =
            '<input type="radio" name="digit-' + i + '" id="required-' + i + '" class="required">' +
            '<label for="required-' + i + '">Required</label>' +
            '<input type="radio" name="digit-' + i + '" id="prohibited-' + i + '" class="prohibited">' +
            '<label for="prohibited-' + i + '">Prohibited</label>' +
            '<input type="radio" name="digit-' + i + '" id="available-' + i + '" class="available">' +
            '<label for="available-' + i + '">Available</label>';
        digitStatusSelector.appendChild(digitStatus);
    }

    // TODO: Add event listeners for the grid cells, calculate button, and reset button
}