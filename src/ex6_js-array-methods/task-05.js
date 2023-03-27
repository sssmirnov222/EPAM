let arr = [1,2,3,4,5,6];
    let result = [];

function map (array,callback) {
    for(let i = 0; i < array.length; i++) {
       
        result.push(callback(arr[i]) * 2)
       
                }            
      return result
    }

  
    let z = map (arr, callback);
    console.log(z)
    module.exports = map;