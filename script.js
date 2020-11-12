// Declare constants to avoid use of "magic numbers"
const MIN = 1;
const MAX = 100;
const ARRAY_SIZE = 15;

let numbers = [];

// Get main element from DOM
main = document.getElementsByTagName("main")[0];

// poulate numbers array with random numbers
for(i = 0; i < ARRAY_SIZE; i++) {
  numbers.push(randomInt(MIN, MAX));
}
// display the unsorted array and the bubble sort pseudocode
// display the array in the DOM
console.log(numbers);
showArray(numbers);
numbers = bubbleSort(numbers);
showArray(numbers);

// Functions:

// bubble sort
function bubbleSort(numbers) {
  const array = [...numbers];
  const n = array.length; 

  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (array[j] > array[j+1]) { 
        // swap array[j+1] and array[j] 
        console.log(`Swapping elements ${j}: ${array[j]} and ${j + 1}: ${array[j + 1]}`);
        let temp = array[j]; 
        array[j] = array[j+1]; 
        array[j+1] = temp; 
      } 
    }
  }
  return array;
}

// generate random integers
function randomInt(min, max) {
  return min + Math.floor(Math.random() * Math.floor(max));
}

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
  main.innerHTML = "";
  main.appendChild(arrayHTML);
}
// perform a bubble sort on the array, re-rendering the display
// and explaining the step performed as each line of pseudocode is 
// performed.