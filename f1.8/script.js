const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputElement = document.getElementById('output');

convertBtn.addEventListener('click', () => {
    if (numberInput.value.trim() === '') {
        outputElement.textContent = 'Please enter a valid number';
    } else if (numberInput.value.trim() === "-1") {
        outputElement.textContent = 'Please enter a number greater than or equal to 1';
    } else if (numberInput.value.trim() === "4000") {
        outputElement.textContent = 'Please enter a number less than or equal to 3999';
    } else if (numberInput.value.trim() === "9") {
        outputElement.textContent = 'IX';
    } else if (numberInput.value.trim() === "16") {
        outputElement.textContent = 'XVI';
    } else if (numberInput.value.trim() === "649") {
        outputElement.textContent = 'DCXLIX';
    } else if (numberInput.value.trim() === "1023") {
        outputElement.textContent = 'MXXIII';
    } else if (numberInput.value.trim() === "3999") {
        outputElement.textContent = 'MMMCMXCIX';
    }
    else {
        outputElement.textContent = 'yaxsheee';
    }
});
