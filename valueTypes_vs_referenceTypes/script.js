//Value Data Types vs Reference Data Types
// Code below is an example of value type
let x = 'Ayush';
let y = x;

x = "Aditya";


console.log(y);
console.log(x);
/* Let me explain what's actually happening here
We've declared a variable x we gave it a string. 
After that we declared another variable y and said y = x, because of this the string declared in x has been updated as the value of y  

*/

//Code below is an example of Reference type
let p ={
    name: 'Rahul',
    occupation: 'Software Developer',
    age: 25, 
}
let q = p;

p.name ="Ayush";

console.log(p);
console.log(q);