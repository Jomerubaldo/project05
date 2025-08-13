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

  const userInput = document.createTextNode(getValue);

  // Create mark as done function
  // Need to fix it
  const markDone = document.createElement('button');
  markDone.textContent = 'Done';
  markDone.style.marginLeft = '15px;';

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
  // Display button remove
  node.appendChild(userInput);
  node.appendChild(removeButton);

  // Get all input then display id listText
  document.querySelector('#listText').appendChild(node);

  // clear input text every add text
  input.value = '';
}

// i want to create button and when button is clicked the function run the item in list mark as done or using del in html tag
