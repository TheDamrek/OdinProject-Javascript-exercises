const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
	let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
};

const multiply = function(numbers) {
     let total = 1;
     for (let i = 0; i < numbers.length; i++){
        total *= numbers[i];
    }
    return total;
};

    const power = function(a, b) {

    let total = 1;
    for (let i = 0; i < b; i++){
        total = total*a;
    }
    return total;
};

const factorial = function(number) {
    let total = 1;
    for (let i = number; i > 1; i--)
    {total = total*i;}
    return total;
   };

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};