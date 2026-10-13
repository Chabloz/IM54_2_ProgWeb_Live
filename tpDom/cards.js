console.log(42);
const title = document.querySelector("h1");
const btnAceOfSpade = document.querySelector('#select-ace-spade');
btnAceOfSpade.addEventListener('click', function (event) {
  const aceOfSpade = document.querySelector('#SPADE-ACE');
  aceOfSpade.classList.add('selected')
})


const body = document.querySelector('body');
body.addEventListener('click', function (event) {
  console.log('body');
  console.log(event);
})



const aceOfSpade = document.querySelector('#SPADE-ACE');
const aceOfSpadeClone = aceOfSpade.cloneNode(true);
aceOfSpadeClone.setAttribute('id', 'SPADE-ACE-CLONE');
document.querySelector("#hand").append(aceOfSpadeClone);