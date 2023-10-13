// coding

// const team = [23,45,56,67];

// console.log(team);
// const vp = [];
// vp[0]='this'
// vp[1]='is vishnupriya'
// vp[2]= '23'
// console.log(vp);

//values may be-object,function,array ex-e-commerce

// const newData=[
//   {'tesk1': 'exercise'},
//   [1,2,3],
//   function hello() {console.log('hello')}
// ];

// const newData = new Array (23,34,45);
// console.log(newData)

// const a = ['H', 'e', 'l', 'l', 'o'];
// console.log(a);
// console.log(a[0]);
// a.push('welcome');
// console.log(a);
// a.unshift('hai');
// console.log(a);

// // replace
// a[2] = 'a';
// console.log(a);

//remove-pop end shift-start
//  a.pop();

//  console.log(a);
//  a.shift();
//  console.log(a);

// //  lenght
//  console.log(a.length);

//  
// const b = ['H', 'e', 'l', 'l', 'o'];
// document.write(b.sort(),"<br>","<br>");
// document.write(b.indexOf('l',"<br>","<br>"));

// const fruit = ['apple', 'banana', 'orange', 'grape'];
// // document.write(fruit.slice(1),"<br>","<br>");
// // document.write(fruit.slice(3),"<br>","<br>");
// document.write(fruit.splice(3),"<br>","<br>");

// concatenates to array
// const firstName = ['vishnupriya'];
// const lastName = ['ganesan'];
// const newName = firstName.concat(lastName);
// document.write(newName);

// indexof,sport

// in js array is object type and values are reference.

// multidimensional aaray

//  const customerData = [['vp', 24],['aks' ,20],['pri', 34]];
 
//  document.write(customerData[2][0]);

// //  add outer Array
// customerData.push('hello');
// document.write(customerData);
// //  add inner Array
// customerData[1][2].push('hai');
// document.write(customerData);

//splice()-cutting

const customerId = [['jack',23],['ram',34],['krish',34]];

customerId.splice(1, 0,['vp', 34]);

console.log(customerId);

//remove

const cData = [['jack',23],['ram',34]];
cData[1].pop();
// remove the position
cData[1].splice(1,1);
console.log(cData);

// loops in js

// filter,split,reverse,sort,join,find,findoff,this -array methods.

// use the for loop
// iterating over multidimensional

// array foreach() method
// let studentsData = [['jack',23],['ram',34]];

// studentsData.forEach((student) => {
//   student.forEach((data) =>{
//      console.log(data);
//   });
// });

// use the for...of loop

let studentsData = [['jack',23],['ram',34]];

for(let i of studentsData){
  for (let j of i){
    console.log(j);
  }

}
// use the for loop
 let studentsData = [['jack',23],['ram',34]];















  








