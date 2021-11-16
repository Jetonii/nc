const hexa = document.getElementById('hexa')
const binary = document.getElementById('binary')
const result = document.getElementById('result')
const decimal = document.getElementById('decimal')
const octal = document.getElementById('octal')


binary.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        hexa.value = parseInt(binary.value, 2).toString(16).toUpperCase()
        decimal.value = parseInt(binary.value, 2)
        octal.value = parseInt(binary.value, 2).toString(8)
    }
});


hexa.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        decimal.value = parseInt(hexa.value, 16)
        binary.value = (parseInt(hexa.value, 16).toString(2)).padStart(9, '0');
        octal.value = parseInt(hexa.value, 16).toString(8)
    }
});

decimal.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        hexa.value = parseInt(decimal.value).toString(16).toUpperCase();
        binary.value = parseInt(decimal.value).toString(2)
        octal.value = parseInt(decimal.value).toString(8);
    }
});


octal.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        hexa.value = parseInt(parseInt(octal.value, '8')).toString(16).toUpperCase();
        decimal.value = parseInt(octal.value, '8')
        binary.value = parseInt(parseInt(octal.value, '8')).toString(2)
    }
});
