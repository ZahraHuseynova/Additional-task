console.log("1-------------");
// 1.
const array1 =[3,3,3];
const valueToFill = "a";
console.log(array1.fill(valueToFill));

console.log("2--------")
// 2. 

const array = ([1,2,3]).reduceRight(function(then,now) {
    then.push(now);
    return then;
},[]);

console.log(array);

// 3. 
console.log("3---------");



let arrayCompact = [0, 1, false, 2, undefined, '', 3, null]

let realNumbers= arrayCompact.filter(function(el){return el !=null});

console.log (realNumbers);

// for (i=0 ; i<arrayCompact.length; i++) {
//      if (typeof arrayCompact[i]==='number'){
//          console.log(arrayCompact[i]);
        
//      }
//  }





console.log("4---------");
//4.
const entries = new Map([
    ['a',1],
    ['b',2],
]);


const obj = Object.fromEntries(entries);
console.log(obj);
           

console.log("5----------");
// 5.


let without = [1, 2, 3, 1, 2];

for (i=0; i<without.length; i++){
    if(without[i]===1,2) {
        without.splice(i, 2);
    }
}
console.log (without);



console.log("6----------");
//6.

let freeArray =[1,2,3,1,3];
function removeDuplicate(data) {
    return data.filter((value,index)=> data.indexOf (value)===index);

}
console.log(removeDuplicate(freeArray));

console.log("7-----------");
// 7. 
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 5];
let arr4 = [1, 2, 3, 4, 5];


let result =
  arr1.length === arr2.length &&
  arr1.every(function (element) {
    return arr2.indexOf(element) !== -1;
  });

  console.log(result);

let result1 =
arr1.length === arr3.length &&
arr1.every(function (element) {
    return arr3.indexOf(element) !== -1;
  });

  console.log(result1);
  
let result2 =
  arr1.length === arr4.length &&
  arr1.every(function (element) {
      return arr4.indexOf(element) !== -1;
    });
  
console.log(result2);

console.log("8----------");

//8.

let oldArray = [1, 2, [3, 4, [5]]];
let newArray = Array.prototype.concat.apply([], oldArray);
let newArray2 = Array.prototype.concat.apply([],newArray);
console.log(newArray2); // [ 1, 2, 3, 4,5]

console.log("9----------");
// 9.
const arrays = [1, 2, 3, 4, 5, 6, 7];
function sliceIntoChunks(arrays, chunkSize) {
    const res = [];
    for (let i = 0; i < arrays.length; i += chunkSize) {
        const chunk = arrays.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
console.log(sliceIntoChunks(arrays, 2));
console.log(sliceIntoChunks(arrays, 3));

console.log("10----------");
// 10. 
const arrA = [1, 2];
const arrB = [2, 3];
const arrC = ["a", "b"];
const arrD = ["b", "c"];
const arrI = ["b", "e", "c"];
const arrF = ["b", "b", "e"];
const arrG = ["b", "c", "e"];
const arrH = ["b", "e", "c"];


let intersection = arrA.filter(x => arrB.includes(x));
console.log(intersection);

let intersection1 = arrC.filter(x => arrD.includes(x) && arrI.includes(x));
console.log(intersection1);

let intersection2 = arrF.filter(x => arrG.includes(x) && arrH.includes(x));
console.log(intersection2);


