const { handTypes } = require('../references/handTypes.reference');

class Hand {
    constructor(deck) {
        this.deck = deck;
        this.cardsHolding = this.sortHand(this.takeFiveCards(deck));
        this.handType = this.evaluate();
    }
    
    takeFiveCards(deck) {
        return deck.splice(0, 5);
    }

    sortHand(cardsHolding) {
        return cardsHolding.sort((cardA,cardB) => cardA.order - cardB.order);
    }

    evaluate() {
        handTypes.forEach(handType => {
            if(handType.evalFunction(this.cardsHolding)) console.log(handType.name);
        });
    }
}

module.exports = Hand;
