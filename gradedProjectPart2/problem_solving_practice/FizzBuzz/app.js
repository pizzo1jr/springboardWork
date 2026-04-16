// You are given a positive intenger number (n), where it is sell than 100 (100 included)
// For every number up to and including n.
    // Print Fizz if the number is divisible by 3.
    // Print Buzz if the number is divisible by 5. 
    // Pring FizzBuzz if the number is divisible by 3 and 5.
    // Print Error if unexpected happens and stop the execution

// BREAK IT DOWN
// function FizzBuzz takes a number n
// for each integer from i to n
    // if number is divible by 3, state Fizz.
    // if number is divisible by 5, state Buzz.
    // if number is divisible by 3 and 5, state FizzBuzz (combine it).
    // if number is not divisible by 3 or 5, state the number.

function FizzBuzz(n) {
    if(!Number.isInteger(n) || n < 1 || n >= 100)
    {
        console.log("Error");
        return;
    }

    for (let i = 1; i <= n; i++)
    {
        const divisibleBy3 = i % 3;
        const divisibleBy5 = i % 5; 

        // If n is divisible by both 3 and 5
        if (divisibleBy3 === 0 && divisibleBy5 === 0 )
        {
            console.log("FizzBuzz");
        }
        // if the number is only divisible by 3
        else if (divisibleBy3 === 0) {
            console.log("Fizz");
        }
        // if the number is only divisible by 5
        else if (divisibleBy5 === 0 ) {
            console.log("Buzz")
        }
        // If the number is not divisible by 3 or 5
        else 
        {
            console.log(i)
        }
    }
}

FizzBuzz(0); 
FizzBuzz(100);
FizzBuzz(16);
