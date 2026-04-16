// You are given a string "word" consisting of alphabetical characters
// For each unique letter in the word:
    // Return the lower case letter followed by the number of times it occurs in the word
    // Print Error if unexpected happens and stop the execution
// Write a function letterOccurrence using JS that solves the above problem

// BREAK IT DOWN
    // if worde is not a string of alphabetical characters:
        // Print Error and stop
    // For each letter in word:
        // If dictionalry already has the letter:
            // increment the count of the letter by 1
            // else
            // set the count of the letter to 1
        // return the dictionary that holds the letter count

function letterCount(word) 
{
    // fully describe what the alphabet should be
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // if word is not fully a type of string, automatically error
    if (typeof word !== "string")
    {
        console.error("Error");
        // End if 
        return;
    }
    // If a letter is a string but is not included in alphabet, Error
    for (const letter of word)
    {
        if (!alphabet.includes(letter.toLowerCase()))
        {
            console.error("Error");
            return;
        }
    }
        // set letterCount to a blank record
        let letterCounts = {};

    for (let letter of word)
    {
        let lowerCaseLetter = letter.toLowerCase();

        // If the letter is already in the dictionary, increment its count
        if (letterCounts[lowerCaseLetter] !== undefined)
        {
            letterCounts[lowerCaseLetter] ++;
        }
        // If letter is not in dictionary already, make that number 1
        else
        {
            letterCounts[lowerCaseLetter] = 1; 
        }
    }
    return letterCounts;
}

letterCount("Caesar52");
console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));