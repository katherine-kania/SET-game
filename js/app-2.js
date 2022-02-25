const rulesButton = document.querySelector('#rulesButton')
const startButton = document.querySelector('#startButton')
const rulesSpace = document.querySelector('#rulesSpace')
const introContainer = document.querySelector('#introContainer')
const senTitle = document.querySelector('#senTitle')
const cardSpace = document.querySelector('#cardSpace')
const playerA = document.querySelector('#playerA')
const playerB = document.querySelector('#playerB')
const displayPlayer = document.querySelector('.display-player')
let playerTurn = true
let currentPlayer = ''
let playerChoiceCards = []

document.addEventListener('DOMContentLoaded', () => {

    // when rules button is clicked, popover appears with rules
    rulesButton.addEventListener('click', (event) => {
        event.preventDefault()
        introContainer.style['display'] = 'none'
        introContainer.style['display'] = 'none'
        rulesSpace.style['display'] = 'block'
        rulesSpace.src = 'img/rules-02.png'

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
        
        let scoreA = 0
        let scoreB = 0
        playerA.innerHTML = 'Player A : ' + scoreA
        playerB.innerHTML = 'Player B : ' + scoreB
        
        
        const playerSwitch = () => {
            if (scoreA < 10 && scoreB < 10){
                if (playerTurn === true){
                    currentPlayer = 'A' 
                } else if (playerTurn === false) {
                    currentPlayer = 'B'
                }
                displayPlayer.innerHTML = `player ${currentPlayer} play`
            } else {
                displayPlayer.innerHTML = 'Game over'
                const endClick = document.getElementsByClassName('cardDiv')
                for (let i = 0; i < endClick.length; i++){
                    endClick[i].removeEventListener('click', pushChoices)
                }
            }
        }
    
        playerSwitch(playerTurn)
       
        
        const deckBuilder = () => {
            // 2 arrays of the letter and color values
            const LETTERS = ['S', 'SS', 'SSS', 'E', 'EE', 'EEE', 'N', 'NN', 'NNN']
            const COLORS = ['hotpink', 'lawngreen', 'blue']
            
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
            // console.log('is this the data', playerChoice.dataset)
            playerChoiceCards.push(playerChoice)
            // console.log('choices array', playerChoiceCards)
            playerChoice.style.backgroundColor = 'yellow'
            // set to 3 card selections for comparison
            const numberOfCards = playerChoiceCards.length
            if (numberOfCards === 3) {
                compareCards()
                playerSwitch(playerTurn)
                //if player = A switich intertext to B and if player = B switch intertext to A 
    
            }
            
        }
        
        // compare cards
        // an array of 3 objects - those objects will contain 2 keys and 2 values 
        // for example playerChoiceCards = [{}, {}, {}] 
        // you will compare those objects by using bracket and dotnotation 
        
        const compareCards = () => {
            // console.log ( 'these are the data sets', playerChoiceCards[0].dataset.color, playerChoiceCards[1].dataset.color, playerChoiceCards[2].dataset.color)
            if (
            // all 3 cards are === in color 
            playerChoiceCards[0].dataset.color === playerChoiceCards[1].dataset.color && playerChoiceCards[1].dataset.color === playerChoiceCards[2].dataset.color
            // all 3 cards !== in # of letters
            && playerChoiceCards[0].dataset.letter.split('').length === playerChoiceCards[1].dataset.letter.split('').length 
            && playerChoiceCards[1].dataset.letter.split('').length === playerChoiceCards[2].dataset.letter.split('').length
            // all 3 cards !== in letter
            && playerChoiceCards[0].dataset.letter !== playerChoiceCards[1].dataset.letter && playerChoiceCards[1].dataset.letter !== playerChoiceCards[2].dataset.letter
            ){
                matched() 
                replaceUsed()
                // console.log ('this is the choices', playerChoiceCards)
                playerChoiceCards = []

            } else if (
            // all 3 cards are === in letter type   
            playerChoiceCards[0].dataset.letter === playerChoiceCards[1].dataset.letter 
            && playerChoiceCards[1].dataset.letter === playerChoiceCards[2].dataset.letter
            // all 3 cards !== in color
            && playerChoiceCards[0].dataset.color !== playerChoiceCards[1].dataset.color && playerChoiceCards[1].dataset.color !== playerChoiceCards[2].dataset.color
            // all 3 cards !== in # of letters
            && playerChoiceCards[0].dataset.letter.split('').length === playerChoiceCards[1].dataset.letter.split('').length 
            && playerChoiceCards[1].dataset.letter.split('').length === playerChoiceCards[2].dataset.letter.split('').length
            ){
                matched() 
                replaceUsed()
                // console.log ('this is the choices', playerChoiceCards)
                playerChoiceCards = []
            } 
            else if (
            // all 3 cards are === in # of letters 
            playerChoiceCards[0].dataset.letter.split('').length === playerChoiceCards[1].dataset.letter.split('').length 
            && playerChoiceCards[1].dataset.letter.split('').length === playerChoiceCards[2].dataset.letter.split('').length
            // all 3 cards !== in color
            && playerChoiceCards[0].dataset.color !== playerChoiceCards[1].dataset.color && playerChoiceCards[1].dataset.color !== playerChoiceCards[2].dataset.color
            // all 3 cards !== in letter
            && playerChoiceCards[0].dataset.letter !== playerChoiceCards[1].dataset.letter && playerChoiceCards[1].dataset.letter !== playerChoiceCards[2].dataset.letter
            ){
                matched() 
                replaceUsed()
                // console.log ('this is the choices', playerChoiceCards)
                playerChoiceCards = []
            } 
            else if (
                // all 3 cards are === in # of letters 
                playerChoiceCards[0].dataset.letter.split('').length === playerChoiceCards[1].dataset.letter.split('').length 
                && playerChoiceCards[1].dataset.letter.split('').length === playerChoiceCards[2].dataset.letter.split('').length
                // all 3 cards === in color
                && playerChoiceCards[0].dataset.color === playerChoiceCards[1].dataset.color && playerChoiceCards[1].dataset.color === playerChoiceCards[2].dataset.color
                // all 3 cards === in letter
                && playerChoiceCards[0].dataset.letter === playerChoiceCards[1].dataset.letter && playerChoiceCards[1].dataset.letter === playerChoiceCards[2].dataset.letter
                ){
                    matched() 
                    replaceUsed()
                    // console.log ('this is the choices', playerChoiceCards)
                    playerChoiceCards = []
                } 
            // if not a match, change player, turn back card backgrounds to default
            else{
                playerTurn = !playerTurn
                for (let i = 0; i < playerChoiceCards.length; i++){
                    playerChoiceCards[i].style.backgroundColor = 'snow'
                }
                playerChoiceCards = []
            }  
        } 
  
        // if matched add score 
        // update html text score
        // if score = current player wins
        const matched = ()=>{
            if (currentPlayer === 'A'){
                playerA.innerHTML = `Player A: ${scoreA = scoreA + 1}`
            } else if (currentPlayer === 'B'){
                playerB.innerHTML = `Player B: ${scoreB = scoreB + 1}`  
            } 
        }
 
        const cards = deckBuilder()
        randomCard(cards)
        
        const replaceUsed = () => {
            // console.log ('this is the replace card', playerChoiceCards[0].dataset)
            for (let i = 0; i < playerChoiceCards.length; i++){
                const random = Math.floor(Math.random() * 27)
                const cardLetter = cards[random].letter
                const cardColor = cards[random].color
                // console.log('these are the random letters', cardLetter)
                playerChoiceCards[i].dataset.color = cardColor
                playerChoiceCards[i].dataset.letter = cardLetter
                playerChoiceCards[i].style.color = cardColor
                playerChoiceCards[i].innerHTML = cardLetter 
                playerChoiceCards[i].style.backgroundColor = 'snow'
                playerTurn = !playerTurn
            }
        }
           

         // restart button created for a new game
        const restartButton = document.createElement('button')
        restartButton.innerHTML = 'restart'
        restartButton.id = 'restartButton'
        document.body.appendChild(restartButton)
        restartButton.addEventListener('click', (event) => {
            location.reload(true)
        })
                    
    })
    
})


   
                