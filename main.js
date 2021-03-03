window.onload = function () {
	var locations = []
	var squeres = []
	var guesses = 0
	isSunk = false

	locations = hideShips()

	locations.forEach((location) => {
		console.log(location)
	})

	squeres = document.getElementsByClassName("squere")

	locations.forEach((location) => {
		squeres[location].innerHTML = "<p>Ship</p>"
	})

	if (squeres) {
		Array.from(squeres).forEach((squere) => {
			if (squere.firstChild === null) {
				squere.innerHTML = "<p>X</p>"
			}
		})
	}
	updateShipLives()
	for (let i = 0; i < squeres.length; i++) {
		const squere = squeres[i]
		squere.onclick = showClicked
	}

	function shipSunked() {
		let numDel = -1
		let squereNum = this.id
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
		updateGuesses()
	}

	function updateShipLives() {
		let shipLives = document.getElementById("shipLives")
		if (locations.length) {
			shipLives.innerText = locations.length
		} else {
			shipLives.innerText = "All shipes sunked! You win the game! Congratulations!"
		}
	}

	function showClicked() {
		if (this.children[0].style.opacity !== 1) {
			this.children[0].style.opacity = 1
		} else {
			this.children[0].style.opacity = 0
		}
		shipSunked()
	}

	function updateGuesses() {
		guesses++
		document.getElementById("guesses").innerText = guesses
	}

	function hideShips() {
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
}
