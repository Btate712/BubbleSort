// Declare constants to avoid use of "magic numbers"
const MIN = 1;
const MAX = 100;
const ARRAY_SIZE = 10;
const DELAY = 1000;
const CHECK = 1;
const SWAP = 2;
const SORTED_TO = 3;

const unsortedArray = [];

// Get main element from DOM
const main = document.getElementsByTagName("main")[0];

// poulate unsortedArray array with random numbers
for(i = 0; i < ARRAY_SIZE; i++) {
  unsortedArray.push(randomInt(MIN, MAX));
}
// display the unsorted array and the bubble sort pseudocode
// display the array in the DOM
showArray(unsortedArray);
const {sortedArray, sortingSteps} = bubbleSort(unsortedArray);

stepThroughSort(unsortedArray, sortingSteps);

// Functions:
// step through sort 
function stepThroughSort(unsortedArray, steps) {
  const localArray = [...unsortedArray];
  let stepCounter = 0;
  setInterval(showStep, DELAY);
  
  function showStep() {
    const currentStep = steps[stepCounter];
    showArray(localArray);
    switch(currentStep.operation) {
      case CHECK:
        const { position } = currentStep;
        document.getElementById(`array-element-${position}`).classList.add("checking");
        document.getElementById(`array-element-${position + 1}`).classList.add("checking");
        console.log(`Checking position ${position}: ${localArray[position]} and position ${position + 1}: ${localArray[position + 1]}`)
        break;
    }
    console.log(steps[stepCounter]);
    stepCounter++;
  }
}

// bubble sort
function bubbleSort(numbers) {
  const array = [...numbers];
  const n = array.length; 
  const sortingSteps = [];
  
  // perform a bubble sort on the array and store the steps performed on the sort
  for (let i = 0; i < n-1; i++) {
    sortingSteps.push(`Pass #${i + 1}`);
    for (let j = 0; j < n-i-1; j++) {
      sortingSteps.push({
        operation: CHECK,
        position: j
      });
      if (array[j] > array[j+1]) { 
        // swap array[j+1] and array[j] 
        let temp = array[j]; 
        array[j] = array[j+1]; 
        array[j+1] = temp; 
        sortingSteps.push({
          operation: SWAP,
          position: j
        });
      }
    }
    sortingSteps.push({
      operation: SORTED_TO,
      position: n - i - 1
    });
  }
  console.log({sortingSteps: sortingSteps, sortedArray: array});
  return {sortingSteps: sortingSteps, sortedArray: array};
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
// and explaining the step performed as each line of pseudocode is 
// performed.