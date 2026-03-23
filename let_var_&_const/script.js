// console.log(a);
// console.log(this.a);
// console.log(window.a);

// const a = 15;

// console.log(a);
// console.log(this.a);
// console.log(window.a);

// So we can see we have a error

// console.log(b);
// console.log(this.b);
// console.log(window.b);

// let b = 10;

// console.log(b);
// console.log(this.b);
// console.log(window.b);

// Same constrain lies in the code above because er used let

// console.log(c);
// console.log(this.c);
// console.log(window.c);

// var c = 69;


// console.log(c);
// console.log(this.c);
// console.log(window.c);

// but with var we don't have to face such constaints if the variable is not declared it shows the value undefiend without throwing an error..

// console.log(a); 
// console.log(b);
// console.log(c);

// a and b will get reference error because of temporal dead zone ...

// let a = 12;
// const b = 10;
// var c = 16;
// {
// let a = 12;
// const b = 10;
// var c = 16;}

// console.log(a);
// console.log(b);
// console.log (c);

// so in the block we can observe that when we are trying to fetch a from the block 
// it gives a reference error and the same is happening with b because they both are already block scoped */


// {
// let a = 12;
// const b = 10;
// var c = 16;

// console.log(a);
// console.log(b);
// console.log (c)
// }


// Here because console.log is inside the block that' why it can read let and const and not trowing any reference error 


//Lexical Scope

function hello(){
    
    console.log(x);
}

let x = 100;
hello();

