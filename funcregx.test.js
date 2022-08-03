//const functions = require('./funcless.js') // no need to bring in a file as logic of test is built into test.


//Testing regular expressions
test('there is no p in facilitate', () => {
    
    expect ('facilitate').not.toMatch(/p/)
     }) 

     // this will pass as the test looks at each element in the string and compares it with 'p'
     // when it finds there is no match ('.not.toMatch) it passes the test
     