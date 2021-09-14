const celsiusToFahrenheit = c => Math.round((c * 9) / 5 + 32);
const fahrenheitToCelsius = f => Math.round(((f - 32) * 5) / 9);
export {
    celsiusToFahrenheit,fahrenheitToCelsius
} 