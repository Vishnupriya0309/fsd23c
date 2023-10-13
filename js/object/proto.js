// getter method

  const student = {
  // data property
  firstName  :'vishnupriya',
  // accessor property (getter)
  get getName(){
    return this.firstName;
  }
};

// accessing data property
console.log(student.firstName);

// accessing getter methods
console.log(student.getName);

// trying to access as a method
console.log(student.getName()) //error

/* setter
 in js setter method are used to change the values of an object*/

//  javascript.info - website

/*objects
object methdos
computer properties
for in loop
Reference
assgin
merging
real copy 
shadow copy
despec clone
structure clone
nested clone
object.assgin
spread syntax*/


let f = prompt('which fruit to buy', 'apple');
let bag = {[f]:5,};
console.log(bag.apple);



