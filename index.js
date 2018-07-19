const { generateShuffledDeck, Hand } = require('./models');
const deck = generateShuffledDeck();
const hand = new Hand(deck);

console.log(hand.cardsHoldingNames);
console.log(hand.handType);
