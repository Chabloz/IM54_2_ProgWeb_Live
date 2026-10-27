import { shuffle } from '../utils/array.js';

const deck = document.querySelectorAll('playing-card');

function clearSelection() {
  const cards = document.querySelectorAll('playing-card');
  for (const card of cards) {
    card.classList.remove('selected');
  }
}

function selectCards(selector) {
  const cards = document.querySelectorAll(selector);
  clearSelection();
  for (const card of cards) {
    card.classList.add('selected');
  }
}

const btnAceOfSpade = document.querySelector('#select-ace-spade');
btnAceOfSpade.addEventListener('click', () => selectCards('#SPADE-ACE'));

const btnHearth = document.querySelector('#select-hearts');
btnHearth.addEventListener('click', () => selectCards('.heart'));

const btnFace = document.querySelector('#select-face-cards');
btnFace.addEventListener('click', () => selectCards('[data-face-card]'));

const btnNotSpade = document.querySelector('#select-not-spades');
btnNotSpade.addEventListener('click', () => selectCards('playing-card:not(.spade)'));

const btnDraw  = document.querySelector('#draw-hand');
btnDraw.addEventListener('click', () => {
  const deckShuffled = shuffle([...deck]);
  const playerHand = deckShuffled.slice(0, 5);
  const clones = [];
  for (const card of playerHand) {
    const clone = card.cloneNode(true);
    clones.push(clone);
  }
  document.querySelector('#hand').replaceChildren(...clones);
});
