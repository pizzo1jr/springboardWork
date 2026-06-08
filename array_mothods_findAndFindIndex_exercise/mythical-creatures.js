const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// Task 1 
const firstWater = mythicalCreatures.find(function(creature) {
	return creature.type === "Water";
});
console.log(firstWater.name);
// Mermaid 

// Task 2
const griffinIndex = mythicalCreatures.findIndex(function(creature) {
	return creature.name === "Griffin";
});
console.log(griffinIndex);

// Task 3 
const forest = mythicalCreatures.find(function(creature) {
	return creature.lastSeen === "Enchanted Forest";
}); 
console.log(forest); 