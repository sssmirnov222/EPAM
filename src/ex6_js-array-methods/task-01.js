function arr (array, begin, end = array.length) {
      let mas = [];
      
      if(begin < 0 && end > 0) {
        for(let i = 0; i < end; i++){
          mas.push(array[i])
      }
      return mas
    }
       
      if(begin > 0 && end > array.length){
        for(let i = begin; i < array.length; i++){
          mas.push(array[i])
      }
      return mas
    } 
      
      if(begin && end > 0) {
        for(let i = begin; i < end; i++){
            mas.push(array[i])
        }
        return mas
      } 

  
      if( (begin && end) < 0) {
        for(let i = -end - 1 ; i < -begin - 1; i++){
            mas.push(array[i])
        }
        return mas
      } 
      
    return array 
       
}
console.log(arr(['a','b','c','d','e'],2,10))
module.exports = arr;