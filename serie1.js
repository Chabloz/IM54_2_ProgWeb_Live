// 1) Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.
function getMax(a, b, c) {
  if (a > b || a > c) return a;
  if (b > c && b > c) return b;
  return c;
}

console.log("max(2, 3, 4) = " + getMax(2, 3, 4));
console.log("max(4, 18, 3) = " + getMax(4, 18, 3));

// 2) Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure (bornes entières et comprises dans l'intervalle).
function getRandomInt(min, max) {
  return Math.random() * (max - min);
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
