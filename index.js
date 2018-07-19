const { generateShuffledDeck, Hand } = require('./models');

const deck = generateShuffledDeck();
const hand = new Hand(deck);