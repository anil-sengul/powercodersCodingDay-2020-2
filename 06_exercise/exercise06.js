/* 
an array of the weeksdays written out. You must use a switch, not if/else.

Example: <br>
Input: [1,4,6,3,2] <br>
Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

Estimated time: 30 minutes <br>
Total points: 30
*/
function NumberOfdaysToStringDays(inputArray) {
  var outputArray = [];
  array.forEach((element) => {
    switch (element) {
      case 1:
        outputArray.push("Monday");
        break;
      case 2:
        outputArray.push("Tuesday");
        break;
      case 3:
        outputArray.push("Wednesday");
        break;
      case 4:
        outputArray.push("Thursday");
        break;
      case 5:
        outputArray.push("Friday");
        break;
      case 6:
        outputArray.push("Saturday");
        break;
      case 6:
        outputArray.push("Sunday");
        break;

      default:
        outputArray.push("Unexpected Input");
        break;
    }
  });

  return outputArray;
}

var array = [1, 4, 6, 3, 2];
array = NumberOfdaysToStringDays(array);
console.log(array);
