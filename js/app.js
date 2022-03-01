// DOM CONTENT LOAD INITIALIZERS
const rulesButton = document.querySelector('#rulesButton')
const startButton = document.querySelector('#startButton')
const rulesSpace = document.querySelector('#rulesSpace')
const introContainer = document.querySelector('#introContainer')
const senTitle = document.querySelector('#senTitle')
const cardSpace = document.querySelector('#cardSpace')
const playerA = document.querySelector('#playerA')
const playerB = document.querySelector('#playerB')
const displayPlayer = document.querySelector('.display-player')

// Current player turn is true
let playerTurn = true
// Current Player empty string
let currentPlayer = ''
// Empty bracket for future selected cards that will be compared
let playerChoiceCards = []
// Winning score variable to play to
let maxScore = 10


// RULES + RETURN BUTTON
// IntroContainer div visability is set to none
rulesButton.addEventListener('click', (event) => {
    event.preventDefault()
    // Intro page is hidden
    introContainer.style['display'] = 'none'
    // Rules page apears
    rulesSpace.style['display'] = 'block'
    // Rules img is attached
    rulesSpace.src = 'img/rules-02.png'
    // Return to intro page button is created
    const returnButton = document.createElement('button')
    // Button inner text is changed
    returnButton.innerHTML = 'I\'m in!'
    // Add an id to button
    returnButton.id = 'returnButton'
    // Attach button to document
    document.body.appendChild(returnButton)
    
    // 'I'm in!' button directs you back to the intro page
    returnButton.addEventListener('click', () => {
        // Return button is hidden
        returnButton.style['display'] = 'none'
        // Intro page is visible
        introContainer.style['display'] = 'block'
        // Rules page is hidden
        rulesSpace.style['display'] = 'none'
    })
})

