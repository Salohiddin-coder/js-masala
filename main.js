//----------------------------------- 1-MASALA --------------------------------
// Create a function that takes two numbers as arguments and returns their sum.
function addition(a, b) {
	return a + b;
}


//----------------------------------- 2-MASALA --------------------------------
// Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
	return minutes * 60;
}


//----------------------------------- 3-MASALA --------------------------------
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition2(num) {
	return num + 1;
}


//----------------------------------- 4-MASALA --------------------------------
// Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
	return (base * height) / 2;
}


//----------------------------------- 5-MASALA --------------------------------
// Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
	return age * 365;
}


//----------------------------------- 6-MASALA --------------------------------
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
	return x % y;
}


//----------------------------------- 7-MASALA --------------------------------
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
function footballPoints(wins, draws, losses) {
	return (wins * 3) + draws + (losses * 0);
}


//----------------------------------- 8-MASALA --------------------------------
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers) {
	return (twoPointers * 2) + (threePointers * 3);
}


//----------------------------------- 9-MASALA --------------------------------
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
	if ((a+b) < 100) {
		return true;
	} else {
		return false;
	}
}


//----------------------------------- 10-MASALA --------------------------------
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
}