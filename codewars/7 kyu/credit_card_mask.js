/*
 Problem Name : Credit Card Mask
 Difficulty : 7 kyu
 Source : codewars
 ----------------------------------------------------

 Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
 Your task is to write a function maskify, which changes all but the last four characters into '#'.

 ----------------------------------------------------
  Solution
 ----------------------------------------------------
*/
function maskify(cc) {
  var str_arr = cc.split(''); // conver string into array
  var len = str_arr.length; // get length of array
  // convert all characters into '#' except last four digits
  for(let i = 0; i < len - 4; i++){
   str_arr[i] = '#';
  }
  // revert the array into string like view
  var fin = str_arr.join('');
  // return the final result
  return(fin);
}
