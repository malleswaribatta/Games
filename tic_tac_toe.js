function isSubSet(set, subSet, setIndex, subSetIndex, count) {
  let newSetIndex = setIndex;
  let newSubSetIndex = subSetIndex;

  if (newSubSetIndex > subSet.length - 1) {
    return count === 3;
  }

  let newCount = count;

  if (set[newSetIndex] === subSet[newSubSetIndex]) {
    newCount = count + 1;
    return isSubSet(set, subSet, 0, newSubSetIndex + 1, newCount);
  }


  if (newSetIndex === set.length - 1) {
    newSubSetIndex += 1;
    newSetIndex = -1;
  }

  return isSubSet(set, subSet, newSetIndex + 1, newSubSetIndex, newCount);
} 

function winningSet(winningPosibility) {
  switch(winningPosibility) {
    case 0: return "123";
    case 1: return "456";
    case 2: return "789";
    case 3: return "147";
    case 4: return "258";
    case 5: return "369";
    case 6: return "159";
    case 7: return "357";
  }
}

function isMatch(subSet) {
  for (let i = 0; i < 8; i++) {
    if (isSubSet(winningSet(i), subSet, 0, 0, 0)) {
      return true;
    } 
  }

  return false;  
}

// console.log(isMatch("123"));

// ---------------box----------

function repeat(string, numberOfTimes) {
  if (numberOfTimes === 0) {
    return '';
  }

  return string + repeat(string, numberOfTimes - 1);
}


function getBox(tableLocation, count, string) {
  if (tableLocation > 9) {
    return string;
  }

  let lable = tableLocation;

  string += " " + lable + " " + "│";

  if (tableLocation % 3 === 0) {
    string += "\n" + repeat("─", 13) + "\n";
  }

  return getBox(tableLocation + 1, count + 1, string);
}

function readBox(box, userValue, index, updatedBox, count, symbol) {
  if (index === box.length) {
    return updatedBox;
  }


  if (box[index] === userValue) {
    updatedBox += symbol;
    index++;
  }

  updatedBox += box[index];

  return readBox(box, userValue, index + 1, updatedBox, count + 1, symbol);
}

function isValidInput(input) {
  if (input > 9) {
    console.log("invalid");
    return false;
  }

  for (let index = 0; index < player1Input.length; index++) {
    if (player1Input[index] === input || player2Input[index] === input) {
      console.log("invalid");
      return false;
    }
  }

  return true;
}

function readInput() {
  const input = prompt("enter ur choice:");
  if (!isValidInput(+input)) {
    return readInput();
  }

  if (!isValidInput(input)) {
    return readInput();
  }

  return input;
}

let player1Input = '';
let player2Input = '';

function getSymbol(userValue, count) {
  let symbol = "O";
  
  if (count % 2 === 0) {
    symbol = "X";
    player2Input += userValue;
  }

  if (symbol === "O") {
    player1Input += userValue;
  }

  return symbol;
}

function ticTacToe(tableLocation, box, count) {
  if (tableLocation > 10) {
    return '';
  }

  console.log(box);
  let userValue = readInput();

  const symbol = getSymbol(userValue, count);

  if (isMatch(player1Input)) {
    return 'player1 win';
  }  

  if (isMatch(player2Input)) {
    return 'player2 win';
  }

  const newBox = readBox(box, userValue, 0, '', 1, symbol);

  return ticTacToe(tableLocation + 1, newBox, count + 1);
}

let box = getBox(1, 1, '');

console.log(ticTacToe(1, box, 1));
