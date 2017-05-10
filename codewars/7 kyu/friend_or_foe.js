/*
 Problem Name : Friend or Foe
 Difficulty : 7 kyu
 Source : codewars
 ----------------------------------------------------

 Make a program that filters a list of strings and returns a list with only your friends name in it.
 If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!

 ----------------------------------------------------
  Solution
 ----------------------------------------------------
*/

function friend(friends){
  function onlyFriend(val){
    return val.length  ==  4;
  }
  return friends.filter(onlyFriend);;
}
