

const convertToFahrenheit = function(celsius) {

let UnroundedFahrenheit = celsius*(9/5)+32
let Fahrenheit = UnroundedFahrenheit.toFixed(1)
return +Fahrenheit;

};

const convertToCelsius = function(fahrenheit) {

let UnroundedCelsius = (fahrenheit-32)*(5/9)
let Celsius = UnroundedCelsius.toFixed(1)
return +Celsius;

};




module.exports = {
  convertToCelsius,
  convertToFahrenheit
};