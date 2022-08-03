const functions = require('./funcstring.js') // brings in the function to test

//test('Should be falsy', () => {
//expect(functions.checkValue(null)).toBeFalsy() // Will pass as null is a falsy value
//})

    

    //test('user should be Steve Davidson', () => {
    //expect(functions.createUser()).toBe({firstName: 'Steve', lastName:'Davidson'
    // }) 
    // })
    
    
    //this will fail as the 'toBe' matcher is strict in the sense that the memory location of the values must match
    // In this case use the 'toEqual' matcher which compares the strings not the memory location. See below
    
    
    //jest output
    //expect(received).toBe(expected) // Object.is equality
    //If it should pass with deep equality, replace "toBe" with "toStrictEqual"

    //Expected: {"firstName": "Steve", "lastName": "Davidson"}
    //Received: serializes to the same string

       //6 |
       //7 |     test('user should be Steve Davidson', () => {
       //8 |     expect(functions.createUser()).toBe({firstName: 'Steve', lastName:'Davidson'
       //                                       ^
       //9 |      })
      //10 |     })
           
      
 //PASS  ./func.test.js
 //PASS  ./funcnull.test.js
 //PASS  ./funcnot.test.js
 //PASS  ./func2.test.js

 //Test Suites: 1 failed, 5 passed, 6 total
 //Tests:       1 failed, 5 passed, 6 total
 //Snapshots:   0 total
 //Time:        1.979 s
 //Ran all test suites.

test('user should be Steve Davidson', () => {
    expect(functions.createUser()).toEqual({firstName: 'Steve', lastName:'Davidson'
     }) 
    })

    //This will pass as the 'toequal' matcher looks for the contents of the string not their memory location 

    //jest output with coverage switch
    // the jest coverage option prints out a table of stats for all your tests
    // It also generates a html page showing the same stats for a web browswer
    
    //jest --coverage

 //PASS  ./funcstring.test.js
 //PASS  ./funcfalsy.test.js
 //PASS  ./funcnull.test.js
 //PASS  ./funcnot.test.js
 //PASS  ./func2.test.js
//PASS  ./func.test.js
//---------------|---------|----------|---------|---------|-------------------
//File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
//--------------|---------|----------|---------|---------|-------------------
//All files      |   73.91 |      100 |   45.45 |   73.91 | 
//func.js       |     100 |      100 |     100 |     100 | 
//funcfalsy.js  |      60 |      100 |   33.33 |      60 | 2-3
//funcnot.js    |     100 |      100 |     100 |     100 | 
//funcnull.js   |      75 |      100 |      50 |      75 | 2
//funcstring.js |    62.5 |      100 |      25 |    62.5 | 2-4
//---------------|---------|----------|---------|---------|-------------------

//Test Suites: 6 passed, 6 total
//Tests:       6 passed, 6 total
//Snapshots:   0 total
//Time:        1.993 s
//Ran all test suites.