const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

// STEP 1: 
guests.BRUTUS = {
    title: 'Senator', 
    region: 'Rome',
    dietaryPreference: 'Vegan',  
    pastGifts: ['Silver Dagger', 'Marble Bust']
};
console.log(guests); 

// STEP 2: 
guests.CICERO.pastGifts.push('Golden Lyre'); 
console.log(guests.CICERO);

// STEP 3 
console.log(guests.ANTONY.region);

// STEP 4: 
delete guests.CICERO; 
console.log(guests); 

// STEP 5: 
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt"; 
console.log(generalProfile); 

// Question 1: 
// it will be Egypt since the objects are reference types and it will then update the object and not create a new copy of it. 