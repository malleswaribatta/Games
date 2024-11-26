function getString(value, symbol) {
  let string = "";
  for (let j = 0; j < value; j++) {
    string += " ";
  }

  string += symbol;
  return string;
}

function delay() {
  for (let i = 0; i < 100000000; i++) { }
}

function main() {
  for (let i = 0; i < 100; i += 0.15) {

    const value1 = Math.sin(i) * 10 + 50;
    console.log(getString(value1, "⚪️"));
    delay();

    const value2 = Math.sin(-i) * 10 + 50;
    console.log(getString(value2, "🔴"));
  }
}

main();

