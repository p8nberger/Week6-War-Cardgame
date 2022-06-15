import Deck from './NewDeck.js'

// const deck = new Deck()

// deck.shuffle()

// console.log(deck.cards)

let player1Deck, player2Deck

startGame();
function startGame(){
    const deck = new Deck()
    deck.shuffle()
    
    player1Deck = new Deck(deck.cards.slice(0, 26))
    console.log(typeof player1Deck)
    player2Deck = new Deck(deck.cards.slice(26, deck.length))

    console.log(player1Deck)
    console.log(player2Deck)
    
}

// function flipCard(){
//     const player1Card = player1Deck.pop()
//     const player2Card = player2Deck.pop()

//     return player1Card;

// }

// console.log(flipCard());
// console.log(flipCard(player2Card));
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
console.log(plants);
console.log(typeof plants);


