console.log("There are 3 types of refernce data types");
console.log("Object, Arrays, Functions");
// What are Objects and why do we need them?


//This is a example of an object
let student1 = {
  name:"Ayush",
  course:"B.Tech CSE (Software Engineering)",
  sem:"3rd",
  year:"2nd",
}

//An object helps us to store multiple data like above one in one storing it in one single variable 

console.log(student1);
console.log(typeof(student1));

/*But what if onle want to access only name of the student 
*/

//DOT notations 
console.log(student1.name);
console.log(student1.sem);

// Another notation is "Bracket ['_'] notaion"
console.log("This is an example of bracket notation for calling an item from an object ")
console.log(student1['sem']);
console.log(typeof(student1['sem']));


