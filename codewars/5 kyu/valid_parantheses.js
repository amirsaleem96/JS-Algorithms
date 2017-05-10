/*
Problem Name : Valid Parentheses
Difficulty : 5 kyu
Source : codewars
------------------------------------------------

Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples:
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

-----------------------------------------------
 Solution
-----------------------------------------------
*/

function validParentheses(parens){
  //TODO
  var left = []; // containes all '(' brackets
  var right = []; // contains all ')' brackets
  var  arr = parens.split('');
  for(let i in arr){
   if(arr[i] == '('){
    left.push(arr[i]);
   } else if(arr[i] == ')'){
    right.push(arr[i]);
    }
  }
  // check if number of brackets in left array is equal to number of brackets in right array and also the first bracket is '(' and last is ')'
  if(left.length === right.length && arr[0] === '(' && arr[arr.length-1] === ')'){
   return true;
  }
  else {
   return false;
  }
}
