const values = require("./JoinStrings");

describe('First Part', () => {
   test('first name is John', () =>{

         expect(values.firstName).toEqual('John');
   });

   test('last name is Doe', () =>{

         expect(values.lastName).toEqual('Doe');
   });



   test('this year is 2026', () =>{

         expect(values.thisYear).toEqual(2026);
   });

   test('birth year is 1990', () =>{

         expect(values.birthYear).toEqual(1990);
   });

   test('correct greeting is returned', () =>{

         expect(values.greeting).toEqual(' Hello, my name is John Doe. I am 36 years old. I was born in 1990, in Mexico.');
   })
})



describe('Second Part', () => {
    test('full name is John Doe', () =>{

          expect(values.fullName).toEqual('John Doe');
    });

    test('age is 36', () =>{

        expect(values.age).toEqual(36);
    });

    test('correct new greeting is returned', () =>{
        expect(values.NewGreeting).toEqual(' Hello, my name is John Doe. I am 36 years old. I was born in 1990, in Mexico.');
    });

})