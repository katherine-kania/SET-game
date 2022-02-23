const rulesButton = document.querySelector('#rulesButton')
const startButton = document.querySelector('#startButton')
const rulesSpace = document.querySelector('#rulesSpace')
const introContainer = document.querySelector('#introContainer')
const senTitle = document.querySelector('#senTitle')
const cardSpace = document.querySelector('#cardSpace')
const playerA = document.querySelector('#playerA')
const playerB = document.querySelector('#playerB')
const displayPlayer = document.querySelector('#displayPlayer')

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
        }
        
        const deckBuilder = () => {
            // 2 arrays of the letter and color values
            const LETTERS = ['S', 'SS', 'SSS', 'E', 'EE', 'EEE', 'N', 'NN', 'NNN']
            const COLORS = ['pink', 'green', 'blue']
                
            //loop through the letters while looping through the values 
            //to create the object with both values
            const cards = []
            for (let l = 0; l < LETTERS.length; l++) {
                for (let c = 0; c < COLORS.length; c++) {
                    const letter = LETTERS[l]
                    const color = COLORS[c]
                    cards.push({letter, color})
                }
             }
            return cards
            // console.log('these are the cards', cards) 
        }
        // randomize card array
        function randomCard(cards) {
            const random = Math.floor(Math.random() * 11)
            const cardLetter = cards[random].letter
            const cardColor = cards[random].color
        }
        const cards = deckBuilder()
        return randomCard(cards)
        console.log ('these are the random cards', cards )

            // // select random letter and add to div card
            // for (let i = 0; i < LETTERS.length; i++) {
            //     let letter = cardDiv.innerHTML = LETTERS[Math.floor(Math.random() * LETTERS.length)]
            //     return letter
            //     // console.log ('these are the letters', LETTERS[i])
            // }
            
            //  // select random color and add to div card
            // for (let i = 0; i < COLORS.length; i++) {
            //     let color = cardDiv.style.color = COLORS[Math.floor(Math.random() * COLORS.length)]
            //     return color
            //     // console.log ('these are the colors', COLORS[i])
            // }
            

        // heading title and player input names and score points apear
        score = 0
        playerAname = document.getElementById('playerAname') 
        playerA.innerText = 'Player A | ' + playerAname.value + ': ' + score
        // console.log(playerAname)
        playerBname = document.getElementById('playerBname')
        playerB.innerText = 'Player A | ' + playerBname.value + ': ' + score
        
        // identify the current player
        let currentPlayer = null

        // change player from A to B
        const changePlayer = () => {
            // display the curent player status
            displayPlayer.innerText = currentPlayer
     
            // set current player to a new value
            currentPlayer = currentPlayer === playerAname ? playerBname : playerAname 
            return
        }
        

        // when player clicks 3 cards
        
        // compare the cards 
        // const compareCards = (event) => {
        //     // get value of cards selected
        //     if (event.type == 3) {

        //     }
        //     cardDiv = document.getElementById('cardDiv') 
        //     console.log('this is the value', cardDiv[0])
        
        

        // determine if winning point 
        // add point to score




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

