// Conversion functions for temperature

// Convert Celsius to Fahrenheit
function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('resultCelsius').innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('resultCelsius').innerText = 'Please enter a valid number';
    }
}

// Convert Fahrenheit to Celsius
function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('resultFahrenheit').innerText = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('resultFahrenheit').innerText = 'Please enter a valid number';
    }
}

// Conversion functions for distance

// Convert meters to feet
function convertToFeet() {
    const meters = parseFloat(document.getElementById('meters').value);
    if (!isNaN(meters)) {
        const feet = meters * 3.28084;
        document.getElementById('resultMeters').innerText = `${meters} meters is equal to ${feet.toFixed(2)} feet`;
    } else {
        document.getElementById('resultMeters').innerText = 'Please enter a valid number';
    }
}

// Convert feet to meters
function convertToMeters() {
    const feet = parseFloat(document.getElementById('feet').value);
    if (!isNaN(feet)) {
        const meters = feet / 3.28084;
        document.getElementById('resultFeet').innerText = `${feet} feet is equal to ${meters.toFixed(2)} meters`;
    } else {
        document.getElementById('resultFeet').innerText = 'Please enter a valid number';
    }
}