//START BUTTON
// Click 'start game' button event listener
startButton.addEventListener('click', (event) => {
    event.preventDefault()
    // Intro page is hidden
    introContainer.style['display'] = 'none'
    // SET text appears on the upper left
    senTitle.innerHTML = 'SEN'
    
    // The start score for player A & B is set to 0
    let scoreA = 0
    let scoreB = 0
    // The inner text on the upper right is updated with the latest scores for each player
    playerA.innerHTML = 'Player A : ' + scoreA
    playerB.innerHTML = 'Player B : ' + scoreB
    
    // PLAYER TURNS + GAME OVER
    const playerSwitch = () => {
        // If both scores are under the winning defined score
        if (scoreA < maxScore && scoreB < maxScore){
            // If player turn is true, set current player to A
            if (playerTurn === true){
                currentPlayer = 'A' 
            // If player turn is false, set current player to B
            } else if (playerTurn === false) {
                currentPlayer = 'B'
            }
            // Update the text to reflect the current player's turn
            displayPlayer.innerHTML = `player ${currentPlayer}'s turn`
        } else {
            // If a player hits max score, update the HTML text to a winning announcement
            displayPlayer.innerHTML = `Game over. <br/> player ${currentPlayer} wins!`
            // Don't allow clicking on cards once game is won
            const endClick = document.getElementsByClassName('cardDiv')
            for (let i = 0; i < endClick.length; i++){
                endClick[i].removeEventListener('click', pushChoices)
            }
        }
    }

    playerSwitch(playerTurn)
    
    // BUILDING THE DECK
    const deckBuilder = () => {
        // A variable defined as an array of all possible letters
        const LETTERS = ['S', 'SS', 'SSS', 'E', 'EE', 'EEE', 'N', 'NN', 'NNN']
        // A variable defined as an array of all possible colors
        const COLORS = ['hotpink', 'lawngreen', 'blue']
        // Variable cards set to an empty bracket
        const cards = []
        // Loop through each letters
        for (let l = 0; l < LETTERS.length; l++) {
            // Loop through each colors
            for (let c = 0; c < COLORS.length; c++) {
                // Define the key letter
                const letter = LETTERS[l]
                // Define the key color
                const color = COLORS[c]
                // Push each letter and color into an array as values
                cards.push({letter, color})
            }
        }
        // return each object/card
        return cards
    }
    
    
    // RANDOMIZING CARDS
    const randomCard = (cards) => {
        // 12 cards are created
        for (let i = 0; i < 12; i++){
            // Random value is created out of the 27 cards
            const random = Math.floor(Math.random() * 27)
            // Here we define the random letter
            const cardLetter = cards[random].letter
            // Here we define the random color
            const cardColor = cards[random].color
            // 12 divs are created
            const cardRender = document.createElement('div')
            // 12 divs are assigned a class
            cardRender.classList.add('cardDiv')
            // A letter is inserted as text into each div
            cardRender.innerHTML = cardLetter
            // That same letter is assigned as a data-set value
            cardRender.setAttribute('data-letter', cardLetter)
            // A color is applied to the text style
            cardRender.style.color = cardColor
            // That same color is assigned as a data-set value
            cardRender.setAttribute('data-color', cardColor)
            // The 12 divs are attached to the cardspace div 
            cardSpace.appendChild(cardRender)
            // Allow each div to be selectable 
            cardRender.addEventListener('click', pushChoices)
        }    
    }
    
    // 3 CARDS ARE SELECTED
    const pushChoices = (event) => {
        // The user click targets
        const playerChoice = event.target 
        // Click target objects are pushed into the empty player choice bracket
        playerChoiceCards.push(playerChoice)
        // The clicked card's backgrounds turn yellow
        playerChoice.style.backgroundColor = 'yellow'
        // A variable is defined to the amount of clicks/selections
        const numberOfCards = playerChoiceCards.length
        // Set the selections to 3
        if (numberOfCards === 3) {
            // push the 3 objects into the function to compare
            compareCards()
            // If player = A, switch intertext to B
            // If player = B, switch intertext to A    
            playerSwitch(playerTurn)
        }
        
    }
    
    // COMPARE THE 3 CARDS
    const compareCards = () => {
        // Compare the data set keys between the first 2 objects and then 2nd two objects in the array
        if (
        // All 3 cards are === in color 
        playerChoiceCards[0].dataset.color === playerChoiceCards[1].dataset.color 
        && playerChoiceCards[1].dataset.color === playerChoiceCards[2].dataset.color
        // All 3 cards !== in # of letters  / split the letter into separate strings and compare how many in each
        && playerChoiceCards[0].dataset.letter.split('').length !== playerChoiceCards[1].dataset.letter.split('').length 
        && playerChoiceCards[1].dataset.letter.split('').length !== playerChoiceCards[2].dataset.letter.split('').length
        // All 3 cards !== in letter type / split the letter into separate strings and compare the string value of the first one
        && playerChoiceCards[0].dataset.letter.split('', 1).toString()  !== playerChoiceCards[1].dataset.letter.split('', 1).toString() 
        && playerChoiceCards[1].dataset.letter.split('', 1).toString()  !== playerChoiceCards[2].dataset.letter.split('', 1).toString() 
        ){
            // Run the matched function
            matched() 
            // Replace the 3 card object values
            replaceUsed()
            // Set the player choices to empty
            playerChoiceCards = []
        
        // Compare the data set keys between the first 2 objects and then 2nd two objects in the array
        } else if (
        // All 3 cards are === in letter type / split the letter into separate strings and compare how many in each 
        playerChoiceCards[0].dataset.letter.split('', 1).toString()  === playerChoiceCards[1].dataset.letter.split('', 1).toString()  
        && playerChoiceCards[1].dataset.letter.split('', 1).toString()  === playerChoiceCards[2].dataset.letter.split('', 1).toString() 
        // All 3 cards !== in color
        && playerChoiceCards[0].dataset.color !== playerChoiceCards[1].dataset.color 
        && playerChoiceCards[1].dataset.color !== playerChoiceCards[2].dataset.color
        // All 3 cards !== in # of letters / split the letter into separate strings and compare the string value of the first one
        && playerChoiceCards[0].dataset.letter.split('').length !== playerChoiceCards[1].dataset.letter.split('').length 
        && playerChoiceCards[1].dataset.letter.split('').length !== playerChoiceCards[2].dataset.letter.split('').length
        ){
            // Run the matched function
            matched() 
            // Replace the 3 card object values
            replaceUsed()
            // Set the player choices to empty
            playerChoiceCards = []
        } 

        // Compare the data set keys between the first 2 objects and then 2nd two objects in the array
        else if (
        // All 3 cards are === in # of letters / split the letter into separate strings and compare how many in each
        playerChoiceCards[0].dataset.letter.split('').length === playerChoiceCards[1].dataset.letter.split('').length 
        && playerChoiceCards[1].dataset.letter.split('').length === playerChoiceCards[2].dataset.letter.split('').length
        // All 3 cards !== in color
        && playerChoiceCards[0].dataset.color !== playerChoiceCards[1].dataset.color 
        && playerChoiceCards[1].dataset.color !== playerChoiceCards[2].dataset.color
        // All 3 cards !== in letter type / split the letter into separate strings and compare the string value of the first one
        && playerChoiceCards[0].dataset.letter.split('', 1).toString()  !== playerChoiceCards[1].dataset.letter.split('', 1).toString()  
        && playerChoiceCards[1].dataset.letter.split('', 1).toString()  !== playerChoiceCards[2].dataset.letter.split('', 1).toString() 
        ){
            // Run the matched function
            matched() 
            // Replace the 3 card object values
            replaceUsed()
            // Set the player choices to empty
            playerChoiceCards = []
        } 
        
        // Compare the data set keys between the first 2 objects and then 2nd two objects in the array
        else if (
            // All 3 cards are === in # of letters 
            playerChoiceCards[0].dataset.letter.split('').length === playerChoiceCards[1].dataset.letter.split('').length 
            && playerChoiceCards[1].dataset.letter.split('').length === playerChoiceCards[2].dataset.letter.split('').length
            // All 3 cards === in color
            && playerChoiceCards[0].dataset.color === playerChoiceCards[1].dataset.color && playerChoiceCards[1].dataset.color === playerChoiceCards[2].dataset.color
            // All 3 cards === in letter type / split the letter into separate strings and campare the string value of the first one
            && playerChoiceCards[0].dataset.letter.split('', 1).toString() !== playerChoiceCards[1].dataset.letter.split('', 1).toString() 
            && playerChoiceCards[1].dataset.letter.split('', 1).toString() !== playerChoiceCards[2].dataset.letter.split('', 1).toString()
            ){
            // Run the matched function
            matched() 
            // Replace the 3 card object values
            replaceUsed()
            // Set the player choices to empty
            playerChoiceCards = []

            } 
        // IF IT'S NOT A MATCH
        else{
            // Change the player turn
            playerTurn = !playerTurn
            // Loop through each card
            for (let i = 0; i < playerChoiceCards.length; i++){
                // Change the background of clicked cards back to white
                playerChoiceCards[i].style.backgroundColor = 'snow'
            }
            // Set the player choices to empty
            playerChoiceCards = []
        }  
    } 

  
    // IF IT'S A MATCH
    const matched = ()=>{
        
        // If player A is the current player
        if (currentPlayer === 'A'){
            // add a point to the player A score
            playerA.innerHTML = `Player A: ${scoreA = scoreA + 1}`
            
        // If player A is the current player    
        } else if (currentPlayer === 'B'){
            // add a point to the player B score
            playerB.innerHTML = `Player B: ${scoreB = scoreB + 1}`  
        } 
    }

    // Run the deck building function and set it to a variable
    const cards = deckBuilder()
    // Run the cards through the randomizer
    randomCard(cards)
    
    // REPLACE USED CARDS       
    const replaceUsed = () => {
        // Loop the 3 cards used 
        for (let i = 0; i < playerChoiceCards.length; i++){
            // generate a random selections out of 27
            const random = Math.floor(Math.random() * 27)
            // Here we define the random letter
            const cardLetter = cards[random].letter
            // Here we define the random color
            const cardColor = cards[random].color
            // Reassign the data-set color
            playerChoiceCards[i].dataset.color = cardColor
            // Reassign the data-set letter
            playerChoiceCards[i].dataset.letter = cardLetter
            // Change the font color to the data-set color
            playerChoiceCards[i].style.color = cardColor
            // Change the inner text to the data-set letter
            playerChoiceCards[i].innerHTML = cardLetter 
            // Change the background of the selected cards to white
            playerChoiceCards[i].style.backgroundColor = 'snow'
            // Switch player
            playerTurn = !playerTurn
        }
    }
        
    // RESTART BUTTON
    // Create the button
    const restartButton = document.createElement('button')
    // Add text to button
    restartButton.innerHTML = 'restart'
    // Assign an id to the button
    restartButton.id = 'restartButton'
    // Attach the button to the document
    document.body.appendChild(restartButton)
    // When button is clicked 
    restartButton.addEventListener('click', (event) => {
        // Reload the page back to the Intro page
        location.reload(true)
    })
                
})




   
                