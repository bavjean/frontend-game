let computerOrder = []
let playerOrder = []
let round
let light = 0
let computerFlashes

let roundNumber = document.querySelector('.roundNumber')
const green = document.querySelector('#green')
const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const blue = document.querySelector('#blue')
const startButton = document.querySelector('#start-button')

green.addEventListener('click', evt => {
	playerOrder.push(1)
	checker()
	flashGreen()
	setTimeout(resetColor, 200)
})

red.addEventListener('click', evt => {
	playerOrder.push(2)
	checker()
	flashRed()
	setTimeout(resetColor, 200)
})

yellow.addEventListener('click', evt => {
	playerOrder.push(3)
	checker()
	flashYellow()
	setTimeout(resetColor, 200)
})

blue.addEventListener('click', evt => {
	playerOrder.push(4)
	checker()
	flashBlue()
	setTimeout(resetColor, 200)
})

startButton.addEventListener('click', play)

function flashGreen() {
	let beep = document.querySelector('#green-beep')
	green.style.backgroundColor = '#00b200'
	beep.play()
}

function flashRed() {
	let beep = document.querySelector('#red-beep')
	red.style.backgroundColor = "red"
	beep.play()
}

function flashYellow() {
	let beep = document.querySelector('#yellow-beep')
	yellow.style.backgroundColor = "yellow"
	beep.play()
}

function flashBlue() {
	let beep = document.querySelector('#blue-beep')
	blue.style.backgroundColor = "blue"
	beep.play()
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
	i = 0
	roundNumber.innerHTML = round

	for (let i = 0; i < 100; i++) {
		computerOrder.push(Math.floor(Math.random() * 4) + 1);
	}

	computerFlashes = setInterval(computerTurn, 700)
}

function computerTurn() {
	if (i === round) {
		clearInterval(computerFlashes)
		resetColor()
	} else {
		resetColor()
		setTimeout(() => {
		if (computerOrder[i] === 1) flashGreen()
		if (computerOrder[i] === 2) flashRed()
		if (computerOrder[i] === 3) flashYellow()
		if (computerOrder[i] === 4) flashBlue()
		i++
		}, 600)
	}
}

function checker() {
	if (playerOrder[playerOrder.length - 1] !== computerOrder[playerOrder.length-1]) {
		alert(`You made it to round ${round}! Start a new game to try again`)
		playerOrder = []
		computerOrder = []
	}

	if (round === playerOrder.length && playerOrder[playerOrder.length - 1] === computerOrder[playerOrder.length-1]) {
		round++
		playerOrder = []
		i = 0
		roundNumber.innerHTML = round
		computerFlashes = setInterval(computerTurn, 700)
	}
}