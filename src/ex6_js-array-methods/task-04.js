let arr = [1,2,3,4,5,6];
    let result = [];

function filter (array,callback) {
    for(let i = 0; i < array.length; i++) {
       if (callback(array[i]) == 2 ) {
        result.push(arr[i])
         
       } else {
         result 
       }
                }            
      return result
    }

  
    let z = filter (arr, callback);
    console.log(z)
    module.exports = filter;