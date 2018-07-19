const { Deck, Card } = require('./');

class Hand {
    constructor(deck) {
        this.deck = deck;
        this.cardsHolding = this.sortHand(this.takeFiveCards(deck));
        this.handType;
    }
    
    takeFiveCards(deck) {
        return deck.splice(0, 5);
    }

    sortHand(cardsHolding) {
        return cardsHolding.sort((cardA,cardB) => cardA.order - cardB.order);
    }

    evaluate(cardsHolding) {
        
    }
}

module.exports = Hand;