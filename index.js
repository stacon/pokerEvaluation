const Card = require('./card.model');

const oneOfSpades = new Card(1, 'spades')
const jackOfHearts = new Card(11, 'hearts')
const queenOfDiamonds = new Card(12,'diamonds')
const kingOfClubs = new Card(13, 'clubs')

console.log(oneOfSpades)
console.log(jackOfHearts)
console.log(queenOfDiamonds)
console.log(kingOfClubs)