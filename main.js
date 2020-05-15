let computerOrder = []
let playerOrder = []
let round = 0
let i = 0
let computerFlashes

let roundNumber = document.querySelector('.roundNumber')
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const startButton = document.querySelector('#start-button')

// Each click will add to player choice array, flash the color, 
// and compare it with the computers order
green.addEventListener('click', evt => {
	playerOrder.push(1)
	checker()
	flashGreen()
})

red.addEventListener('click', evt => {
	playerOrder.push(2)
	checker()
	flashRed()
})

yellow.addEventListener('click', evt => {
	playerOrder.push(3)
	checker()
	flashYellow()
})

blue.addEventListener('click', evt => {
	playerOrder.push(4)
	checker()
	flashBlue()
})

startButton.addEventListener('click', play)

// Flash colors and play sounds
function flashGreen() {
	let beep = document.querySelector('#green-beep')
	green.style.backgroundColor = '#00b200'
	setTimeout(()=>{green.style.backgroundColor = "darkgreen"}, 200)
	beep.play()
}

function flashRed() {
	let beep = document.querySelector('#red-beep')
	red.style.backgroundColor = "red"
	setTimeout(()=>{red.style.backgroundColor = "darkred"}, 200)
	beep.play()
}

function flashYellow() {
	let beep = document.querySelector('#yellow-beep')
	beep.play()
	yellow.style.backgroundColor = "yellow"
	setTimeout(()=>{yellow.style.backgroundColor = "#DAA520"}, 200)
}

function flashBlue() {
	let beep = document.querySelector('#blue-beep')
	beep.play()
	blue.style.backgroundColor = "blue"
	setTimeout(()=>{blue.style.backgroundColor = "darkblue"}, 200)
}
// Trying to incorporate all flashes into single event
function flash(evt) {
	let beep = document.querySelector(`#${evt.target.className}-beep`)
	evt.target.classList.add(`highlight${evt.target.className}`)
	setTimeout(() => {evt.target.classList.remove(`${evt.target.classList[1]}`)}, 200)
	beep.play()
}

// function resetColor() {
// 	green.style.backgroundColor = "darkgreen"
// 	red.style.backgroundColor = "darkred"
// 	yellow.style.backgroundColor = "#DAA520"
// 	blue.style.backgroundColor = "darkblue"
// }

// Starts game logic, fills computer choices
function play() {
	computerOrder = []
	playerOrder = []
	round = 1
	i = 0
	roundNumber.innerHTML = round

	for (let j = 0; j < 100; j++) {
		computerOrder.push(Math.floor(Math.random() * 4) + 1);
	}
// Starts flashing for computers turn
	computerFlashes = setInterval(computerTurn, 700)
}

// Will flash colors that need to be repeated, # of flashes will equal the current round
function computerTurn() {
	if (i === round) {
		clearInterval(computerFlashes)
	} else {
		setTimeout(() => {
		if (computerOrder[i] === 1) flashGreen()
		if (computerOrder[i] === 2) flashRed()
		if (computerOrder[i] === 3) flashYellow()
		if (computerOrder[i] === 4) flashBlue()
		i++
		}, 600)
	}
}

// Compares each click with equivalent index of computers choice, once all selections
// have been made it will restart computers turn
function checker() {
	if (playerOrder[playerOrder.length - 1] !== computerOrder[playerOrder.length-1]) {
		alert(`You made it to round ${round}! Start a new game to try again`)
		playerOrder = []
		computerOrder = []
	}
	// Updates round counter, and sends back into computers turn to show order again
	if (round === playerOrder.length && playerOrder[playerOrder.length - 1] === computerOrder[playerOrder.length-1]) {
		round++
		playerOrder = []
		i = 0
		roundNumber.innerHTML = round
		computerFlashes = setInterval(computerTurn, 700)
	}
}