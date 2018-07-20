const { Suit } = require('../references'),
    Card = require('./Card.model'),
    shuffle = require('shuffle-array');

class Deck {
    constructor() {
        this.cards = this.generateShuffledDeck();
    }

    dealCards(number = 5) {
        return this.cards.splice(0,number)
    }

    generateShuffledDeck(){
        return this.generateDeck(true);
    }

    generateDeck(shuffled = false) {
        let generatedDeck = [];
        Object.keys(Suit).forEach(suit => {
            generatedDeck = [...generatedDeck, ...this.generateSuitDeck(suit)]
        });
        if (shuffled) return shuffle(generatedDeck, { 'copy': true });
        return generatedDeck;
    }

    generateSuitDeck(suit) {
        let suitDeck = [];
        let i = 1
        while (i < 14) {
            suitDeck = [...suitDeck, new Card(i, suit)];
            i++
        }
        return suitDeck;
    }
}

module.exports = Deck;