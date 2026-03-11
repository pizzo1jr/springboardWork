const friend = "BRUTUS"; 
const shiftValue = 3;

// Question 1:
// Step 1: 
const latinAlphabet = "abcdefghijklmnopqrstuvwxyz"; 

// Step 2: 
let firstIndexName = friend[0];
console.log(firstIndexName); // B
// the B is still uppercase and does not match our latinAlphabet variable
let index = latinAlphabet.indexOf(firstIndexName.toLowerCase()); 
console.log(index);

// Step 3: 
let newIndex = index + shiftValue; 
firstIndexName = latinAlphabet[newIndex];
console.log(newIndex, firstIndexName); // e
// can go one step further and put inot uppercase E
firstIndexName = latinAlphabet[newIndex].toUpperCase(); 
console.log(firstIndexName); // E 

// Question 2: 
// Step 4 
// alphabet Kength 
let alphabetLength = latinAlphabet.length; 
console.log(alphabetLength);

// Step 5: 
let newerIndex = (index + shiftValue) % alphabetLength;
console.log(newerIndex);
let encryptedFirstLetter = latinAlphabet[newerIndex].toUpperCase(); 
console.log(encryptedFirstLetter);

//STEP 6: 
let encryptedMessage = "EUXWXV"; 
let teaserMessage = encryptedMessage.slice(0, 3); 
console.log(teaserMessage); 
