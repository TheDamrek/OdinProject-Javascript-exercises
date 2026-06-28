const HelloWorld = require('./HelloWorld.js');

describe('Hello World', function(){
test('says "Hello World"', function(){

    expect(HelloWorld()).toEqual('Hello World')
})
})