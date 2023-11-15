function celsiusToFahrenheit(celsius) {
    // Formula to convert Celsius to Fahrenheit: (Celsius * 9/5) + 32
    return (celsius * 9/5) + 32;
}

const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature} degrees Celsius is equal to ${fahrenheitTemperature} degrees Fahrenheit.`);
