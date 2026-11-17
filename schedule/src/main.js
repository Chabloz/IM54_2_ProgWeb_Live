import { getNode, getNodes, cloneTemplate, forEach, on } from './utils/dom.js';
import { strToDate, dateToFrCh, dateToHours } from './utils/date.js';
import { schedules } from './utils/schedule.js';


// const courses = getNodes('VEVENT', schedules["M54-2"])
// for (const course of courses) {
//   console.log(getNode('SUMMARY', course).textContent);
//   const room = getNode('LOCATION', course).textContent;
// }

on('.btn-schedule', 'click', (btn) => {
  const classId = btn.dataset.classId;
  const xmlDOM =  schedules[classId];
  console.log(xmlDOM);
})

// localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme'));

console.log('Start');

fetch('https://swapi.dev/api/films')
  .then(response => {
    console.log('Response available', response.status);
    return response.json();
  })
  .then(movies => {
    for (const movie of movies.results) {
      console.log(movie.title);
    }
  })

console.log('Continuing execution');


