const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step 1: 
guests.unshift("BRUTUS"); 
console.log(guests);
// guests = [ 'BRUTUS', 'ANTONY', 'CICERO', 'CASSIUS', 'CLEOPATRA' ];

// Question 1: 
// How can you verify that "BRUTUS was added to the beginning  of the array?"
console.log(guests[0]);
// BRUTUS

// STEP 2: 
// Add names to the end of the guest list. 
guests.push("AUGUSTUS", "LUCIA"); 
console.log(guests);
// [
//  'BRUTUS',
//  'ANTONY',
//  'CICERO',
//  'CASSIUS',
//  'CLEOPATRA',
//  'AUGUSTUS',
//  'LUCIA'
//]

// STEP 3: 
const spartacusIndex = guests.indexOf("SPARTACUS"); 
console.log(spartacusIndex);
// SPARTACUS IS NOT ON THE LIST 

// QUESTION 2: 
// The value of SPARTACUS not being on the list would be -1 

// STEP 4; 
let indexToRemove = guests.indexOf("CASSIUS"); 
guests.splice(indexToRemove, 1); 
console.log(guests);

// STEP 5: 
let specialGuests = guests.slice(0, 3); 
console.log(specialGuests);