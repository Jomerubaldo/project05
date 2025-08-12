const countValue = document.querySelector('#count');
const addButton = document.querySelector('#add');
const minusButton = document.querySelector('#minus');

let count = 0;

addButton.addEventListener('click', myAddFunction);
function myAddFunction() {
  count++;
  countValue.innerText = count;
}

minusButton.addEventListener('click', myMinusFunction);
function myMinusFunction() {
  count--;
  countValue.innerText = count;
}
