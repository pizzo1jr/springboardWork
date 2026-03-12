const emblemClue1 = "Eagle"; 
const emblemClue2 = "Laurel"; 
const emblemClue3 = 7; 

// Step 1: 
let locationStart = ''; 

if(emblemClue1 === "Eagle"){
    locationStart = "Forum";
} 
else if(emblemClue1 === "Lion"){
    locationStart = "Colosseum ";
}
else {
    locationStart = "Villa ";
}

// Step 2: 
if(emblemClue2 === "Laurel" && locationStart === "Forum"){
    locationStart += " of Augustus";
}
else if(emblemClue2 === "Grapes" || locationStart === "Villa") {
    locationStart += " of Pompey";
}
console.log(locationStart);

// Step 3: 
switch(emblemClue3) {
    case  7: 
        locationStart += " North";
        break;
    case 3:
        locationStart += " South"; 
        break;
    case 9:
        locationStart += " East"; 
        break;
    case 4:
        locationStart += " West"
}; 

// Question: 
// Why is it important to be careful when using == instead of === in conditionals? 
// because == is not strict, so things can be accidentilly true or false if they were not intended such as 7 == '7' would be true, whereas 7 === '7' is false since they do not strictly match as one is a number and one is a string. 