
let arr = [1,2,3,4,5,6];
    let result;

function some (array,callback) {
    for(let i = 0; i < array.length; i++) {
       if (callback(array[i]) < 0) {
        result = true
         break;
       } else {
         result = false
       }
                }            
      return result
    }

  
    let z = some (arr, callback);
    console.log(z)
    module.exports = some;
