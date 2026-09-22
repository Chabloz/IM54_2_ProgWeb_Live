// 1) Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.
function getMax(a, b, c) {
  if (a > b && a > c) return a;
  if (b > c && b > c) return b;
  return c;
}

function getMaxV2(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

console.log("max(2, 3, 4) = " + getMax(2, 3, 4));
console.log("max(4, 18, 3) = " + getMax(4, 18, 3));
console.log("max(2, 3, 4) = " + getMaxV2(2, 3, 4));
console.log("max(4, 18, 3) = " + getMaxV2(4, 18, 3));
console.log("max(6, 5, 4) = " + getMaxV2(6, 5, 4));
console.log("max(2, 18, 1) = " + getMaxV2(2, 18, 1));
console.log("max(9, 6, 2) = " + getMaxV2(9, 6, 2));

// 2) Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure (bornes entières et comprises dans l'intervalle).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i=0; i<10; i++) {
  console.log("getRandomInt(3, 7) = " + getRandomInt(3, 7));
}

// 3) Ecrire deux fonctions compareA et compareB
function compareA(a, b) {
  // TODO
  return true;
}

function compareB(a, b) {
  // TODO
  return true;
}

console.log("compareA(4, '4') = " + compareA(4, '4'));

if (true) {

} else {

}

for (let i=0; i<100; i = i + 1) {

}
