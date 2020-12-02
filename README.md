# BubbleSort
Visually illustrates the bubble sort algorithm step-by-step on an array of random integers.

To run this code, clone the repository using `git clone` and open the html file in your browser
using `open bubblesort.html`.

A bubble sort makes multiple passes on an array. Each pass goes as follows:
The algorithm checks each value against the next value. The check being perfromed depends 
on the "direction" of the sort. If the items in the array are being sorted in ascending order, 
the check will be to determine if the first value is greater than the second value. If the
sort is in descending order, the check will be "less than." If the check passes, the items are
swapped. Once a pass is complete, the last item checked in that pass is known to be in its final 
sorted location, so that item will no longer be checked on future passes.

In order to visually animate the sort, I first added code to the sorting algorithm to keep track 
of all comparisons and swaps in the order they were performed. Each comparison and swap is stored
as an object literal consisting of an operation and a position. These object literals are pushed
onto an array in the order that the operation was performed. After the sorting algorithm is complete,
the array of operations is fed into the `stepThroughSort()` function which displays the array and
provides messages and hilighting to show what comparisons and swaps are being made. Timing for 
the animation is provided by the `setInterval()` function.

Technologies used:
Basic HTML, CSS, and JavaScript

