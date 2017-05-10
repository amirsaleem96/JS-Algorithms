/*
 Problem Name :Isograms
 Difficulty : 7 kyu
 Source : Codewars
 --------------------------------------------------

 An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

 --------------------------------------------------
 Solution
 --------------------------------------------------
*/
function isIsogram(str){
 // convert the given string into lower case
  var lower = str.toLowerCase();
 // convert lower case string into an array
  var str_array = lower.split('');
  // compare characters in a given string
  for(let i = 0; i < lower.length; i++){
   for(let j = i+1; j < lower.length; j++){
   // if characters mathced, it is not an isogram
     if(str_array[i] == str_array[j]){
       return false
     }
    }
   }
   return true;
  //...
}
