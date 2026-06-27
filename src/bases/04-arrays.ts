
const myArray: (number | string)[] = [1,2,3,4,5,6,7,8,9,10];

const myArray2 = structuredClone(myArray);

myArray2.push(5);
myArray2.push('Hello World');

console.log(myArray,myArray2);