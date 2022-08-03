const functions = require('./funcapi.js')

//async data
test('name fetched via api should be Leanne Graham', () =>{
 expect.assertions(1);
 return functions.fetchUser().then (data => {
     expect (data.name).toEqual('Leanne Graham')
  })

})
//This test will pass. The function 'GETS' a userdata record
// from an online  json api. The test checks whether the name in the record is
// matches 'Leanne Graham'. It does match so the test passes