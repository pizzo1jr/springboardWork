document.addEventListener('DOMContentLoaded', function () {
    // Step 2: Get DOM elements
    const boxContainer = document.getElementById('box-container');
    const newBoxButton = document.getElementById('new-box-button');
    const colorForm = document.getElementById('color-form');
    const colorInput = document.getElementById('color-input');

    // Step 3: State variables
    let boxColor = 'black';
    let boxCounter = 1;

    // Step 4: Form submission - set color
    colorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        boxColor = colorInput.value;

        const allBoxes = document.querySelectorAll('.box');
        allBoxes.forEach(function (box) {
            box.style.backgroundColor = boxColor;
        });

        colorInput.value = '';
    });

    // Step 5: Function to add a new box
    function addNewBox() {
        const newBox = document.createElement('div');
        newBox.innerText = boxCounter;
        newBox.classList.add('box');
        newBox.style.backgroundColor = boxColor;
        newBox.dataset.id = boxCounter;
        boxContainer.appendChild(newBox);
        boxCounter++;
    }

    // Step 6: Button click
    newBoxButton.addEventListener('click', addNewBox);

    // Step 7: Double-click to remove
    document.addEventListener('dblclick', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.remove();
        }
    });

    // Step 8: Mouseover to show coordinates
    document.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.innerText = `X: ${e.pageX}, Y: ${e.pageY}`;
        }
    });

    // Step 9: Mouseout to restore ID
    document.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.innerText = e.target.dataset.id;
        }
    });

    // Step 10: "N" key to add box
    document.addEventListener('keydown', function (e) {
        if (e.target === colorInput) return;

        if (e.key === 'n' || e.key === 'N') {
            addNewBox();
        }
    });
});