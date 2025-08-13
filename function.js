// Get reference
const input = document.querySelector('#inputText');
const button = document.querySelector('#addText');
const list = document.querySelector('#listText');

// Function add
button.addEventListener('click', myFunction);
function myFunction() {
  // Create li list
  const node = document.createElement('li');

  // Get user input value
  const getValue = input.value;

  const getuserinput = document.createTextNode(getValue);

  // Create remove button ref not top need inside function
  const removeButton = document.createElement('button');
  // Create button for remove and style
  removeButton.textContent = 'Remove';
  removeButton.style.marginLeft = '15px';

  // function remove
  removeButton.addEventListener('click', () => {
    list.removeChild(node);
  });

  // Get uservalue with li and display using appendChild
  // display button remove
  node.appendChild(getuserinput);
  node.appendChild(removeButton);

  // Get all input then display id listText
  document.querySelector('#listText').appendChild(node);

  // clear input text every add text
  input.value = '';
}

// bug fixed if display button remove its remove all item list not specific
