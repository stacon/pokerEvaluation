const { Hand, Card } = require('./models'),
      { Suit } = require('./references')

const hands = [
new Hand([ //Royal Flush
    new Card(12, Suit.hearts),
    new Card(10, Suit.hearts),
    new Card(1, Suit.hearts),
    new Card(11, Suit.hearts),
    new Card(13, Suit.hearts),
]),
new Hand([ //Straight Flush
    new Card(3, Suit.clubs),
    new Card(4, Suit.clubs),
    new Card(1, Suit.clubs),
    new Card(2, Suit.clubs),
    new Card(5, Suit.clubs),
]),
new Hand([ //Four of a kind
    new Card(1, Suit.diamonds),
    new Card(1, Suit.hearts),
    new Card(2, Suit.clubs),
    new Card(1, Suit.spades),
    new Card(1, Suit.clubs),
]),
new Hand([ //Full House
    new Card(2, Suit.diamonds),
    new Card(1, Suit.hearts),
    new Card(2, Suit.spades),
    new Card(1, Suit.diamonds),
    new Card(2, Suit.clubs),
]),
new Hand([ //Flush
    new Card(3, Suit.clubs),
    new Card(11, Suit.clubs),
    new Card(4, Suit.clubs),
    new Card(5, Suit.clubs),
    new Card(2, Suit.clubs),
]),
new Hand([ //Straight
    new Card(3, Suit.diamonds),
    new Card(4, Suit.spades),
    new Card(1, Suit.hearts),
    new Card(2, Suit.clubs),
    new Card(5, Suit.diamonds),
]),
new Hand([ //Three of a kind
    new Card(3, Suit.clubs),
    new Card(1, Suit.clubs),
    new Card(3, Suit.spades),
    new Card(12, Suit.diamonds),
    new Card(3, Suit.hearts),
]),
new Hand([ //Two pairs
    new Card(1, Suit.spades),
    new Card(12, Suit.hearts),
    new Card(1, Suit.hearts),
    new Card(12, Suit.spades),
    new Card(13, Suit.clubs),
]),
new Hand([ //One pair
    new Card(1, Suit.diamonds),
    new Card(13, Suit.hearts),
    new Card(12, Suit.spades),
    new Card(10, Suit.diamonds),
    new Card(1, Suit.clubs),
]),
new Hand([ //High card
    new Card(1, Suit.clubs),
    new Card(11, Suit.diamonds),
    new Card(13, Suit.spades),
    new Card(3, Suit.hearts),
    new Card(6, Suit.clubs),
])
];

    hands.forEach(hand => console.log(hand.handType));

