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
maxScore = 3
cardActive = true

document.addEventListener('DOMContentLoaded', () => {

    // when rules button is clicked, it directs to the image of the rules
    // introContainer div visability is set to none
    // 'I'm in!' button dirrects you back to the intro page
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
        
        returnButton.addEventListener('click', () => {
            returnButton.style['display'] = 'none'
            introContainer.style['display'] = 'block'
            introContainer.style['display'] = 'block'
            rulesSpace.style['display'] = 'none'
        })
    })

    // click 'start game' button
    // introContainer div visability is set to none
    // new score board title apears
    startButton.addEventListener('click', (event) => {
        event.preventDefault()
        introContainer.style['display'] = 'none'
        senTitle.innerHTML = 'SEN'
        
        let scoreA = 0
        let scoreB = 0
        playerA.innerHTML = 'Player A : ' + scoreA
        playerB.innerHTML = 'Player B : ' + scoreB
        
        // if both player turns are under the max score points
        // switch players
        // if player reaches max score points that player wins
        const playerSwitch = () => {
            if (scoreA < maxScore && scoreB < maxScore){
                if (playerTurn === true){
                    currentPlayer = 'A' 
                } else if (playerTurn === false) {
                    currentPlayer = 'B'
                }
                displayPlayer.innerHTML = `player ${currentPlayer}'s turn`
            } else {
                displayPlayer.innerHTML = `Game over. <br/> player ${currentPlayer} wins!`
                const endClick = document.getElementsByClassName('cardDiv')
                for (let i = 0; i < endClick.length; i++){
                    endClick[i].removeEventListener('click', pushChoices)
                }
            }
        }
    
        playerSwitch(playerTurn)
       
        // here we build the object of keys and values for each possible card
        const deckBuilder = () => {
            // 2 arrays of the letter and color values
            const LETTERS = ['S', 'SS', 'SSS', 'E', 'EE', 'EEE', 'N', 'NN', 'NNN']
            const COLORS = ['hotpink', 'lawngreen', 'blue']
            
            // loop through the letters while looping through the values 
            // pushing each letter and color into an object defined as cards
            const cards = []
            for (let l = 0; l < LETTERS.length; l++) {
                for (let c = 0; c < COLORS.length; c++) {
                    const letter = LETTERS[l]
                    const color = COLORS[c]
                    cards.push({letter, color})
                }
            }
            return cards
        }
        
        
        // create 12 cards by creating element div and rendering the value on it
        // set the innerhtml with the random cardLetter
        // set the color style of the innerhtml with the random cardColor
        const randomCard = (cards) => {
            for (let i = 0; i < 12; i++){
                const random = Math.floor(Math.random() * 27)
                const cardLetter = cards[random].letter
                const cardColor = cards[random].color
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
        
        // when a card is selected it turns yellow, when 3 are selected they are pushed into an array
        //for example playerChoiceCards = [{}, {}, {}] 
        const pushChoices = (event) => {
            const playerChoice = event.target 
            playerChoiceCards.push(playerChoice)
            playerChoice.style.backgroundColor = 'yellow'
            const numberOfCards = playerChoiceCards.length
            if (numberOfCards === 3) {
                compareCards()
                //if player = A switich intertext to B and if player = B switch intertext to A    
                playerSwitch(playerTurn)
            }
            
        }
        
        // compare cards
        // an array of 3 objects - those objects will contain a key and value
        // you will compare those objects by calling the dataset of each object 
        const compareCards = () => {
            if (
            // all 3 cards are === in color 
            playerChoiceCards[0].dataset.color === playerChoiceCards[1].dataset.color 
            && playerChoiceCards[1].dataset.color === playerChoiceCards[2].dataset.color
            // all 3 cards !== in # of letters
            && playerChoiceCards[0].dataset.letter.split('').length !== playerChoiceCards[1].dataset.letter.split('').length 
            && playerChoiceCards[1].dataset.letter.split('').length !== playerChoiceCards[2].dataset.letter.split('').length
            // all 3 cards !== in letter type
            && playerChoiceCards[0].dataset.letter.split('', 1).toString()  !== playerChoiceCards[1].dataset.letter.split('', 1).toString() 
            && playerChoiceCards[1].dataset.letter.split('', 1).toString()  !== playerChoiceCards[2].dataset.letter.split('', 1).toString() 
            ){
                matched() 
                replaceUsed()
                playerChoiceCards = []

            } else if (
            // all 3 cards are === in letter type   
            playerChoiceCards[0].dataset.letter.split('', 1).toString()  === playerChoiceCards[1].dataset.letter.split('', 1).toString()  
            && playerChoiceCards[1].dataset.letter.split('', 1).toString()  === playerChoiceCards[2].dataset.letter.split('', 1).toString() 
            // all 3 cards !== in color
            && playerChoiceCards[0].dataset.color !== playerChoiceCards[1].dataset.color 
            && playerChoiceCards[1].dataset.color !== playerChoiceCards[2].dataset.color
            // all 3 cards !== in # of letters
            && playerChoiceCards[0].dataset.letter.split('').length !== playerChoiceCards[1].dataset.letter.split('').length 
            && playerChoiceCards[1].dataset.letter.split('').length !== playerChoiceCards[2].dataset.letter.split('').length
            ){
                matched() 
                replaceUsed()
                playerChoiceCards = []
            } 
            else if (
            // all 3 cards are === in # of letters 
            playerChoiceCards[0].dataset.letter.split('').length === playerChoiceCards[1].dataset.letter.split('').length 
            && playerChoiceCards[1].dataset.letter.split('').length === playerChoiceCards[2].dataset.letter.split('').length
            // all 3 cards !== in color
            && playerChoiceCards[0].dataset.color !== playerChoiceCards[1].dataset.color 
            && playerChoiceCards[1].dataset.color !== playerChoiceCards[2].dataset.color
            // all 3 cards !== in letter type
            && playerChoiceCards[0].dataset.letter.split('', 1).toString()  !== playerChoiceCards[1].dataset.letter.split('', 1).toString()  
            && playerChoiceCards[1].dataset.letter.split('', 1).toString()  !== playerChoiceCards[2].dataset.letter.split('', 1).toString() 
            ){
                matched() 
                replaceUsed()
                playerChoiceCards = []
            } 
            else if (
                // all 3 cards are === in # of letters 
                playerChoiceCards[0].dataset.letter.split('').length === playerChoiceCards[1].dataset.letter.split('').length 
                && playerChoiceCards[1].dataset.letter.split('').length === playerChoiceCards[2].dataset.letter.split('').length
                // all 3 cards === in color
                && playerChoiceCards[0].dataset.color === playerChoiceCards[1].dataset.color && playerChoiceCards[1].dataset.color === playerChoiceCards[2].dataset.color
                // all 3 cards === in letter
                && playerChoiceCards[0].dataset.letter.split('', 1) !== playerChoiceCards[1].dataset.letter.split('', 1) 
                && playerChoiceCards[1].dataset.letter.split('', 1) !== playerChoiceCards[2].dataset.letter.split('', 1)
                ){
                    matched() 
                    replaceUsed()
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
        const matched = ()=>{
            if (currentPlayer === 'A'){
                playerA.innerHTML = `Player A: ${scoreA = scoreA + 1}`
            } else if (currentPlayer === 'B'){
                playerB.innerHTML = `Player B: ${scoreB = scoreB + 1}`  
            } 
        }
 
        const cards = deckBuilder()
        randomCard(cards)
        
        // used matched card get replaced with new random letters and colors
        const replaceUsed = () => {
            for (let i = 0; i < playerChoiceCards.length; i++){
                const random = Math.floor(Math.random() * 27)
                const cardLetter = cards[random].letter
                const cardColor = cards[random].color
                playerChoiceCards[i].dataset.color = cardColor
                playerChoiceCards[i].dataset.letter = cardLetter
                playerChoiceCards[i].style.color = cardColor
                playerChoiceCards[i].innerHTML = cardLetter 
                playerChoiceCards[i].style.backgroundColor = 'snow'
                playerTurn = !playerTurn
            }
        }
           
         // restart button takes you back to intro page
        const restartButton = document.createElement('button')
        restartButton.innerHTML = 'restart'
        restartButton.id = 'restartButton'
        document.body.appendChild(restartButton)
        restartButton.addEventListener('click', (event) => {
            location.reload(true)
        })
                    
    })
    
})


   
                