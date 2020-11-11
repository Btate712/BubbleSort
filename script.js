// Declare constants to avoid use of "magic numbers"
const MIN = 1;
const MAX = 50;
const ARRAY_SIZE = 10;

const numbers = [];

// Test to verify script.js properly linked to index.html
main = document.getElementsByTagName("main")[0];
testLine = document.createElement("h1");
testLine.id = "test";
testLine.innerHTML = "Hello World!";
main.appendChild(testLine);

for(i = 0; i < ARRAY_SIZE; i++) {
  numbers.push(randomInt(MIN, MAX));
}
showArray(numbers);

// generate random integers and store those integers in an array
function randomInt(min, max) {
  return min + Math.floor(Math.random() * Math.floor(max));
}

// display the unsorted array and the bubble sort pseudocode
// display the array in the DOM
function showArray(array) {
  const arrayHTML = document.createElement("div");
  arrayHTML.className = "numbers";
  array.forEach((number, index) => {
    const line = document.createElement("div");
    line.id = `array-element-${index}`;
    line.innerHTML = `${index} - ${number}`;
    arrayHTML.appendChild(line); 
  });
  main.appendChild(arrayHTML);
}
// perform a bubble sort on the array, re-rendering the display
// and explaining the step performed as each line of pseudocode is 
// performed.