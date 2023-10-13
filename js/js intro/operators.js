// addition +,
// let sum = 20 + 40;
// console.log(sum);

// -
// let sum = 60 - 40;
// console.log(sum);

// for string
// let x = '10', 
//     y =  '20';
//     let result = x + y;
//     console.log(result);

//     console.log(2+2+'1');
//     console.log('1'+2+2);
//     console.log(2+2+'1'+2+2);

//     let a="2";
//     let b="3";
//     console.log(+a + +b); 
//     console.log(a+b);

//     // subtraction

//     let result = 30 - 10;
//     console.log(result);
    
  //  valueof()

  //  let energy = {
  //   valueOf() {
  //     return 100;
  //   },
  //  };

  //  let total = energy - 10;
  //  console.log(total);

  //  let total = energy + 10;
  //  console.log(total);

  //  let total = energy  * 10;
  //  console.log(total);


  //  let total = energy / 10;
  //  console.log(total);

  // remainder %

  // console.log( 5 % 2 ); 
  // console.log( 8 % 3 ); 
  // console.log( 8 % 4 ); 

  // 1-using the remainder operator with positive dividend  example:

    // let remainder = 7 % -2;
    // console.log(remainder);

    // let remainder = 7 % 2;
    // console.log(remainder);

    // 1-using the remainder operator with negative dividend  example:

//      let remainder = 7 % -2;
//     console.log(remainder);

//     let dd = 7 % 2;
//     console.log(dd);

//     let rr = 2 % Infinity;
//     console.log(rr);

//     let ff = Infinity % 2;
//     console.log(ff);

//     let mm = Infinity % Infinity;
//     console.log(mm);

//     let nn = 10 % 0;
//    console.log(nn);

//    let ss = 0 % 10;
//    console.log(ss);

//   let vv = '10' % 3;
//   console.log(vv);
  
// Remainder vs Modulo operator
// const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// console.log('remainder:', 5 % 3);

//  console.log('modulo:', mod(5,3));

// console.log('remainder:', -5 % 3);
// console.log('modulo:', mod(-5,3));
// pre-imediate result, post ++ after console
// let a = 5;
// let b = 6;
// console.log(++a);
// console.log(a++);
// console.log(a);
// console.log(a+10);

// console.log(a--);
  // Assignment Operator......a=a+b its means a+=b.....
  // let a = 20;
  // let b = 10;
  // a +=b;
  // console.log(a)
  // a -=b
  // console.log(a)
  // a *=b;
  // console.log(a)
  // a /=b
  // console.log(a)
  // a %=b;
  // console.log(a)
 
// comparative operators

//  strict equal and not strict equal
// if u use the strict equa find the value datatype 
//  Strict equal is not allowed for different value

  //  10.'10' a===b its false a==b its true;
  // Miscellaneous

  // console.log(null == undefined);-true
  // console.log (NaN == 1);-false
  // onsole.log (NaN ==NaN1);false
    
// Logical operator:
//  and,or,not
// let eligible = false,
//     required = true;

//     console.log(!eligible);
//     console.log(!required);

//     console.log(!undefined);-true
//     console.log(!null);-true
//     console.log(!20);-false
//     console.log(!0);-true
//     console.log(!NaN);-true
//     console.log(!{});-false

    // for -break,continue whatsapp..

    // While loop
//     let i = 0;
//     while (i < 3) { // shows 0, then 1, then 2
//       alert( i );
//         i++;
//         }
//  let

    // calculator
    // program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);



  

  
