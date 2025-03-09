// Get DOM elements
const countElement = document.getElementById('count');
const totalCountElement = document.getElementById('totalCount');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

// Initialize counts
let count = 0;
let totalCount = parseInt(localStorage.getItem('totalCount')) || 0;

// Update the display
function updateDisplay() {
  countElement.textContent = count;
  totalCountElement.textContent = `Total: ${totalCount}`;
}

// Increment the count
incrementButton.addEventListener('click', () => {
  count++;
  totalCount++;
  updateDisplay();
  localStorage.setItem('totalCount', totalCount);
});

// Reset the count
resetButton.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Load the total count from local storage when the page loads
updateDisplay();