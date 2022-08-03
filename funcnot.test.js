const functions = require('./funcnot.js') // brings in the function to test

test('Adds 10 + 10 to equal 20', () => {
 expect(functions.add(10, 10)).not.toBe(21) //matcher can use 'not' as a boolean function
})

//This test will pass 10 + 10 does 'NOT equal 21

//jest output
//PASS  ./funcnot.test.js
//PASS  ./func2.test.js
//PASS  ./func.test.js

//Test Suites: 3 passed, 3 total
//Tests:       3 passed, 3 total
//Snapshots:   0 total
//Time:        1.225 s
//Ran all test suites.