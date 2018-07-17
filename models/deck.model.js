const { Suit } = require('../references'),
    Card = require('./card.model'),
    shuffle = require('shuffle-array');

function generateShuffledDeck(){
    return generateDeck(true);
}

function generateDeck(shuffled = false) {
    let generatedDeck = [];
    Object.keys(Suit).forEach(suit => {
        generatedDeck = [...generatedDeck, ...generateSuitDeck(suit)]
    });
    if (shuffled) return shuffle(generatedDeck, { 'copy': true });
    return generatedDeck;
}

function generateSuitDeck(suit) {
    let suitDeck = [];
    let i = 1
    while (i < 14) {
        suitDeck = [...suitDeck, new Card(i, suit)];
        i++
    }
    return suitDeck;
}

module.exports = { generateDeck, generateShuffledDeck };