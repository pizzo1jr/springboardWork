/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackingSightings(...animals) {
	console.log("Today's animal sightings:"); 
	animals.forEach(animal => {
		console.log(`- ${animal}`);
	});
}

trackingSightings("Elephant", "Ant", "Bluebird"); 

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const allHabitats = [...forestHabitats, ...savannahHabitats];

console.log(allHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updateRhinoStatus = {
	...rhinoStatus, 
	population: 700, 
	habitat: "Grass"
};
console.log(updateRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
	When we do the console.log below, we can see the genetics.diversity property as "high", however the original does not have any genetics record. This means that in doing this, we are not mutating the original, but we are indeed creating a copy. 
	We can see more that the name doesn't change in lionProfile and it is still Leo, but the copy version is Simba now. 
 * TODO: Explain here.
 */
const lionProfileCopy = {
	...lionProfile, 
	genetics: {
		diversity: "high", 
		height: "tall"
	}
}; 

console.log(lionProfileCopy.genetics.diversity);
console.log(lionProfile.genetics);  

lionProfileCopy.name = "Simba"; 
console.log(lionProfile.name); 
console.log(lionProfileCopy.name); 

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * top level properties are independent. As we can see in the console logs, changing watere quality does not affect the original. but since both the origianl and the copy point to the same foodsupply object in memory, which means changing ecosystems.foodsupply.herbavores will change with the copy since they share the same reference. 
 */

const ecosystemHealthCopy = {...ecosystemHealth}; 
ecosystemHealthCopy.waterQuality = "Best"; 
ecosystemHealthCopy.foodSupply.herbivores = "Scarce";

// original 
console.log(ecosystemHealth.waterQuality); 
console.log(ecosystemHealth.foodSupply.herbivores); 

// shallow copy
console.log(ecosystemHealthCopy.waterQuality); 
console.log(ecosystemHealthCopy.foodSupply.herbivores);
