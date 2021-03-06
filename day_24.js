// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers){
    numbers = numbers.split(' ')
    for(let i = 0; i < numbers.length; i++){
      numbers[i] = Number(numbers[i])
    }
    console.log(numbers)
    let minimum = Math.min(...numbers)
    let maximum = Math.max(...numbers)
    return `${maximum} ${minimum}`
  }

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

//   Return the number (count) of vowels in the given string.

//   We will consider a, e, i, o, u as vowels for this Kata (but not y).
  
//   The input string will only consist of lower case letters and/or spaces.\

function getCount(str) {
    let vowelsCount = 0;
    let vowels ='aeiou'
    for(let i = 0; i < str.length; i++){
      if(vowels.indexOf(str[i]) >= 0){
        vowelsCount++
      }
    }
    return vowelsCount
  }

  function getCount(str) {
    var vowelsCount = 0;
    vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length:0;
  }

//   Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//   For example:
  
//   uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//   uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//   uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    let unique = [];
    for(let i = 0; i < iterable.length; i++){
      if(i == 0){
        unique.push(iterable[i])
      }else{
        if(iterable[i] != iterable[i-1]){
          unique.push(iterable[i])
        }
      }
    }
    return unique
  }