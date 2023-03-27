
const arr = [1, -1, 2, -2, 3];
let init = 0;

function reduce (array, callback ,initialValue ) {
  for(let i = 0; i < array.length; i++) {
       initialValue += array[i]
       callback(item) = initialValue;
       callback(prev) = callback(item) - array[i]
  }

}

function fn(prev, item, i, array) {
    return prev*item*i+array.length
}


let z = reduce (arr, fn, init);
 console.log(z)
 module.exports = reduce;
