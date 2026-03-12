// Step 1: 
// Generate a decimal number between 0 (inclusinve) and 1 (exclusive) using Math functions. 
const random = Math.random(); 
console.log(random);
// number will always be random but 0.3394952254633321

// Step 2: 
// Determine the desired range of numbers for the secret shift value between 3 and 33. 
const range = 33 - 3 + 1;
// 31 because we want to find the total amount of numbers between 33 and 3 and then ensure we are allowing for 33 and 3 to be selected

// Question 1:
// Why do we add 1 to the difference of 33 and 3? 
// We want ti ensure that both ends of our range (3 and 33) are options to be selected.

// Step 3: 
// using the random decimal generated, adjust the value to fit within the desired range
const randomNumber = random * range; 
console.log(randomNumber); 
// 9.986325265626515

// Question 2: 
// How does multiplying random by range help us get a number within our desired range. 
// by multiplying by the range, we will get a number that is within our desired set of numbers that will not go past the max of 33.

// Step 4: 
// Round down the decimal number to get a whole number
const rounded = Math.floor(randomNumber); 
console.log(randomNumber);
// 22.386046794636872
// this will take our decimal and round it down as needed

// Question 3: 
// Why do we use the Math.floor() function instead of other methods such as math.round(? 
// Math.round() leaves the possibility for the number to exceed our desired max due to rounding up. 

// Step 5: 
// Adjust the integer obtained in Step 4 to fit within the range of 3 to 33. 
const shiftValue = rounded + 3; 

// Question 4: How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33? 
// rounded is a number between 0 and the range -1 which would be 30 here, adding 3 shifts the range up resulting in a number between 3 and 33. 