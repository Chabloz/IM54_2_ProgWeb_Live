import { delegateOn, getNode, on } from '../utils/dom.js';

const tmplItem = getNode('.item', getNode('#item-template').content).cloneNode(true);

on('#add-item-form', 'submit', (form, event) => {
  event.preventDefault();
  const labelItem = getNode('#item-name').value
  getNode('#item-name').value = '';
  const clone = tmplItem.cloneNode(true);
  getNode('.item-name', clone).textContent = labelItem;
  getNode('#tier-s').append(clone);
});

delegateOn('#tiers', '[data-action="delete"]', 'click', (el, trgt) => {
  const card = el.closest('.item');
  card.remove();
})