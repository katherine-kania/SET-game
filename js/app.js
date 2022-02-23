const rulesButton = document.querySelector('#rulesButton')
const startButton = document.querySelector('#startButton')
const rulesSpace = document.querySelector('#rulesSpace')
const introContainer = document.querySelector('#introContainer')
const senTitle = document.querySelector('#senTitle')
const cardSpace = document.querySelector('#cardSpace')
const playerA = document.querySelector('#playerAname')
const playerB = document.querySelector('#playerBname')

document.addEventListener('DOMContentLoaded', () => {

    // when rules button is clicked, popover appears with rules
    rulesButton.addEventListener('click', (event) => {
        event.preventDefault()
        introContainer.style['display'] = 'none'
        introContainer.style['display'] = 'none'
        rulesSpace.style['display'] = 'block'
        rulesSpace.src = 'img/rules-01.png'

        const returnButton = document.createElement('button')
        returnButton.innerHTML = 'I\'m in!'
        returnButton.id = 'returnButton'
        document.body.appendChild(returnButton)

        returnButton.addEventListener('click', () => {
            returnButton.style['display'] = 'none'
            introContainer.style['display'] = 'block'
            introContainer.style['display'] = 'block'
            rulesSpace.style['display'] = 'none'
        })
    })

    // click start button and game appears
    startButton.addEventListener('click', (event) => {
        event.preventDefault()
        introContainer.style['display'] = 'none'
        senTitle.innerHTML = 'SEN'
        playerA.innerHTML = 'Player'

        // create 12 divs with a class
        for (let i = 0; i < 12; i++){
            const cardDiv = document.createElement('div')
            cardDiv.className = 'carDiv'
            cardDiv.textContent = "x"
            cardSpace.appendChild(cardDiv)
            // console.log('these are the cards', cardDiv)


        }
        
        // heading title and player names w/ score apear
       

        // restart button created
        const restartButton = document.createElement('button')
        restartButton.innerHTML = 'restart'
        restartButton.id = 'restartButton'
        document.body.appendChild(restartButton)

        // restartButton.addEventListener('click', (event) => {
        //     restartButton.style['display'] = 'none'
        //     introContainer.style['display'] = 'block'
        //     gettingStarted.style['display'] = 'block'
        //     cardSpace.style['display'] = 'none'
        // })
    })

})


// Set the card values
const LETTERS = ['S', 'E', 'N']
const COLORS = ['pink', 'green', 'blue']
const NUMBERS = ['1', '2', '3']

// loop through arrays
const cardValues = () => {
    let roundWon = false 
    for (let i = 0; i < 3; i++){
        const letter = LETTERS[i]
        const color = COLORS[i]
        const number = NUMBERS[i]
       
        // if (letter === letter || color === color || number === number){
        //     roundWon = true
        // } if {
        //     (letter !== letter && color !== color && number !== number)
        //     roundWon = true
        // } else {
        //     isRoundActive = false 
        //     return
        // }
    }
    
    // if (roundWon) {
    //     displayResult(currentPlayer === 'A' ? playerAWon : playerBWon)
    //     isGameActive = false 
    //     return
}

// each card values
// let senCard = {
//     LETTERS: ''
//     COLORS: ''
//     NUMBERS: ''
// }

// // identify the current player
// let currentPlayer = "A"

// //identify game activity
// let isGameActive = true


// identify the Deck with cards

// winning cards

//display the results
