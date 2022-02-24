const rulesButton = document.querySelector('#rulesButton')
const startButton = document.querySelector('#startButton')
const rulesSpace = document.querySelector('#rulesSpace')
const introContainer = document.querySelector('#introContainer')
const senTitle = document.querySelector('#senTitle')
const cardSpace = document.querySelector('#cardSpace')
const playerA = document.querySelector('#playerA')
const playerB = document.querySelector('#playerB')
const displayPlayer = document.querySelector('.displayPlayer')

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
        
        let isGameActive = true
        let playerChoiceCards = []
        let currentPlayer = playerA
        let score = 0
    
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
            //  console.log('these are the cards', cards) 
             return cards
        }


        // randomize card array
        const randomCard = (cards) => {
            // create 12 cards by creating element div and redering value on it
            for (let i = 0; i < 12; i++){
                const random = Math.floor(Math.random() * 27)
                const cardLetter = cards[random].letter
                const cardColor = cards[random].color
                //console.log('these are the random letters', cardLetter)
                const cardRender = document.createElement('div')
                cardRender.classList.add('cardDiv')
                cardRender.innerHTML = cardLetter
                cardRender.setAttribute('data-letter', cardLetter)
                cardRender.style.color = cardColor
                cardRender.setAttribute('data-color', cardColor)
                cardSpace.appendChild(cardRender)
                cardRender.addEventListener('click', pushChoices)

            }
            
        }
        
        const pushChoices = (event) => {
            const playerChoice = event.target 
            console.log('is this the data', playerChoice.dataset)
            playerChoiceCards.push(playerChoice)
            // console.log('choices array', playerChoiceCards)
            
            // set to 3 card selections for comparison
            const numberOfCards = playerChoiceCards.length
            if (numberOfCards === 3) {
                compareCards()
            }
        }
        
        // compare cards
        // an array of 3 objects - those objects will contain 2 keeys and 2 values 
        // for example playerChoiceCards = [{}, {}, {}] 
        // you will compare those objects by using bracket and dotnotation 
        // for example if playerChoiceCards[0].color === playerChoiceCard[1].color && playerChoiceCards[1].color === playerChoiceCards[3]
        const compareCards = () => {
            console.log ('these are the cards', playerChoiceCards)
            if (playerChoiceCards[0].color === playerChoiceCards[1].color && playerChoiceCards[1].color === playerChoiceCards[2].color){
                matched()
            } else if (playerChoiceCards[0].letter === playerChoiceCards[1].letter && playerChoiceCards[1].letter === playerChoiceCards[2].letter){
                matched()
            } else {
                changePlayer()
            }   
        } 
        
        
        // if matched add score 
        // update html text score
        // if score = current player wins
        const matched = ()=>{
        
            
        
                     
        
        
        // change player from A to B
        // update display status
        const changePlayer = () => {
            // remove the current player status
            displayPlayer.innerHTML(`player${currentPlayer}`)
            // set current player to a new value
            currentPlayer = currentPlayer === playerA ? playerB : playerA 
            // change the text of the player
            displayPlayer.innerHTML = currentPlayer
            // apply the curent player class to player
            displayPlayer.classList.add(`player${currentPlayer}`)
        }
                
        const cards = deckBuilder()
        randomCard(cards)

   
         // restart button created for a new game
        const restartButton = document.createElement('button')
        restartButton.innerHTML = 'restart'
        restartButton.id = 'restartButton'
        document.body.appendChild(restartButton)
                    
    })
    
})


// restartButton.addEventListener('click', (event) => {
//     restartButton.style['display'] = 'none'
//     introContainer.style['display'] = 'block'
//     gettingStarted.style['display'] = 'block'
//     cardSpace.style['display'] = 'none'
// })
                
                