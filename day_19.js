// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let cache = {};
    str = str.toLowerCase();
    str = str.split('')
    for(let i = 0; i < str.length; i++){
      if(cache[str[i]] == 1){
        return false
      }else{
        cache[str[i]] = 1
      }
    }
    return true
  }
//use set function to determine if the str is unique by comparing the length of the new
//set with the original length
  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    return arr.filter((item,index) =>{
      return index%2 ==0
    })
  }

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    return array.reduce((sum,current)=>{
      return sum += current
    },0)%2 === 0 ? "even":"odd"
 }