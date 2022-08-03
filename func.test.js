const functions = require('./func.js') // brings in the function to test

test('Adds 10 + 10 to equal 20', () => {
 expect(functions.add(10, 10)).toBe(20) // 'toBe matcher' says expecting 20
})

// This test will pass because 10 plus 10 does equal 20

//jest output
//PASS  ./func.test.js
//√ Adds 10 + 10 to equal 20 (3 ms)

//Test Suites: 1 passed, 1 total
//Tests:       1 passed, 1 total
//Snapshots:   0 total
//Time:        0.652 s, estimated 1 s
//Ran all test suites.