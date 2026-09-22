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
  return max; // ou avec Math: return Math.max(a, b, c)
}

console.log(getMaxV2(5));

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
  return a == b;
}

function compareB(a, b) {
  return a === b;
}

console.log("compareA(4, '4') = " + compareA(4, '4'));
console.log("compareA(4.0, '4') = " + compareA(4.0, '4'));
console.log("compareA(4, 'quatre') = " + compareA(4, 'quatre'));

console.log("compareB(8, '8') = " + compareB(8, '8'));
console.log("compareB(8, 'huit') = " + compareB(8, 'huit'));

/*
4) En fonction d'un nombre n (ou n > 0) donné en paramètre, écrire une fonction qui affiche dans la console :
Les nombres entiers pairs compris entre 0 et n.
*/
function printEven(n){
  for (let i=0; i<=n; i = i + 2) {
    console.log(i);
  }
}

function printEvenV2(n){
  for (let i=0; i<=n; i = i + 1) {
    if (i % 2 == 0) console.log(i);
  }
}

function foo(){
  const res = {};
  res.tail = 2;
  res.face = 4;
  res.rolls = [0,1,1,0,0,0];
  res.log = function () {

  }
  res.nb = 18;
  return res;
}

const res = {
  tail: 13,
  face: 6,
};

foo();

printEven(20);


// if (true) {

// } else {

// }

// for (let i=0; i<100; i = i + 1) {

// }
