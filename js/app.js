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

        //returns from rules to intro page
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
        const randomCard = (cards) => {
            // create 12 cards by creating element div and redering value on it
            for (let i = 0; i < 12; i++){
                const random = Math.floor(Math.random() * 27)
                const cardLetter = cards[random].letter
                const cardColor = cards[random].color
                // console.log('these are the random letters', cardLetter)
                const cardRender = document.createElement('div')
                cardRender.classList.add('cardDiv')
                cardRender.innerHTML = cardLetter
                cardRender.style.color = cardColor
                cardSpace.appendChild(cardRender)
                cardRender.addEventListener('click', compareCards)
            }
            return cards 
        }
        
        // compare cards
        const compareCards = (event) => {
            let roundWon = false
            for (i = 0; i < 3; i++){
                if (cardLetter === cardLetter || cardColor === cardColor ){
                    return roundWon = true
                } else if (cardLetter !== cardLetter && cardColor !== cardcolor){
                        return roundWon = true
                }else{
                    return roundWon = false
                }
            }
        }        
    

        const cards = deckBuilder()
        console.log ('are they winners', compareCards)
        return randomCard(cards)

        //identify if game is active
        let isGameActive = true
        // identify player A win variable
        const playerAWon = 'playerAWon'
        // identify player B win variable
        const playerBWon = 'PlayerBWon'
        

        
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
                
                
                
                