const width = 3;
const height = 50;

function repeat(string, numberOfTimes) {
  if (numberOfTimes === 0) {
    return '';
  }

  return string + repeat(string, numberOfTimes - 1);
}

function slice(text, start, end) {
  let string = '';

  for (let index = start; index <= end; index++) {
    string += text[index];
  }

  return string;
}

function put(screen, x, y) {
  const index = y * width + x;

  return slice(screen, 0, index - 1) + "." + slice(screen, index + 1, width * height);
}

function updatedScreen(screen) {
  const x = Math.ceil(Math.random() * width);
  const y = Math.ceil(Math.random() * height);

  return put(screen, x, y);
}

function display(screen) {
  for (let i = 0; i < height; i ++) {
    console.log(slice(screen, i, i + width));
  }
}

function delay() {
  for (let i = 0; i < 1000000000; i++) { }
}

let screen = repeat(" ", width * height);

for (let i = 0; i < 10; i++) {
  console.clear();
  display(screen);
  delay();
  screen = updatedScreen(screen);
}
