const values = ["Sator", "Arepo", "Tenet", "Opera", "Rotas"];

function doSomething(array) {

}

function getLength(something) {
  return something.length
}

const wordsLength = values.map(getLength);
console.log(wordsLength);

const wordsLengthB = values.map(function (word) {
  return word.length;
});

const wordsLengthFinal = values.map(word => word.length);

console.log(values);
console.log(...values); // ... => spread operator

const clone = [...values];


const nb = 7;
const x = nb;

const doubleSator = [...values, ...values];
console.log(doubleSator);

function cl(...values) { // ... => rest operator => construit un tableau
  values.forEach(val => console.log(val));
}

cl(1,2,3,4,5,6,7, nb, 'hello');
