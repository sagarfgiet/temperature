document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('tempInput').value;
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    const resultDiv = document.getElementById('result');

    // Validate if input is a number
    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const temp = parseFloat(tempInput);
    let convertedTemp;

    // Celsius to other units
    if (unitFrom === 'C') {
        if (unitTo === 'F') {
            convertedTemp = (temp * 9/5) + 32; // Celsius to Fahrenheit
        } else if (unitTo === 'K') {
            convertedTemp = temp + 273.15; // Celsius to Kelvin
        } else {
            convertedTemp = temp; // Celsius to Celsius (no conversion)
        }
    }
    // Fahrenheit to other units
    else if (unitFrom === 'F') {
        if (unitTo === 'C') {
            convertedTemp = (temp - 32) * 5/9; // Fahrenheit to Celsius
        } else if (unitTo === 'K') {
            convertedTemp = (temp - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
        } else {
            convertedTemp = temp; // Fahrenheit to Fahrenheit (no conversion)
        }
    }
    // Kelvin to other units
    else if (unitFrom === 'K') {
        if (unitTo === 'C') {
            convertedTemp = temp - 273.15; // Kelvin to Celsius
        } else if (unitTo === 'F') {
            convertedTemp = (temp - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        } else {
            convertedTemp = temp; // Kelvin to Kelvin (no conversion)
        }
    }

    // Display the result
    resultDiv.textContent = `${convertedTemp.toFixed(2)} °${unitTo}`;
});
