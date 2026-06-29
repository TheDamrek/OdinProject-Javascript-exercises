const NumberChecker = require('./NumberChecker');

describe('Number Checker', () => {
    test('returns false when number is 1', function(){
        expect(NumberChecker(1)).toEqual(false);
    });
});


describe('Number Checker', () => {
    test('returns true when number is 10', function(){
        expect(NumberChecker(10)).toEqual(true);
    });
});

describe('Number Checker', () => {
    test('returns true when number is 99', function(){
        expect(NumberChecker(99)).toEqual(true);
    });
});

describe('Number Checker', () => {
    test('returns false when number is 4', function(){
        expect(NumberChecker(4)).toEqual(false);
    });
});