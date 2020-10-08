/* 
Write a function called *getFirstValue*. Pass an array of strings to the function, 
which sorts the strings alphabetically and returns the last element.

Example: <br>
Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
Output: Wednesday

Estimated time: 15 minutes <br>
Total points: 15 

*/

var days = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];
function getFirstValue(array) {
  array.sort();
  return days[days.length - 1];
}

console.log(getFirstValue(days));
