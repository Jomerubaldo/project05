// Get reference
const input = document.querySelector('#inputText');
const button = document.querySelector('#addText');
const list = document.querySelector('#listText');

// Function
button.addEventListener('click', myFunction);
function myFunction() {
  // Create li list
  const node = document.createElement('li');

  // Get user input value
  const getValue = input.value;

  // Do the function if user have value else show alert message
  if (getValue) {
    // Get user value and createTextNode
    const getuserinput = document.createTextNode(getValue);

    // Get uservalue with li and display using appendChild
    node.appendChild(getuserinput);

    // Get main list id and display the final value
    document.querySelector('#listText').appendChild(node);

    // clear input text every add text
    input.value = '';

    // click without value show alert message
  } else {
    alert('Please Enter Text');
  }
}
