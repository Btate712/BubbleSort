// Declare constants to avoid use of "magic numbers"
const MIN = 1;
const MAX = 100;
const ARRAY_SIZE = 7;
const DELAY = 1000;
const CHECK = 1;
const SWAP = 2;
const SWAPPED = 3;
const SORTED_TO = 4;
const COMPLETE = 5;
const NEW_PASS = 6;

let unsortedArray = [];

// Get main element from DOM
const main = document.getElementsByTagName("main")[0];

randomizeArray(unsortedArray);

// display the unsorted array and the bubble sort pseudocode
// display the array in the DOM
showArray(unsortedArray);

function startSort() {
  document.getElementById("start-button").remove();
  const {sortedArray, sortingSteps} = bubbleSort(unsortedArray);
  stepThroughSort(unsortedArray, sortingSteps);
}

// Functions:
function repeat() {
  unsortedArray = [];
  randomizeArray(unsortedArray);
  startSort();
}

// populate array with random numbers
function randomizeArray(array) {
  for(i = 0; i < ARRAY_SIZE; i++) {
    array.push(randomInt(MIN, MAX));
  }
}
// step through sort 
function stepThroughSort(unsortedArray, steps) {
  const localArray = [...unsortedArray];
  let stepCounter = 0;
  const interval = setInterval(showStep, DELAY);
  
  function showStep() {
    const currentStep = steps[stepCounter];
    const {position, operation} = currentStep;
    let i;
    showArray(localArray);
    switch(operation) {
      case NEW_PASS:
        showMessage(`Starting pass #${position + 1}.`);
        break;
      case CHECK:
        document.getElementById(`array-element-${position}`).classList.add("checking");
        document.getElementById(`array-element-${position + 1}`).classList.add("checking");
        showMessage(`Checking position ${position} and position ${position + 1}.`);
        break;
      case SWAP:
        document.getElementById(`array-element-${position}`).classList.add("swapping");
        document.getElementById(`array-element-${position + 1}`).classList.add("swapping");
        showMessage(`${localArray[position]} is greater than ${localArray[position + 1]}. Swapping positions ${position} and ${position + 1}.`);
        // perform swap on local array
        const temp = localArray[position];
        localArray[position] = localArray[position + 1];
        localArray[position + 1] = temp;
        break;
        case SWAPPED:
          document.getElementById(`array-element-${position}`).classList.add("swapped");
          document.getElementById(`array-element-${position + 1}`).classList.add("swapped");
          showMessage(`${localArray[position + 1]} is greater than ${localArray[position]}. Swapping positions ${position} and ${position + 1}.`);
          break;
      case SORTED_TO:
        for(i = position; i < localArray.length; i++) {
          document.getElementById(`array-element-${i}`).classList.add("sorted");
          document.getElementById(`array-element-${i}`).classList.add("sorted");
        }
        if(position == localArray.length - 1) {
          showMessage(`Array is sorted for element ${position}. We no longer need to check this position.`);
        } else {
          showMessage(`Array is sorted for elements between position ${position} and the end of the array. We no longer need to check these positions.`);
        }
        break;
      case COMPLETE:
        for(i = 0; i < localArray.length; i++) {
          document.getElementById(`array-element-${i}`).classList.add("sorted");
        }
        showMessage("Sorting Complete!");
        break;
    }
    stepCounter++;
    if(stepCounter >= steps.length) {
      clearInterval(interval);
      showRepeatButton();
    }
  }
}

// show message
function showMessage(message) {
  const messageHTML = document.createElement("div");
  messageHTML.id = "message";
  messageHTML.innerHTML = message;
  main.appendChild(messageHTML);
}

// bubble sort
function bubbleSort(numbers) {
  const array = [...numbers];
  const n = array.length; 
  const sortingSteps = [];
  
  // perform a bubble sort on the array and store the steps performed on the sort
  for (let i = 0; i < n-1; i++) {
    sortingSteps.push({
      operation: NEW_PASS,
      position: i
    });
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
        sortingSteps.push({
          operation: SWAPPED,
          position: j
        });
      }
    }
    sortingSteps.push({
      operation: SORTED_TO,
      position: n - i - 1
    });
    sortingSteps.push({
      operation: SORTED_TO,
      position: n - i - 1
    });
  }
  sortingSteps.push({
    operation: COMPLETE,
    position: 0
  })
  return {sortingSteps: sortingSteps, sortedArray: array};
}

function showRepeatButton() {
  const button = document.createElement("button");
  button.id = "start-button";
  button.textContent = "Do It Again!";
  button.onclick = repeat;
  document.getElementsByTagName("body")[0].appendChild(button);
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