const rulesButton = document.querySelector('#rulesButton')
const startButton = document.querySelector('#startButton')
const rulesSpace = document.querySelector('#rulesSpace')
const introContainer = document.querySelector('#introContainer')
const cardSpace = document.querySelector('#cardSpace')
const playerA = document.querySelector('#playerAname')
const playerB = document.querySelector('#playerBname')

document.addEventListener('DOMContentLoaded', () => {

    // when rules button is clicked, popover appears with rules
    rulesButton.addEventListener('click', (event) => {
        event.preventDefault()
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
            rulesSpace.style['display'] = 'none'
        })
    })

    // click start button and game appears
    startButton.addEventListener('click', (event) => {
        event.preventDefault()
        introContainer.style['display'] = 'none'

        // create 12 divs with a class
        for (let i = 0; i < 12; i++){
            const cardDiv = document.createElement('div')
            cardDiv.className = 'carDiv'
            cardDiv.textContent = "x"
            cardSpace.appendChild(cardDiv)
            // console.log('these are the cards', cardDiv)

        }



    })

})


// Set the card values
const LETTERS = ['S', 'E', 'N']
const COLORS = ['pink', 'green', 'blue']
const NUMBERS = ['1', '2', '3']

// identify the current player
let currentPlayer = "A"


// identify the Deck with cards
class senDeck {
    constructor(cards) {
        this.cards = cards
    }
}

// identify the card values
class senCard {
    constructor(letter, color, number) {
        this.letter = letter
        this.color = color
        this.number = number 
    }
}

// return the deck
function freshDeck() {
    return LETTERS.flatMap(letter => {
        return COLORS.map(value => {

        })
    })
}