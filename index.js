const { Deck, Hand } = require('./models/');

const deck = new Deck();                                        // Creating a new shuffled deck of 52 cards
console.log(deck.cards.length);                                 // expecting 52



//========================== Example ====================================//
//    Use one method at a time by commenting out the suggested lines     //
//========================== Example ====================================//



//===================== Method 1: Descriptive ===============================================================//
// METH1: START (Comment out from the line 8 to 18 for example)
const hand1 = new Hand();                                       // hand1 has been constructed waiting for cards
const hand2 = new Hand();                                       // hand2 has been constructed waiting for cards
const hand3 = new Hand();                                       // hand3 has been constructed waiting for cards
const hand4 = new Hand();                                       // hand4 has been constructed waiting for cards
const hand5 = new Hand();                                       // hand5 has been constructed waiting for cards

hand1.takeFiveCards(deck.dealCards());                          // hand1 takes 5 cards from the dealing deck
hand2.takeFiveCards(deck.dealCards());                          // hand2 takes 5 cards from the dealing deck
hand3.takeFiveCards(deck.dealCards());                          // hand3 takes 5 cards from the dealing deck
hand4.takeFiveCards(deck.dealCards());                          // hand4 takes 5 cards from the dealing deck
hand5.takeFiveCards(deck.dealCards());                          // hand5 takes 5 cards from the dealing deck
// METH1: END
//===========================================================================================================//



//===================== Method 1: Shorthand =================================================================//
// METH2: START (Comment out from the line 26 to 30 for example)
// const hand1 = new Hand(deck.dealCards());                       // hand1 takes five cards from the deck
// const hand2 = new Hand(deck.dealCards());                       // hand2 takes five cards from the deck
// const hand3 = new Hand(deck.dealCards());                       // hand3 takes five cards from the deck
// const hand4 = new Hand(deck.dealCards());                       // hand4 takes five cards from the deck
// const hand5 = new Hand(deck.dealCards());                       // hand5 takes five cards from the deck
// METH2: END
//===========================================================================================================//

console.log(deck.cards.length);                                 // expecting 27 remaining

console.log('hand1 type',hand1.cardNames, hand1.handType);      // viewing hand1 cards and handtype
console.log('hand2 type',hand2.cardNames, hand2.handType);      // viewing hand2 cards and handtype
console.log('hand3 type',hand3.cardNames, hand3.handType);      // viewing hand3 cards and handtype
console.log('hand4 type',hand4.cardNames, hand4.handType);      // viewing hand4 cards and handtype
console.log('hand5 type',hand5.cardNames, hand5.handType);      // viewing hand5 cards and handtype