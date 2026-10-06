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

//le nombre de piles et de faces obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.
function rollNTimes(min, max, times) {
  // TODO: validation des inputs
  const rolls = [];
  for (let i=0; i<times; i++) {
    rolls.push(getRandomInt(min, max));
  }
  return rolls;
}

function count(valToCount, values){
  // TODO: validation
  let count = 0;
  for (const val of values) {
    if (val === valToCount) count++;
  }
  return count;
}

const TAILS = 0;
const HEADS = 1;

function rollMoney(times) {
  const rolls = rollNTimes(TAILS, HEADS, times);
  const nbTails = count(TAILS, rolls);
  const nbHeads = count(HEADS, rolls);
  //const nbHeads = times - nbTails;
  return {
    tails: nbTails,
    heads: nbHeads,
  }
}

console.log(rollMoney(10000));

function isPrime(n) {
    if (isNaN(n) || !Number.isInteger(n)) throw 'Not an integer';
    if (n > Number.MAX_SAFE_INTEGER) throw 'Number too big';
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    if (n == 3) return true;
    if (n % 3 == 0) return false;
    // On pourrait continuer avec le crible d'Ératosthène pour les multiples de 5, 7, 11, ...
    // mais cela rendrait la programmation de la boucle suivante très complexe
    // et il faudrait donc repenser la totalité de l'algorithme.
    let step = 2;
    let div = 5;
    while (div * div <= n && n % div != 0) {
        div += step;
        // Pas alterné (+2 +4 +2 +4 ...) pour ne pas parcourir les multiples de 2 ni de 3
        step = (step + 1) % 4 + 1;
    }
    // Si aucun diviseur n'a été trouvé avant la racine du nb, c'est un nombre premier
    return div * div > n;
}

console.log("0 is prime ?" +  isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(87178291197));
console.log(isPrime(87178291199));

function double(n) {
  return n*2;
}

function square(n) {
  return n ** 2;
}

function transform(val, fct) {
  return fct(val);
}

console.log(transform(5, double));
console.log(double(5));

// 10) Écrire une fonction createGreeting qui reçoit une formule de salutation et
//  retourne une nouvelle fonction. La fonction retournée reçoit un prénom et retourne le message complet.
function createGreeting(greeting) {
  return function (name) {
    return greeting + ' ' + name + ' !';
  }
}

function createGreetingV2(greeting) {
  return name => greeting + ' ' + name + ' !';
}

const sayHello = createGreeting("Hello");
const sayWelcome = createGreeting("Welcome");

const greetingHello = sayHello('Nicolas');
const greetingWelcome = sayWelcome('Nicolas');
console.log(greetingHello, greetingWelcome, sayWelcome('X'));