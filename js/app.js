const rulesButton = document.querySelector('#rulesButton')
const startButton = document.querySelector('#startButton')
const rulesSpace = document.querySelector('#rulesSpace')
const introContainer = document.querySelector('#introContainer')
const senTitle = document.querySelector('#senTitle')
const cardSpace = document.querySelector('#cardSpace')
const playerA = document.querySelector('#playerA')
const playerB = document.querySelector('#playerB')

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
                console.log (LETTERS[i])
            }
            
             // select random color and add to div card
            for (let i = 0; i < COLORS.length; i++) {
                cardDiv.style.color = COLORS[Math.floor(Math.random() * COLORS.length)]
                console.log (COLORS[i])
            }
        }

        // heading title and player input names and score points apear
        playerAname = document.getElementById('playerAname')
        playerA.innerHTML = playerAname.value + ':'
        // console.log(playerAname)
        playerBname = document.getElementById('playerBname')
        playerB.innerHTML = playerBname.value + ':' 
        

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

  
       
        // if (letter === letter || color === color || number === number){
        //     roundWon = true
        // } if {
        //     (letter !== letter && color !== color && number !== number)
        //     roundWon = true
        // } else {
        //     isRoundActive = false 
        //     return
        // }
    
    
    // if (roundWon) {
    //     displayResult(currentPlayer === 'A' ? playerAWon : playerBWon)
    //     isGameActive = false 
    //     return



// // identify the current player
// let currentPlayer = "A"

// //identify game activity
// let isGameActive = true


// identify the Deck with cards

// winning cards

//display the results
