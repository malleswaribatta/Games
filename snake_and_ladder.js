function dice(range) {
  return Math.ceil(Math.random() * range);
}

function snakes(position) {
  switch (position) {
    case 28: return 10;
    case 37: return 3;
    case 48: return 16;
    case 75: return 32;
    case 94: return 71;
    case 96: return 42;
  }

  return position;
}

function ladders(position) {
  switch (position) {
    case 4: return 56;
    case 12: return 50;
    case 14: return 55;
    case 22: return 58;
    case 41: return 79;
    case 54: return 88;
  }

  return position;
}

function __safeLocation(position) {
  const snakeLocation = snakes(position);

  if (snakeLocation === position) {
    return ladders(playerLocation);
  }

  return snakeLocation;
}

function player(playerLocation, lable) {
  console.log(lable + ": your turn");

  if (prompt("Roll dice 🎲", 'Press Return')) {
    const diceValue = dice(6);
    const currentPosition = playerLocation;
    playerLocation += diceValue;
    playerLocation = snakes(playerLocation);

    if (playerLocation > 100) {
      playerLocation = currentPosition;
      console.log("Dice Value:", diceValue);
      console.log('"exceed ---> your at same position"');
      console.log("Your previous position:", currentPosition + "\n\n");
      console.log("Your current position:", currentPosition + "\n\n");
      return playerLocation
    }

    console.log("Dice Value:", diceValue);
    console.log("Your previous position:", currentPosition + "\n");
    console.log("Your current position:", playerLocation + "\n");

    if (diceValue === 6) {
      console.log("again " + lable + "\n");

      return player(playerLocation, lable);
    }
  }

  return playerLocation;
}

function snakeAndLadder(player1Location, player2Location, count, player1Name, player2Name) {
  if (player1Location === 100) {
    return '    🎊🎉' + player1Name + ' wins👏🎊🥳' + "\n\n--------Game over--------";
  }

  if (player2Location === 100) {
    return '    🎊🎉' + player2Name + ' wins👏🎊🥳' + "\n\n--------Game over--------";
  }

  console.log("--------------------------------------------\n");

  player1Location = player(player1Location, player1Name);

  player2Location = player(player2Location, player2Name);

  return snakeAndLadder(player1Location, player2Location, count + 1, player1Name, player2Name);
}

function help() {
  console.log(" Be careful  with 🐍🐍🐍 at 28 37 48 75 94 96\n🪜🪜🪜 at 4 12 14 22 41 54");
  choice();
}

function quit() {
  return 'your exiting from the game.......';
}

function choice() {
  console.log("1.Help\n2.Play\n3.Quit");

  switch (+(prompt("Enter ur choice:"))) {
    case 1: help();
    case 2: console.log(__snakeAndLadder());
    case 3: return quit();
  }
}

function __snakeAndLadder() {
  const player1Name = prompt("Enter player1 name:");
  const player2Name = prompt("Enter player2 name:");

  console.log("-------------GAME STARTS NOW-------------");

  return snakeAndLadder(0, 0, 1, player1Name, player2Name);
}

console.log(choice());
