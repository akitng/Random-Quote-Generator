
//-----------------------------------------------------
// Ceasar's Cipher
// Write a function which takes a ROT13 encoded string
// as input and returns a decoded string.
/*
function rot13(str) {
  var alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var codeIndex;
  var codeLetter;
  var newMessage = "";
  for (var i = 0; i < str.length; i++) {
     var stringLetter = str.charAt(i);  // G
     var alphabetPosition = alphabet.indexOf(stringLetter); //6

     if (alphabetPosition + 13 <= alphabet.length -1 && stringLetter !== " " &&
          stringLetter !== "!" && stringLetter !== "?" && stringLetter !== ".") {
        codeIndex = alphabet.indexOf(stringLetter) + 13;  // 19
        codeLetter = alphabet.charAt(codeIndex);
        newMessage+= codeLetter;
      } else if (alphabetPosition + 13 >= alphabet.length -1 && stringLetter !== " " &&
          stringLetter !== "!" && stringLetter !== "?" && stringLetter !== ".") {
          codeIndex = alphabet.indexOf(stringLetter) - 13;
          codeLetter = alphabet.charAt(codeIndex);
          newMessage+= codeLetter;
       } else {
         newMessage += stringLetter;
       }
     }
    console.log(newMessage);
}

// Change the inputs below to test
//rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
rot13("SERR CVMMN!")
*/
//---------------------------------------------------

// Where do I belong
// Return the lowest index at which a value (second
// argument) should be inserted into an array (first
// argument) once it has been sorted.  The returned
// value should be a number.
/*
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
  return a - b;
  });
  for (var i = 0; i < arr.length + 1; i++){
    if (num >= arr[i] && num < arr[i + 1]) {
      arr.splice(i+1, 0, num);
    }
    if (num > arr[arr.length - 1]) {
     arr.push(num);
   }
  }
  return(arr.indexOf(num));
}

getIndexToIns([3, 10, 5], 3)

*/
//---------------------------------------------------

// Seek and Destroy
// You will be provided with an inital array
// followed by oneor more arguments.  Remove all
// elements from the initial aray that are the same
// value as these arguments.
/*
function destroyer(arr) {
  var myArgs = [];

  for (i =1; i < arguments.length; i++) {
    myArgs.push(arguments[i]);
  }

  return arr.filter(function(val) {
    return myArgs.indexOf(val) === -1;
  });
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1, 1]
*/
//------------------------------------------------

// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in js are false, null, 0, "",
//undefined, and NaN.
/*
function bouncer(arr) {

  function isBigEnough(value) {
    if (!isNaN(value) || value !== false ||
        value !== null || value !== 0 ||
        value !== "" || value !== undefined)  {
          return value;
    }
  }

  var filtered = arr.filter(isBigEnough);
  console.log(filtered);
  return filtered;
}

bouncer([7, "ate", "", false, 9]);
//bouncer([false, null, 0, NaN, undefined, ""])
*/

//------------------------------------------------------------

// Mutations
// Return true if the string in the first element of
// the array contains all of the letters of the string
// in the second element of the array.
/*
function mutation(arr) {
  var firstString = arr[0].toString().toLowerCase(); // makes first array item into lowercase string
  var secondString = arr[1].toString().toLowerCase();  // makes second array item into lowercase string
  var verdictArray = [];

  for (var i = 0; i <= secondString.length - 1; i++) {
    var verdict = firstString.includes(secondString.charAt(i));
    verdictArray.push(verdict);
  }

  if (verdictArray.includes(false)) {
    return false;
  } else {
    return true;
  }
}

//mutation(["hello", "hey"]);  //false
//mutation(["hello", "neo"])  //false
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);  //true
*/
//------------------------------------------------------

// Slasher Flick
// Return the remaining elements of an array after
// chopping off n elements from the head.  The head
// means the beginning of the array (zeroth index).
/*
function slasher(arr, howMany) {
  var slashed = arr.splice(howMany, arr.length);
  return slashed;
}
slasher([1, 2, 3], 2);
*/
//---------------------------------------------------------

// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
/*
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  for (var i = 0; i <= arr.length - 1; i = i + size) {
    var items = arr.slice(i, i + size);
    newArray.push(items);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/
//-------------------------------------------------------------

// Truncate a string
// Truncate a string (first argument) if it is longer than
// the max string length(second argument)
/*
function truncateString(str, num) {
  var newString;
  if (str.length > num) {
      if (num <= 3){
        newString = str.slice(0, num) + "...";
        console.log(newString);
        return newString;
      } else {
        newString = str.slice(0, num-3) + "...";
        console.log(newString);
        return newString;
      }
  } else {
      return str;
  }
}

truncateString("A-", 1);
*/
//------------------------------------------------------

// Repeat a string repeat a string
// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.
/*
function repeatStringNumTimes(str, num) {
  var stringArray = [];
    for (var i = 1; i <= num; i++) {
      stringArray.push(str);
    }
    var newString = stringArray.join("");

    if (num < 0) {
      return "";
    } else {
      return newString;
    }
}

repeatStringNumTimes("abc", 3);
*/
//---------------------------------------------------------------
// Confirm the Ending
// Check if a string (which is the first argument) ends with the
// given target string (the second argument).
/*
function confirmEnding(str, target) {
  var beginStrPosition = str.length - target.length;
  var endStrPosition = str.length-1;
  var pieceOfString = str.substr(beginStrPosition,endStrPosition);
     if (pieceOfString === target) {
       return true;
     } else{
       return false;
     }
}

confirmEnding("Bastian", "n");  //true
confirmEnding("Connor", "n"); //false
*/
//--------------------------------------------------------------------

// Return Largest Numbers in Arrays
// Return an array consisting of the Largest
// number from each provided sub-array.
// For simplicity, the provided array will
// contain exactly 4 sub-array
/*
function largestOfFour(arr) {
  var largestArray = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = Math.max.apply(null, arr[i]);
    largestArray.push(largestNumber);
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26],
              [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/
//---------------------------------------------------------------
// Title Case a Sentence
// Return the provided string with the first letter
//of each word capitalized.
//Make sure the rest of the word is in lower case.
/*
function titleCase(str) {
  var stringArray = str.split(" ");
  var newArray = [];

  for (var i = 0; i < stringArray.length; i++) {
    var newItems = stringArray[i].toLowerCase().replace(/^[a-z]/g,
      function(letter) {
        return letter.toUpperCase();}
   );
    newArray.push(newItems);
  }
  var newString = newArray.join(" ");
  console.log(newString);
}
titleCase("I'm a little teapot");
*/
//-----------------------------------------------------------------
//Returns the longest word in a string using for loop
/*
function findLongestWord(str) {
  var stringArray= str.split(" ");
  var longestWord = 0;

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= longestWord) {
      longestWord = stringArray[i].length;
    }
  }
  console.log(longestWord);
}
findLongestWord("What is the average airspeed velocity of an unladen swallow");
*/
//-----------------------------------------------------------------
//Returns the longest word in a string using
//Math.max.apply on array
/*
function findLongestWord(str) {
  var stringArray= str.split(" ");
  var arrayLength = stringArray.length;
  var newArray = [];

  for (var i = 0; i < arrayLength; i++) {
    var x = stringArray[i].length;
    newArray.push(x);
    var string = Math.max.apply(null,newArray);
  }
  console.log(string);
}
findLongestWord("The quick brown fox jumped over the lazy dog");
*/
