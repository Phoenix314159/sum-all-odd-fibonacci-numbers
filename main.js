function sumFibs(num) {
Array.prototype.secondToLast = function(){
    return this[this.length - 2];
  };
  
  Array.prototype.last = function(){
    return this[this.length -1];
  };
  
  var fibArr = [1,1];
  
  while(fibArr.last() + fibArr.secondToLast() <= num){
    
    fibArr.push(fibArr.last() + fibArr.secondToLast());
  }
  
  return fibArr.filter(function(a){
    
    return a % 2 !== 0;
  
  }).reduce(function(x,y){
    
    return x+y;
  });
}