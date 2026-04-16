// Graded Project Part 2 Excersise 8 - Caesar's Cipher Reloaded

const friend = "BRUTUS";
const shiftVale = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


// ENCRYPT THE MESSAGE
function encryptLetter (letter, shift)
{
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shift) % alphabet.length;
    return alphabet[newIndex];
    //console.log(newIndex);
}

// this function iterates over word
function encryptMessage (word, shift)
{
    // set encryptedMessege variable to blank
    let encryptedMessage = "";
    for (let i = 0; i < word.length; i++)
    {
        // send over i to encryptLetter function to do the work of shifting
        encryptedMessage += encryptLetter(word[i], shift);
    }
    return encryptedMessage;
}

console.log(encryptMessage ("Joseph", 3));

// DECRYPT THE INFO
function decryptLetter (letter, shift) 
{
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shift + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
}

function decryptMessage (word, shift) 
{
    let decrytedMessage = "";
    for (let i = 0; i < word.length; i++)
    {
        decrytedMessage += decryptLetter(word[i], shift);
    }
    return decrytedMessage;
}

console.log(decryptMessage ("mrvhsk", 3));
