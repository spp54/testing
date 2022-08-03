//const functions = require('./funcless.js') // no need to bring in a file as logic of test is built into test.


//less than and greater than
test('should be under 2000', () => {
    const weight1 = 1200
    const weight2 = 750
    expect (weight1 + weight2).toBeLessThan(2000)
     }) 
     //This will pass ass the sum of weight1 and weight2 is less than 2000
    

