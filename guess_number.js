function getNumber(rangeStart, rangeEnd) {
  const number = Math.ceil(Math.random() * 200);

  if (number >= rangeStart) {
    return number;
  }

  return getNumber(rangeStart, rangeEnd);
}

function takeInput(rangeStart, rangeEnd, maxAttempts, numberOfAttempts,  actualNumber) {
  
  if (numberOfAttempts > maxAttempts) {
    return 'ur attempts are completed\nActual number:' + actualNumber;
  }
  const userNumber = +prompt("-->");
  
  if (actualNumber === userNumber) {
    return 'you won🏆';
  }

  if (userNumber > actualNumber) {
    console.log(userNumber + ' Too high! Try a lower number');
  }

  if ( userNumber < actualNumber) {
    console.log(userNumber + ' Too low! Try a higher number');
  }

  console.log("Take a guess! Remining attemts:", maxAttempts - numberOfAttempts);

  return takeInput(rangeStart, rangeEnd, maxAttempts, numberOfAttempts + 1, actualNumber);
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  const actualNumber = getNumber(rangeStart, rangeEnd);

  console.log("Total Attempts:", maxAttempts)
  console.log("\nguess a number between " + rangeStart + " and " + rangeEnd);
  return takeInput(rangeStart, rangeEnd, maxAttempts, 1, actualNumber);
}

console.log(startGame(100, 200, 7));
