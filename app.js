// Kelvin Weather
// Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
// Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.
// With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
 
const kelvin = 0; // The value saves to kelvin will stay constant.
const celsius = kelvin - 273;
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
const newton = Math.floor(celsius * .33);
console.log(`The temperature is ${newton} newton.`);
