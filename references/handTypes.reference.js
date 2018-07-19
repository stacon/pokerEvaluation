const handType = require('../models/handType.model');

const handTypes = [
    new handType(10, 'Royal Flush', sortedHand => {
        return everyCardIsSameSuit(sortedHand) && isRoyal(sortedHand);
    }),
    new handType(9,  'Straight Flush', sortedHand => {
        return everyCardIsSameSuit(sortedHand) && isStraight(sortedHand);
    }),
    new handType(8,  'Four of a kind', sortedHand => {
        return hasFourOfAkind(sortedHand);
    }),
    new handType(7,  'Full House', sortedHand => {
        return hasFullHouse(sortedHand);
    }),
    new handType(6,  'Flush', sortedHand => {
        return everyCardIsSameSuit(sortedHand);
    }),
    new handType(5,  'Straight', sortedHand => {
        return isStraight(sortedHand);
    }),
    new handType(4,  'Three of a Kind', sortedHand => {
        return isThreeOfAkind(sortedHand);
    }),
    new handType(3,  'Two Pairs', sortedHand => {
        return Object.values(groupedByValueSets(sortedHand)).filter(value => value === 2) === 2;
    }),
    new handType(2,  'One Pair', sortedHand => {
        return isPair(sortedHand);
    }),
    new handType(1,  'High Card', () => {
        return true;
    })
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

function hasFullHouse(sortedHand) {
    return isThreeOfAkind(sortedHand) && isPair(sortedHand);
}

function isThreeOfAkind(sortedHand) {
    return Object.values(groupedByValueSets(sortedHand)).filter(value => value === 3) === 1;
}

function isPair(sortedHand) {
    return Object.values(groupedByValueSets(sortedHand)).filter(value => value === 2) === 1;
}

function hasFourOfAkind(sortedHand) {
    const result = Object.values(groupedByValueSets(sortedHand)).filter(value => value === 4);
    return !result.length  === 1
}

function groupedByValueSets(sortedHand) {
    let counts = {};
    sortedHand.forEach(card => {
        counts[card.value] = (counts[card.value] || 0) + 1
    });
    return counts;
}

module.exports = { handTypes };
