// Rewrite the following code using let and const to fix the scoping bug where i leaks out of the loop .
// for (var i = 0; i < 5; i++)
// console.log(i); Should be ReferenceError


// Declare a const object named settings with a property theme: "dark". Write code to change theme to "light". Does it work? Explain why?


// What will console.log(x) print in the following code?
// console.log(x);
// var x = 10;


// Write a code snippet that triggers a ReferenceError by trying to access a let variable inside its Temporal Dead Zone (TDZ) .


// Create a variable score using let and initialize it to 0. Update it to 10, then try to redeclare it (let score = 20). What happens?


// Create an if block. Inside, declare a variable secret using const. Try to log secret outside the block. What happens?


// Declare let x = 10 in the global scope. Inside a function, declare let x = 20. Log x inside the function and outside. What are the values?


// Write a line of code that attempts to reassign a const variable PI and catch the error.


// Declare a const variable without assigning a value (e.g., const name;). What error does the console show?


// You find code using var that returns undefined instead of crashing when accessed early. Fix it to crash (fail fast) using let .