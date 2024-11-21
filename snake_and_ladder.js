//----------board--------------
function repeat(lable, limit, string) {
  for (let i = limit; i > 0; i--) {
    for (let j = 0; j < 7; j++) {
      string += lable;
    }
    string += "+";
  }

  return string;
}

function boxs(userValue, playerLocation2, rowValue, series, player1Symbol,
   player2Symbol) {
  if (rowValue === 0) {
    return "+" + repeat("-", 10, '');
  }

  const a = getRow(userValue, playerLocation2, 10, '', series, player1Symbol,
     player2Symbol) + "|";

  return "+" + repeat("-", 10, '') + "\n" + a + "\n" + boxs(userValue,
     playerLocation2, rowValue - 1, series + 10, player1Symbol, player2Symbol);
}

function getRow(userValue, playerLocation2, column, box, series, player1Symbol,
   player2Symbol) {
  if (column === 0) {
    return box;
  }

  let lable = series;

  if (series === 1) {
    lable = "➡️";
  }

  if (series === 28 || series === 37 || series === 48 || series === 75 || series === 94 || series === 96) {
    lable = "🐍";
  }

  if (series === 4 || series === 12 || series === 14 || series === 22 ||
    series === 41 || series === 54) {
    lable = "🪜";
  }

  if (series === 100) {
    lable = "🏆";
  }

  if (series === playerLocation2 && series === userValue && userValue !== 0) {
    box += "|  " +  player1Symbol + player2Symbol + "  ";

    return getRow(userValue, playerLocation2, column - 1, box, series + 1, player1Symbol, player2Symbol);
  }

  if (series === userValue) {
    box += "|   " + player1Symbol + "  ";

    return getRow(userValue, playerLocation2, column - 1, box, series + 1, player1Symbol, player2Symbol);
  }

  if (series === playerLocation2) {
    box += "|   " + player2Symbol + "  ";

    return getRow(userValue, playerLocation2, column - 1, box, series + 1, player1Symbol, player2Symbol);
  }

  if (series < 10) {
    lable = "0" + series;
  }

  box += "|   " + lable + "  ";

  return getRow(userValue, playerLocation2, column - 1, box, series + 1,
     player1Symbol, player2Symbol);
}

//------------game----------
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

function player(playerLocation, playerLocation2,lable, player1Symbol,
   player2Symbol) {
  console.log(lable + ": your turn");
  
  if (prompt("Roll dice 🎲", 'Press Return')) {
    const diceValue = dice(6);
    const currentPosition = playerLocation;
    playerLocation += diceValue;
    playerLocation = snakes(playerLocation);
    
    if (playerLocation > 100) {
      playerLocation = currentPosition;
      
      return playerLocation
    }
    
    console.log("Dice Value:", diceValue);
    console.log("Your previous position:", currentPosition + "\n\n");
    console.log("Your current position:", playerLocation + "\n\n");
    
    if (diceValue === 6) {
      console.log(boxs(playerLocation, playerLocation2, 10, 1, player1Symbol, player2Symbol));

      return player(playerLocation, playerLocation2,  lable, player1Symbol,
        player2Symbol);
      
    }
  }
  
  console.log(boxs(playerLocation, playerLocation2, 10, 1, player1Symbol, player2Symbol));
  
  return playerLocation;
}

function snakeAndLadder(player1Location, player2Location, count, player1Name, 
  player2Name, player1Symbol, player2Symbol) {
  if (player1Location === 100) {
    return '    🎊🎉' + player1Name + ' wins👏🎊🥳' + "\n\n--------Game over--------";
  }
  
  if (player2Location === 100) {
    return '    🎊🎉' + player2Name + ' wins👏🎊🥳' + "\n\n--------Game over--------";
  }
  
  player1Location = player(player1Location, player2Location, player1Name, 
    player1Symbol, player2Symbol);
  
  player2Location = player(player2Location, player1Location, player2Name,
     player2Symbol, player1Symbol);
  
  return snakeAndLadder(player1Location, player2Location, count + 1,
     player1Name, player2Name, player1Symbol, player2Symbol);
}

function help() {
  console.log(" Be careful  with 🐍🐍🐍 at 28 37 48 75 94 96\n");
  console.log("🪜🪜🪜 at 4 12 14 22 41 54\n");
  return choice();
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

  return console.close();
}

function __snakeAndLadder() {
  const player1Name = prompt("Enter player1 name:", "player1");
  const player2Name = prompt("Enter player2 name:", "player2");
  const player1Symbol = prompt("Enter player1 symbol:", "😇");
  const player2Symbol = prompt("Enter player2 symbol:", "😎");

  console.log("-------------GAME STARTS NOW-------------");

  return snakeAndLadder(0, 0, 1, player1Name, player2Name, player1Symbol, player2Symbol);
}

choice();
