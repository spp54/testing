//const functions = require('./funcless.js') // no need to bring in a file as logic of test is built into test.


//Testing arrays
    test('does my array contain the party', () => {
    asaying = ['now','is','the','time','for','all','good','men','to','come','to','the','aid','of','the','party']
    
    expect (asaying).toContain('party')
     }) 

     // this will pass as the array contains the word party

     
     
//Testing arrays
    test('make sure my array does not contain the word mongodb', () => {
    asaying = ['now','is','the','time','for','all','good','men','to','come','to','the','aid','of','the','party']
    
    expect (asaying).not.toContain('mongodb')
     }) 

     // this will also pass as the array does not contain (not.toContain) the word mongodb