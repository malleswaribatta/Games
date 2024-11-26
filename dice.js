const space = "│        │";
const twoDots = "│⚪️    ⚪️│";
const leftDot = "│⚪️      │";
const rightDot = "│      ⚪️│";
const middleDot = "│   ⚪️   │";


function getMiddle(diceValue) {
  switch (diceValue) {
    case 1: return space + "\n" + middleDot + "\n" + space;
    case 2: return space + "\n" + twoDots + "\n" + space;
    case 3: return leftDot + "\n" + middleDot + "\n" + rightDot;
    case 4: return twoDots + "\n" + space + "\n" + twoDots;
    case 5: return twoDots + "\n" + middleDot + "\n" + twoDots;
    case 6: return twoDots + "\n" + twoDots + "\n" + twoDots;
  }
}

function repeat(string, numberOfTimes) {
  if (numberOfTimes === 0) {
    return '';
  }

  return string + repeat(string, numberOfTimes - 1);
}

function delay() {
  for (let i = 0; i < 1000000000; i++) { }
}

function dice(diceValue) {
  const top = "┌" + repeat("─", 8,) + "┐";
  const middle = getMiddle(diceValue);
  const buttom = "└" + repeat("─", 8) + "┘";

  return top + "\n" + middle + "\n" + buttom;
}

function animation(value) {
  console.log(dice(2));
  delay();
  console.clear();
  console.log(dice(4));
  delay();
  console.clear();
  console.log(dice(6));
  delay();
  console.clear();
  console.log(dice(1));
  delay();
  console.clear();
  console.log(dice(3));
  delay();
  console.clear();
  console.log(dice(value));
}

animation(3);
