/*
 Problem Name : Does my number look big in this
 Difficulty : 6 kyu
 Source : codewars
 --------------------------------------------------

 A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

 --------------------------------------------------
  Solution
 --------------------------------------------------
*/
function narcissistic(value) {
  // convert value into array
  var str = value.toString().split('');
  // calculate string length to get power
  var pow = str.length;
  // initialize empty array to hold values
  var mul = [];
  var sum = 0;
  // loop through the string array
  for(let i = 0; i < str.length; i++){
   mul[i] = Math.pow(str[i],pow);
   mul[i] = parseInt(mul[i], 10);
   sum = sum + mul[i];
  }
  // return if number is Narcissistic
  return sum == value;
}
