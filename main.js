//select DOM elements

const squares = document.querySelectorAll('.square');
const answerDisplay = document.querySelector('.correct');
const colorDisplay = document.querySelector('h1');
const button = document.querySelector('button');

let colors = [];

generateRandomColor();
assign_colors();
CheckColor ();

function generateRandomColor() {
    for(let i = 0; i < squares.length; i++) {
        colors.push(
            `rgb(${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)})`
        );
    }
}

function assign_colors () {
    colors.forEach((color, index) => {
        squares[index].style.background = color;
        squares[index].setAttribute('data-color', color);
    });
}

function generateRandomPickedColor () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent =  `Which color is ${randomColor}?`
    return randomColor;
}

function CheckColor () {
    squares.forEach(square => {
        square.addEventListener('click', e => {
            if(e.target.dataset.color === pickedColor) {
                answerDisplay.textContent = 'Correct';
            }
            else {
                answerDisplay.textContent = 'Wrong';
                e.target.classList.add('fade');
            }
        });
    });
}

let pickedColor = generateRandomPickedColor();

function reset () {
    colors = [];
    generateRandomColor();
    squares.forEach(square => square.classList.remove('fade'));
    assign_colors();
    CheckColor ();
    pickedColor = generateRandomPickedColor();
}

button.addEventListener('click', reset);