const { generateDeck, generateShuffledDeck } = require('./deck.model'),
    Hand= require('./hand.model'),
    handType = require('./handType.model');

module.exports = { generateDeck, generateShuffledDeck, Hand, handType};
