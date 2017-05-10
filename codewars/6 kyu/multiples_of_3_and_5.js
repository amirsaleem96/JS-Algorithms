/*

Problem Name : Multiples of 3 and 5
Difficulty : 6 kyu
Source : codewars
------------------------------------------------
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

----------------------------------------------
Solution
----------------------------------------------
*/

function solution(number){
  // array to store multiples of 3 and 5
  var multiples = [];
  // initialized sum variable with 0
  var sum = 0;
  var k = 0;
  // loop through the series
  for(let i = 1; i < number; i++){
   // if a number is a multiple of 3 or 5
   if(i%3 == 0 || i%5 == 0){
   // insert that number in multiples[] array
    multiples[k] = i;
   // add that number to sum
    sum = sum + multiples[k];
   // increment k by 1
    k++;
   }
  }
  return sum;
}
