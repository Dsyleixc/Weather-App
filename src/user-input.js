'use strict';

const userInput = document.querySelector('.enter-location input');

function clearUserInput() {
    userInput.value = '';
}

function getUserInput() {
    const input = userInput.value;
    clearUserInput();
    return input;
}

export { getUserInput };
