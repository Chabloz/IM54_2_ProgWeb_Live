import { getNode, getNodes, cloneTemplate, forEach, on } from './utils/dom.js';
import { strToDate, dateToFrCh, dateToHours } from './utils/date.js';
import { schedules } from './utils/schedule.js';


const courses = getNodes('VEVENT', schedules["M54-2"])
for (const course of courses) {
  console.log(getNode('SUMMARY', course).textContent);
  // console.log(getNode('LOCATION', course).textContent);
}

// localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme'));


