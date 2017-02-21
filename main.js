function addTogether() {

var argsArray = Array.from(arguments);
    
var firstNumber = argsArray[0];

   if(argsArray.length > 1){
       
   var secondNumber = argsArray[1];
        
   if(typeof firstNumber === 'number' && typeof secondNumber === 'number'){
  
     return firstNumber + secondNumber;
   
   }else if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number'){
     
     return undefined;
   }   
     
 }else if(typeof firstNumber === 'number'){
        
   return function(additionalNumber){
           
           if(typeof additionalNumber === 'number'){
             
             return addTogether(firstNumber,additionalNumber); 
                
           }else{
                  
             return undefined;
           }
          
           };
     
 }else{
        
  return undefined;
 }
   
}