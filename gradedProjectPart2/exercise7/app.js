const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Cypher items
let encryptedName = "";

for (let i = 0; i < friend.length; i++)
{
    const currentLetter = friend[i]; 
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length;
    encryptedName += alphabet[newIndex].toUpperCase();
    
};

console.log(encryptedName); 

// De-Cypher items

let decryptedName = ""; 

for (let j = 0; j < encryptedName.length; j++)
{
    const currentLetter1 = encryptedName[j]; 
    const currentIndex1 = alphabet.indexOf(currentLetter1.toLowerCase()); 
    let newIndex1 = (currentIndex1 - shiftValue) % alphabet.length;
    // fix negative number 
    if (newIndex1 < 0) {
        newIndex1 += alphabet.length;
    }
    // Add all inidivudal letters together
    decryptedName += alphabet[newIndex1].toLocaleUpperCase();
};



console.log(decryptedName);

// Question 1: The way the loop works is it goes through each letter in the frined variable very quicly and automatically does the cypher instead of going through each letter manually by hand which would take a large amount of time.

// Question 2:  Once we get to a certain point where we would be past the number, we can then 
