const Add7 = require('./Add7');



describe('Add7', () => {

    test('adds 7 to a positive number', () => {
        expect(Add7(3)).toBe(10);
    })

    test ('adds 7 to a negative number', () => {
   expect(Add7(-7)).toBe(0);
    })
})