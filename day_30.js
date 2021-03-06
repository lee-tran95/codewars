// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata
function shortcut (string) {
    return string.replace(/[aeiou]/g,'');
  }

//   You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//   Examples:
//   strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
  
//   Concatenate the consecutive strings of strarr by 2, we get:
  
//   treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
//   folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
//   trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
//   blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
//   abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
  
//   Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
//   The first that came is "folingtrashy" so 
//   longest_consec(strarr, 2) should return "folingtrashy".
  
//   In the same way:
//   longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//   n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).
  
//   Note
//   consecutive strings : follow one after another without an interruption
function longestConsec(strarr, k) {
    let longest = '';
    for(let i = 0; k > 0 && i <= strarr.length-k; i++){
      let tempArray = strarr.slice(i,i+k);
      let tempString = tempArray.join('')
      if(tempString.length > longest.length){
        longest = tempString;
      }
    }
    return longest;
  }
//   Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//   For example:
  
//   solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//   solution(null); // should return []
function solution(nums){
    if(nums == null){
      return []
    }
    return nums.sort((a,b) => a - b)
  }