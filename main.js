let computerOrder = []
let playerOrder = []
let round
let light = 0
let flashes

let roundNumber = document.querySelector('.roundNumber')
const green = document.querySelector('#green')
const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const blue = document.querySelector('#blue')
const startButton = document.querySelector('#start-button')

green.addEventListener('click', evt => {
	playerOrder.push(1)
	flashGreen()
	checker()
	setTimeout(resetColor, 200)
})

red.addEventListener('click', evt => {
	playerOrder.push(2)
	flashRed()
	checker()
	setTimeout(resetColor, 200)
})

yellow.addEventListener('click', evt => {
	playerOrder.push(3)
	flashYellow()
	checker()
	setTimeout(resetColor, 200)
})

blue.addEventListener('click', evt => {
	playerOrder.push(4)
	flashBlue()
	checker()
	setTimeout(resetColor, 200)
})

startButton.addEventListener('click', play)

function flashGreen() {
	green.style.backgroundColor = "green"
}

function flashRed() {
	red.style.backgroundColor = "red"
}

function flashYellow() {
	yellow.style.backgroundColor = "yellow"
}

function flashBlue() {
	blue.style.backgroundColor = "blue"
}

function resetColor() {
	green.style.backgroundColor = "darkgreen"
	red.style.backgroundColor = "darkred"
	yellow.style.backgroundColor = "#DAA520"
	blue.style.backgroundColor = "darkblue"
}

function play() {
	computerOrder = []
	playerOrder = []
	round = 1
	light = 0
	roundNumber.innerHTML = round

	for (let i = 0; i < 100; i++) {
		computerOrder.push(Math.floor(Math.random() * 4) + 1);
	}

	flashes = setInterval(computerTurn, 700)
}

function computerTurn() {
	if (light === round) {
		clearInterval(flashes)
		resetColor()
	} else {
		resetColor()
		setTimeout(() => {
		if (computerOrder[light] === 1) flashGreen()
		if (computerOrder[light] === 2) flashRed()
		if (computerOrder[light] === 3) flashYellow()
		if (computerOrder[light] === 4) flashBlue()
		light++
		}, 500)
	}
}

function checker() {
	if (playerOrder[playerOrder.length - 1] !== computerOrder[playerOrder.length-1]) {
		alert('Sorry! Try again')
	}

	if (round === playerOrder.length && playerOrder[playerOrder.length - 1] === computerOrder[playerOrder.length-1]) {
		round++
		playerOrder = []
		light = 0
		roundNumber.innerHTML = round
		flashes = setInterval(computerTurn, 700)
	}
}