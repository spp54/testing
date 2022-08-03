const functions = require('./funcnull.js') // brings in the function to test

test('should be null', () => {
 expect(functions.isNull()).toBeNull() // 'toBe' matcher' is expecting null
})


//This test will pass as the output of funcnull.js has been set to Null

//jest output
//jest

 //PASS  ./funcnull.test.js
 //PASS  ./func2.test.js
 //PASS  ./funcnot.test.js
 //PASS  ./func.test.js

//Test Suites: 4 passed, 4 total
//Tests:       4 passed, 4 total
//Snapshots:   0 total
//Time:        1.511 s
//Ran all test suites.

//if i set the output of funcnull to 'undefined' the test will fail as the test is expecting an output of 'null'

//FAIL  ./funcnull.test.js
//● should be null

  //expect(received).toBeNull()

  //Received: undefined

    //2 |
    //3 | test('should be null', () => {
    //4 |  expect(functions.isNull()).toBeNull() // 'toBe' matcher' is expecting null
    //5 | })
    //6 |
    //7 |

//at Object.toBeNull (funcnull.test.js:4:29)

//PASS  ./funcnot.test.js
//PASS  ./func.test.js
//PASS  ./func2.test.js

//Test Suites: 1 failed, 3 passed, 4 total
//Tests:       1 failed, 3 passed, 4 total
//Snapshots:   0 total
//Time:        1.581 s
//Ran all test suites.