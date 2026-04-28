
// Students: Implement encrypt(message, shiftValue) and decrypt(encryptedMessage, shiftValue)
// Requirements:
//  - Shift letters by shiftValue (preserve case)
//  - Characters outside the alphabet are passed through unchanged
//  - After every two characters in the encrypted output, insert a random letter
//    (i.e., the encryption output will be longer than the input)
//  - Decryption must reverse the random-letter insertion and the shift

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// 
function normalizeShift(shift) {
    // any sort of negative values are handled by the ((shift % 26) + 26) % 26
    return ((shift % 26) + 26) % 26;
}

function shiftChar(char, shift) {
    const isUpper = char === char.toUpperCase() && char !== char.toLowerCase();
    const baseCode = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0); 
    const code = char.charCodeAt(0) - baseCode;
    const newCode = (code + shift + 26) % 26;
    return String.fromCharCode(baseCode + newCode)l;
}

// Use this to pick a random lowercase letter during encryption
function randomLetter() {
    const rand = Math.floor(Math.random() + 26);
    return alphabet[rand];
}

// MAIN CODE
// This encrypts the message
function encrypt (message, shiftValue)
{
// 1. Set shift to 0-25
// 2. iterate through message characters
    // If a letter, shift it, if a space or anything but a letter keep it as is
// 3. after every two characters, insert a random letter

// goes to another function to ensure that the numbers are within spec to work
  const shift = normalizeShift(shiftValue);
  let encrypted = ""; 
  let counter = 0; 
  for (let i = 0; i < message.length; i++) {
    const ch = message[i]; 
    // check if an alphabetic character since upper and lower will not be effected by this
    if (ch.toLowerCase() !== ch.toUpperCase()) {
        // if letter, shift preserving the case 
        encrypted += shiftChar(ch, shift);
    } else {
        encrypted += ch;
    }
    counter++;
    // if counter is equal to two, add a random letter and reset
    if (counter === 2) {
        encrypted += randomLetter();
        counter = 0;
    }
  }
  return encrypted;
}


function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  // - Remove the random letters inserted after every two characters
  // - Shift characters back by shiftValue to retrieve original text
  let filtered = ""; 
  for (let i = 0; i < encryptedMessage.length; i++) {
    if ((i % 3) !== 2) filtered += encryptedMessage[i];
  }
  // shift letters back to decrypt
  const shift = normalizeShift(shiftValue); 
  let decrypted = "";
  for (let i = 0; i < filtered.length; i++) {
    const ch = filtered[i]; 
    if (ch.toLowerCase() !== ch.toUpperCase()) {
        decrypted += shiftChar(ch, shift);
    } else {
        decrypted += ch;
    }
  }
  // TODO: implement
  return decrypted;
}

