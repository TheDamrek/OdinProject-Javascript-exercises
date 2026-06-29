const MathEquations = require('./MathEquations');

describe('Math Equations', () => {

    test('adds 1 + 1 to equal 2', function(){
        expect(MathEquations.a).toEqual(2);
    });
});

describe('Math Equations', () => {

    test('multiplies 2 * 2 to equal 4', function(){
        expect(MathEquations.b).toEqual(4);
    });
});


describe('Math Equations', () => {
    test('subtracts 3 - 1 to equal 2', function(){
        expect(MathEquations.c).toEqual(2);
    });
});


describe('Math Equations', () => {

    test('divides 10 / 2 to equal 5', function(){
        expect(MathEquations.d).toEqual(5);
    });
});

describe('Math Equations', () => {
    test('evaluates 2 + 9 - (2 * 8) to equal -5', function(){
        expect(MathEquations.e).toEqual(-5);
    });
});