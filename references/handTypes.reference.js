const { HandType } = require('../models');

const HandTypes = [
    royalFlush = new HandType(10, 'Royal Flush', sortedHand => {
        return everyCardIsSameSuit(sortedHand) && isRoyal(sortedHand);
    }),
    straightFlush = new HandType(9,  'Straight Flush', sortedHand => {
        return everyCardIsSameSuit(sortedHand) && isStraight(sortedHand);
    }),
    fourOfAKind = new HandType(8,  'Four of a kind', sortedHand => {
        groupedByValueSets(sortedHand).forEach(group =>)
    }),
    fullHouse = new HandType(7,  'Full House', sortedHand => {

    }),
    flush = new HandType(6,  'Flush', sortedHand => {

    }),
    straight =      new HandType(5,  'Straight', sortedHand => {

    }),
    threeOfAKind =  new HandType(4,  'Three of a Kind', sortedHand => {

    }),
    twoPairs =      new HandType(3,  'Two Pairs', sortedHand => {

    }),
    οnePair =       new HandType(2,  'One Pair', sortedHand => {

    }),
    highCard =      new HandType(1,  'High Card', sortedHand => {

    }),
];

function everyCardIsSameSuit(sortedHand) {
    const firstCardSuit = sortedHand[0].suit;
    return sortedHand.every(card => card.suit === firstCardSuit);
}

function isRoyal(sortedHand) {
    if (sortedHand[0].value === 14 &&
        sortedHand[0].order === 1 &&
        sortedHand[4].value === 13 &&
        sortedHand[4].order === 13){
            return true;
        }
    return false;
}

function isStraight(sortedHand) {
    return sortedHand[0].value + 4 === sortedHand[4].value;
}

//TODO: Remove After
const { generateShuffledDeck, Hand } = require('../models');
const deck = generateShuffledDeck();
const hand = new Hand(deck);

console.log(groupedByValueSets(hand.cardsHolding));

function groupedByValueSets(sortedHand) {
    let counts = {};
    sortedHand.forEach(card => {
        counts[card.value] = (counts[card.value] || 0) + 1
    });
    return counts;
}