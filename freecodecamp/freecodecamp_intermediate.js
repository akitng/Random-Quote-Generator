// Diff Two Arrays
// Compare two arrays and return a new array with any items
// only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two
// arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  // Looping through arr1 to find elements that do not exist in arr2
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      // Pushing the unique to arr1 elements to the newArr
      newArr.push(arr1[i]);
    }
  }
  // Looping through arr2 to find elements that do not exist in arr1
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      // Pushing the unique to arr2 elements to the newArr
      newArr.push(arr2[j]);
    }
  }
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  //[4]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) // ["piglet", 4]

//-----------------------------------------------------------
// Sum All Numbers in a Range
// An array of two numbers will be passed.  Return the
// sum of those two numbers and all numbers between them.
/*
function sumAll(arr) {
  var rangeOfNumbers = [];
  var smallest = Math.min.apply(0, arr);
  var largest = Math.max.apply(0, arr);
  console.log(smallest);
  console.log(largest);

  for (var i = smallest; i <= largest; i++) {
    rangeOfNumbers.push(i);
  }
  console.log(rangeOfNumbers);
  var sum = rangeOfNumbers.reduce(function(a, b) {
            return a + b;
            }, 0);
  console.log(sum);
}
sumAll([1, 4]);  //10
*/
