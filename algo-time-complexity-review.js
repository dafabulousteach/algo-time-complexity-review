/////////// Prompt 1 ///////////
/////////// time complexity: Linear
function findMax(array){
  var max = -Infinity; // the length of the array determines the problem size
  for (var i = 0; i < array.length; i++){ // this points to a linear time complexity
    if (array[i] > max){
      max = array[i];
    }
  }
  return max; 
}


/////////// Prompt 2 ///////////
/////////// time complexity: Linear
function contains(array, target){
  return array.indexOf(target) > -1; // the length of the array determines the problem size
}


/////////// Prompt 3 ///////////
/////////// time complexity: Linear
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1; // the length of the array determines the problem size
}


/////////// Prompt 4 ///////////
/////////// time complexity: Constant
function square(array){
  for (var i = 0; i < 3; i++){ // The loop only needs to be done 3 times, even if the array is 100
    array[i] = array[i] * array[i];
  }
  return array;
}

/////////// Prompt 5 ///////////
/////////// time complexity: Linear
function repeat(array){
  var repeat = [];
  for (var j = 0; j < 10; j++){ // 10 loops; this makes happen only 10 times.
    repeat[j] = []; // Do this 1 time
    for (var i = 0; i < array.length; i++){ // n
      repeat[j].push(array[i]); // 1
    }
  }
  return repeat; 
}
//what if we replace 10 with a parameter? 


/////////// Prompt 6 ///////////
/////////// time complexity: Linear
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (var i = num1; i > 1; i--){ // we're only iterating over num1 <-- this is our problem size
    if (num1 % i === 0 && num2 % i === 0){
      return i;
    }
  }
  return 1;
}


/////////// Prompt 7 ///////////
/////////// time complexity: Quadratic
function countChar(string){
  var counts = {};
  var currChar, currCharCount;
  for (var i = 0; i < string.length; i++){ // this is n
    currChar = string[i];
    currCharCount = 1;
    for (var j = i+1; j < string.length; j++){ // this is repeated n-(i+1)
      if (currChar === string[j]){
        currCharCount++;
      }
    }
    if (!counts.hasOwnProperty(currChar)){
      counts[currChar] = currCharCount;
    }
  }
  return counts;
}


/////////// Prompt 8 ///////////
/////////// time complexity: 
var factorial = function(num){
  if (num < 0){
    return;
  }
  if (num === 0 || num === 1){
    return 1; 
  } else {
    return num * factorial(num-1);
  }
}


/////////// Prompt 9 ///////////
/////////// time complexity: Constant, there is always three plays and always 5 minutes
function tournament(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    results = hotPotato(players); 
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes, 
    //the player in each room holding the potato is the winner 
    //and all winners get teleported to the results array 
    return tournament(results);
  }
}


/////////// Prompt 10 ///////////
/////////// time complexity: logrithmic with base 4 cuz you're dividing by 4 every time
function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]])); 
      //assume hotPotato is a function where 
      //the three players at a time must play hot potato for 5 minutes. 
      //the player in the room holding the potato is the winner
      //and gets returned from the function 
    }
    return tournament(results);
  }
}


/////////// Prompt 11 ///////////
/////////// time complexity: Exponential
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){
      results.push(currentAttempt.join(""));
    }
    if (currentAttempt.length <= maxLength){
      for (var i = 0; i < allowedChars.length; i++){
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}


/////////// Prompt 12 ///////////
/////////// time complexity: Constant
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children 
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates); 
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    } 
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    } 
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}







