const { OrderName, Suit } = require('./references/');

class Card {
    constructor(order, suit) {
        this.order = order;
        this.suit = suit;
        this.value = this.setCardValueByOrderNumber(order);
        this.name = this.setCardName(order, suit)
    }

    setCardValueByOrderNumber(order) {
        if (order !== 1) return order;
        return 14;
    }

    setCardName(order, suitName) {
        return `${OrderName[order]} of ${Suit[suitName.toLowerCase()]}`;
    }
}


module.exports = Card;