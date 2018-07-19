const { handTypes } = require('../references/handTypes.reference');

class Hand {
    constructor(deck) {
        this.deck = deck;
        this.cardsHolding = this.sortHand(this.takeFiveCards(deck));
        this.handType = this.getHandType();
        this.cardsHoldingNames = this.cardsHolding.map(card => card.name);
    }
    
    takeFiveCards(deck) {
        return deck.splice(0, 5);
    }

    sortHand(cardsHolding) {
        return cardsHolding.sort((cardA,cardB) => cardA.order - cardB.order);
    }

    getHandType() {
       return handTypes.find(handType => handType.evalFunction(this.cardsHolding)).name;
    }
}

module.exports = Hand;
