const fizzbuzz = require('./FizzBuzz');

describe('FizzBuzz', () => {

    test('returns Fizz for multiples of 3', function(){
        expect(fizzbuzz(3)).toEqual('Fizz');
    });
});

describe('FizzBuzz', () => {
    test('returns Buzz for multiples of 5', function(){
        expect(fizzbuzz(5)).toEqual('Buzz');
    });
});

describe('FizzBuzz', () => {
    test('returns FizzBuzz for multiples of 3 and 5', function(){
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
    });
});