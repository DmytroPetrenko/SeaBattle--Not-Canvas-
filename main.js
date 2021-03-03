var location1 = randomNum()
var location2 = 1 + location1
var location3 = 1 + location2
var guess = null
var hits = 0
var guesses = 0
isSunk = false

console.log(location1)
console.log(location2)
console.log(location3)

while (!isSunk) {
	guess = prompt("Input num from 0 to 6")
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell num")
	} else {
		guesses++
	}
	if (guess == location1 || guess == location2 || guess == location3) {
		hits++
		alert("Hitt!")
		if (hits === 3) {
			isSunk = true
			alert("You sank my ship")
		}
	} else {
		alert("Miss!")
	}
}

function randomNum(max = 5) {
	return Math.floor(Math.random() * max)
}
