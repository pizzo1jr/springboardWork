/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name ="Alice";
const age=25; 
const studyField = "Computer Science"; 

const participant = {
    name, 
    age, 
    studyField
};

console.log(participant); 
/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participant2 = {
    ...participant, 
    displayInfo() 
    {
        console.log(`name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`)
    }
}
participant2.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participant3 = {
    ...participant, 
    displayInfo: () => {
        {
            console.log(`name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`)
        }
    }
};

participant3.displayInfo();
/*
 * Observations:
These show up as undefined, arrow functions appear to not have their own "this" context. Task 2 only works because of how it is called.
 * TODO: Explain here.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(obj, property, val ) {
    return {...obj, [property]: val}; 
}; 

const updatedParticipant = updateParticipantInfo(participant, "age", 26);
console.log(updatedParticipant); 