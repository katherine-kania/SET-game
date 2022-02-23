const rulesButton = document.querySelector('#rulesButton')
const startButton = document.querySelector('#startButton')
const rulesSpace = document.querySelector('#rulesSpace')
const introContainer = document.querySelector('#introContainer')
const senTitle = document.querySelector('#senTitle')
const cardSpace = document.querySelector('#cardSpace')
const playerA = document.querySelector('#playerA')
const playerB = document.querySelector('#playerB')
const displayPlayer = document.querySelector('#display-player')

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
    
        // create 12 divs with a class
        for (let i = 0; i < 12; i++){
            const cardDiv = document.createElement('div')
            cardDiv.className = 'carDiv'
            cardSpace.appendChild(cardDiv)
            // console.log('these are the cards', cardDiv)
        
            // Set the card values
            const LETTERS = ['S', 'SS', 'SSS', 'E', 'EE', 'EEE', 'N', 'NN', 'NNN']
            const COLORS = ['pink', 'green', 'blue']

            // select random letter and add to div card
            for (let i = 0; i < LETTERS.length; i++) {
                cardDiv.innerHTML = LETTERS[Math.floor(Math.random() * LETTERS.length)]
                // console.log ('these are the letters', LETTERS[i])
            }
            
             // select random color and add to div card
            for (let i = 0; i < COLORS.length; i++) {
                cardDiv.style.color = COLORS[Math.floor(Math.random() * COLORS.length)]
                // console.log ('these are the colors', COLORS[i])
            }
        }

        // heading title and player input names and score points apear
        playerAname = document.getElementById('playerAname')
        playerA.innerHTML = playerAname.value + ':'
        // console.log(playerAname)
        playerBname = document.getElementById('playerBname')
        playerB.innerHTML = playerBname.value + ':' 
        
        // identify the current player
        let currentPlayer = null

        // change player from A to B
        const changePlayer = () => {
            // remove the current player status
            displayPlayer.getElementsById.remove(`${currentPlayer}'s turn`)
            // set current player to a new value
            currentPlayer = currentPlayer === playerAname.value ? playerBname.value : playerAname.value 
            // change the text of the player
            displayPlayer.innerText = currentPlayer.value
            // apply the curent player class to player
            displayPlayer.getElementsById.add(`${currentPlayer}'s turn`)
        }

        // select 3 cards and store values 

        // winning selections
        // const winPoint =
        // if (LETTERS === LETTERS || COLORS === COLORS){

        // }


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

  



//identify if game is active
let isGameActive = true

// identify player A win variable
const playerAWon = 'playerAWon'
// identify player B win variable
const playerBWon = 'PlayerBWon'

