/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    return arr.map(val => val * 2);
}
console.log(doubleValues([1, 2, 3, 4]));

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    return arr.filter(val => val % 2 === 0);
}
console.log(onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8]));

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    return arr.map(str => str[0] + str[str.length -1]);
}
console.log(showFirstAndLast(['Greg', 'Tim', 'test']));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    return arr.map(obj => ({...obj, [key]: value}));
}
console.log(addKeyAndValue(
    [{name: 'Elie'}, {name: 'Time'}, {name: 'Joseph'}], 
    'title',
    'instructor' 
));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   const vowels = 'aeiou';
   // moves items to all lowercase, splits by each letter and iterates over each character
   // starting from a blank record.
   return str.toLowerCase().split('').reduce((acc, char) => {
    if (vowels.includes(char)) {
        // if a vowel, increment the count or start at 1 if it doesnt exist yet.
        acc[char] = (acc[char] || 0) + 1; 
    }
    return acc;
   }, {});
}
console.log(vowelCount('Joseph Pizzo'));
