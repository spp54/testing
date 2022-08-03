const functions = require('./funcfalsy.js') // brings in the function to test

test('Should be falsy', () => {
 expect(functions.checkValue(null)).toBeFalsy() // Will pass as null is a falsy value
})

    //test('Should be falsy', () => {
    //expect(functions.checkValue(2)).toBeFalsy() // Will fail as 2 is not a falsy value 
   // })

   //expect(received).toBeFalsy()

    //Received: 2

     // 6 |
     // 7 | test('Should be falsy', () => {
    //> 8 | expect(functions.checkValue(2)).toBeFalsy() // Will pass as null is a falsy value
    //    |                                     ^
    //9 |    })

    //at Object.toBeFalsy (funcfalsy.test.js:8:37)

 //PASS  ./func.test.js
 //PASS  ./funcnull.test.js
 //PASS  ./func2.test.js
 //PASS  ./funcnot.test.js

//Test Suites: 1 failed, 4 passed, 5 total
//Tests:       1 failed, 4 passed, 5 total
//Snapshots:   0 total
//Time:        1.756 s
//Ran all test suites.