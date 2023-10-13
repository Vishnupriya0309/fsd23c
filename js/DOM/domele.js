// get the parent :
// let element = document.querySelector('.me');
// console.log(element.parentNode);


// get child elements
let ele2 = document.querySelector('#fam');
console.log(ele2.firstElementChild);
console.log(ele2.lastElementChild);
console.log(ele2.children);

// get nextsiblings
// let e3 = document.querySelector('.me'); 
// let nextSibling = e3.nextElementSibling;
// console.log(nextSibling);

// while(nextSibling){
//   console.log(nextSibling);
//   nextSibling = nextSibling.nextElementSibling;
// }

// // get previous
// let preEle = document.querySelector(".me");
// let findPre = preEle.previousElementSibling;
// console.log(findPre);
// while (findPre)
// {
//   console.log(findPre);
//   findPre = findPre.previousElementSibling
// }

// get all sibilings of an element

let getSiblings = function (ele){
  let siblings = [];
  if (!ele.parentNode) {
    return siblings;    
  }
  let sibling =ele.parentNode.firstElementChild;
  while(sibling){
    if (sibling.noteType === 1 && sibling !== ele){
      sibling.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return siblings;

}
let siblings = getSiblings(document.querySelector('.me'));
console.log(siblings)




