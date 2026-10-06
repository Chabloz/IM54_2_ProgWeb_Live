const numbers = [3, 14, 15, 92 ,65, 35, 89, 79, 32, 38];
// Retourner un tableau ne contenant que les valeurs impaires
const odd = numbers.filter(nb => nb % 2 != 0);
console.log(numbers);
console.log(odd);

// Retourner le plus grand nombre
console.log(Math.max(...numbers))

// Retourner un tableau contenant d'abord les nombres pairs, puis les nombres impairs, en conservant leur ordre relatif dans chaque groupe
const even = numbers.filter(nb => nb % 2 == 0);
const evenAndOdd = [...even, ...odd];
console.log(evenAndOdd);


const sator = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

function concatenateAll(array) {
  return array.join('');
}
const concatenateSator = concatenateAll(sator).toLowerCase();
console.log(concatenateSator);
const concatenateSatorInversed = [...concatenateSator].reverse().join('');
console.log(concatenateSatorInversed);
console.log('Is palindrom ? ' + (concatenateSator === concatenateSatorInversed));

const JACK = 11;
const QUEEN = 12;
const KING = 13;
const ACE = 14;

const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE];
const SUITS = ['hearts', 'spades', 'clubs', 'diamonds'];

function buildDeck() {
  const deck = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      const card = {
        "rank": rank,
        "suit": suit,
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const deck = buildDeck();
const deckShuffled = shuffleArray([...deck])
console.log(deck);
console.log(deckShuffled);