// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
const oneTimeTasks = [];
let monitoringTaskID = null;
// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	oneTimeTasks.push({
		func: func, 
		delay: delay
	})
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	oneTimeTasks.forEach(function(task) {
		setTimeout(task.func, task.delay);
	});
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	monitoringTaskID = setInterval(function() {
		console.log("Monitoring systems... All systems normal...");
	}, 2000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(monitoringTaskID);
	console.log("Monitoring stopped...");
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	let timeRemaining = duration; 

	let countdownId = setInterval(function() {
		if (timeRemaining > 0) {
			console.log("T-minus " + timeRemaining + " seconds...");
			timeRemaining--; 
		} else {
			console.log("LiftOff!");
			clearInterval(countdownId);
		}
	}, 1000); 
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	// add pre launch tasks as needed
	addOneTimeTask(function() {
		console.log("System check is complete. All systems go.");
	}, 2000);

	addOneTimeTask(function() {
		startMonitoring();
	}, 3000); 

	addOneTimeTask(function() {
		stopMonitoring();
	}, 9000);

	addOneTimeTask(function() {
		startCountdown(10);
	}, 10000);

	runOneTimeTasks();

	console.log("Scheduled, please stand by...")
}

scheduleMission(); // Starts the mission.
