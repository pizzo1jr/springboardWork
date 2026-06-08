/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 * Since const was already declared as 2024-03-15, it will stay as that variable. attempting to reassign, throws an error.
 */
const travelDate = "2024-03-15";
//travelDate = "2024-03-17"
console.log(travelDate); 

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 * since timeMachineModel is not set with any sort of let var or const, it shows as undefined. Once we use var, it shows normally in the next console log. 
 */
console.log(timeMachineModel); 
var timeMachineModel = "T-800";
console.log(timeMachineModel); 
