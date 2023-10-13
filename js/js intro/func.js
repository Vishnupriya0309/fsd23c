//  Variable scope-Accessability
// hoisting
// function expression
// callback

// Arrow function
let sum = (function (a,b){
  return a + b;
})(10,20);
 console.log(sum);

//  calling function
 function add(a, b) {
     console.log(a + b);
 }
 // calling functions
   add(3,4);

  //  Recursion
   // program to find the factorial of a number

   function factorial(x){
    //  if number is 0
     if (x === 0){
        return 1;
     }
     
    // if number is possible 
    else {
       return x * factorial(x-1);
    }
  }





