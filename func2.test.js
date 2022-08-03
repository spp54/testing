const functions = require('./func.js') // brings in the function to test

test('Adds 10 + 10 to equal 20', () => {
 expect(functions.add(10, 10)).toBe(20) //'toBe matcher' expecting 21
})



// This test failed because 10+10 does not equal 21

//jest output
//expected: 21
//received: 20
//test Suites: 1 failed, 1 passed, 2 total
//Tests:       1 failed, 1 passed, 2 total
//Snapshots:   0 total
//Time:        1.053 s
//Ran all test suites.