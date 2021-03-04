window.onload = function () {
	let locations = []
	let squeres = []
	let guesses = 0
	isSunk = false

	locations = generateCoordinatesForShips()
	squeres = getSqueres()
	initBoard(locations, squeres)

	for (let i = 0; i < squeres.length; i++) {
		const squere = squeres[i]
		squere.onclick = updateOnSquereClick
	}

	function generateCoordinatesForShips() {
		let arr = []
		let rNum = 0
		for (let i = 5; i > arr.length; ) {
			rNum = randomNum()
			if (arr.indexOf(rNum) === -1) {
				arr.push(rNum)
			}
		}
		return arr
	}
	function randomNum(max = 48) {
		return Math.floor(Math.random() * max)
	}
	function getSqueres() {
		if (document.getElementsByClassName("squere")) {
			return document.getElementsByClassName("squere")
		}
		return new Error("No squeres on the board!!!")
	}
	function hideShipsOnLocations(locations, squeres) {
		if (squeres && locations) {
			locations.forEach((location) => {
				squeres[location].innerHTML = "<p>Ship</p>"
			})
		}
	}
	function hideMissesOnBoard(squeres) {
		if (squeres) {
			Array.from(squeres).forEach((squere) => {
				if (squere.firstChild === null) {
					squere.innerHTML = "<p>X</p>"
				}
			})
		}
	}
	function initBoard(locations, squeres) {
		hideShipsOnLocations(locations, squeres)
		hideMissesOnBoard(squeres)
		updateShipLives()
	}
	function showClicked(elem) {
		if (elem.children[0].style.opacity !== 1) {
			elem.children[0].style.opacity = 1
		} else {
			elem.children[0].style.opacity = 0
		}
	}
	function shipSunked(elem) {
		let numDel = -1
		let squereNum = elem.id
		for (let i = 0; i < locations.length; i++) {
			const loc = locations[i]
			if (loc == squereNum) {
				numDel = i
			}
		}
		if (numDel != -1) {
			locations.splice(numDel, 1)
			updateShipLives()
		}
	}
	function updateShipLives() {
		let shipLives = document.getElementById("shipLives")
		if (locations.length) {
			shipLives.innerText = locations.length
		} else {
			shipLives.innerText = "All shipes sunked! You win the game! Congratulations!"
		}
	}
	function updateGuesses() {
		guesses++
		document.getElementById("guesses").innerText = guesses
	}
	function updateOnSquereClick() {
		showClicked(this)
		shipSunked(this)
		updateGuesses()
	}
}
