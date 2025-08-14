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

  // Create a another variable to get and createtextNode to display it with value
  const userInput = document.createTextNode(getValue);

  // Create button for done and style
  const markDone = document.createElement('button');
  markDone.textContent = 'Done';
  markDone.style.marginLeft = '30px';

  // Create remove button ref not top need inside function
  const removeButton = document.createElement('button');
  // Create button for remove and style
  removeButton.textContent = 'Remove';
  removeButton.style.marginLeft = '5px';

  // Create function for mark as done then show line through css design
  markDone.addEventListener('click', () => {
    node.style.textDecoration =
      node.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  });

  // function remove
  removeButton.addEventListener('click', () => {
    list.removeChild(node);
  });

  // Get uservalue with li and display using appendChild
  // Display button remove
  // Display button mark as done
  node.appendChild(userInput);
  node.appendChild(markDone);
  node.appendChild(removeButton);

  // Get all input then display id listText
  document.querySelector('#listText').appendChild(node);

  // clear input text every add text
  input.value = '';
}
