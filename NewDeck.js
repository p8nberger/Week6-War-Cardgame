const suits = ['♥', '♠', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Deck {
    constructor(cards = newDeck()){
        this.cards = cards
    }

    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i --){
            const newShuffle = Math.floor(Math.random() * (i + 1))
            const oldCard = this.cards[newShuffle]
            this.cards[newShuffle] = this.cards[i]
            this.cards[i] = oldCard 
        }
    }
}

class Card {
    constructor (suit, value){
        this.suit = suit
        this.value = value
    }
}

function newDeck (){
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value)
        })
    })
} 

