function delay() {
  for (let i = 0; i < 1000000000; i++) {}
}

function car(string, carIndex, strIndex, newString) {
  if (strIndex > string.length - 1) {
    return newString;
  }
  
  if (strIndex === carIndex) {
    newString += "ō͡≡o˞̶";
  }
  
  newString += string[strIndex];
  
  return car(string, carIndex, strIndex + 1, newString);
}

function main(string) {
  for (let i = 0; i < string.length - 1; i++) {
    console.log(car(string, i, 0, ''));
    delay();
    console.clear();
    console.log(building);
  } 
}

function repeat(string, numberOfTimes) {
  if (numberOfTimes === 0) {
    return '';
  }

  return string + repeat(string, numberOfTimes - 1);
}

let line = ' __ ';
let oneBlock = '|""|'
let twoBlocks = '|""|'; 
let building = repeat(line, 13) + "\n" + repeat(twoBlocks, 13) + "\n" + repeat(twoBlocks, 13);
let string = "";

for (let i =0; i < 50; i++) {
  string += "_";
}
let newString = "";

main(string)
