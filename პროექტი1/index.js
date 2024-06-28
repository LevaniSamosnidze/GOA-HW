const display = document.getElementById('display');

document.getElementById('btn-clear').addEventListener('click', () => {
    display.value = '';
});



document.getElementById('btn-divide').addEventListener('click', () => {
    display.value += '/';
});

document.getElementById('btn-7').addEventListener('click', () => {
    display.value += '7';
});

document.getElementById('btn-8').addEventListener('click', () => {
    display.value += '8';
});

document.getElementById('btn-9').addEventListener('click', () => {
    display.value += '9';
});

document.getElementById('btn-multiply').addEventListener('click', () => {
    display.value += '*';
});

document.getElementById('btn-4').addEventListener('click', () => {
    display.value += '4';
});

document.getElementById('btn-5').addEventListener('click', () => {
    display.value += '5';
});

document.getElementById('btn-6').addEventListener('click', () => {
    display.value += '6';
});

document.getElementById('btn-minus').addEventListener('click', () => {
    display.value += '-';
});

document.getElementById('btn-1').addEventListener('click', () => {
    display.value += '1';
});

document.getElementById('btn-2').addEventListener('click', () => {
    display.value += '2';
});

document.getElementById('btn-3').addEventListener('click', () => {
    display.value += '3';
});

document.getElementById('btn-plus').addEventListener('click', () => {
    display.value += '+';
});

document.getElementById('btn-0').addEventListener('click', () => {
    display.value += '0';
});

document.getElementById('btn-dot').addEventListener('click', () => {
    display.value += '.';
});

document.getElementById('btn-equal').addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
});