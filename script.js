// Declare constants to avoid use of "magic numbers"
const MIN = 1;
const MAX = 50;

// Test to verify script.js properly linked to index.html
main = document.getElementsByTagName("main")[0];
testLine = document.createElement("h1");
testLine.id = "test";
testLine.innerHTML = "Hello World!";
main.appendChild(testLine);

// test randomInt() in the console
for(i = 0; i < 10; i++) {
  console.log(randomInt(MIN, MAX));
}

// generate 10 random integers and store those integers in an array
function randomInt(min, max) {
  return min + Math.floor(Math.random() * Math.floor(max));
}
// display the unsorted array and the bubble sort pseudocode

// perform a bubble sort on the array, re-rendering the display
// and explaining the step performed as each line of pseudocode is 
// performed.