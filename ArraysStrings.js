/*
PROBLEM: Implment an algo to determine if a string has all unique charecters. What if you cannot use additional data structures ?

STRATEGEY:
1. split the string to make it an Array
2. with a fast pointer iterate through the arry checking to see if there are any dups

TIME COMPLEXITY:
ON^2
*/

//BRUTE FORCE 0N^2
// const checkUnique = (str) => {
//   let arr = str.split(''),
//   fast = 0,
//   current = arr[0],
//   final = true;

//   while (fast < arr.length) {
//     console.log(fast);
//     for (var i = fast; i < arr.length; i++) {
//       if (current === arr[i]) {
//         final = false;
//       }
//     }
//     fast++;
//   }
//   return final;
// };

const checkUnique = (str) => {
  let arr = str.split('').sort(),
  fast = 1,
  slow = 0,
  current = arr[0],
  final = true;

  while (fast < arr.length) {
    if (arr[slow] === arr[fast]) {
      final = false;
    }
    fast++;
    slow++;
  }
  return final;
};

checkUnique('ak');


/*
PROBLEM: Given two strings write a method to decide if one is a permution of the other

STRAT:

*/

const permutionCheck = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let sorted1 = str1.sort();
  let sorted2 = str2.sort();

  if(sorted1 !== sorted2) {
    return false;
  } else {
    return true;
  }
};




permutationCreator('asdfasdf', 3)
