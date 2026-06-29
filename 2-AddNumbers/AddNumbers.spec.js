const AddNumbers = require('./AddNumbers');

describe('Add Numbers', function(){
    test('adds a and b to equal 2', function(){
        expect(AddNumbers(1, 1)).toEqual(2)
    })
})