const zero = "";
const one = " ";
const two = "  ";
const three = "   ";
const four = "    ";
const five = "     ";
const six = "      ";

function addition(value1, value2) {
  return value1 + value2;
}

function slice(text, end) {
  const endIndex = end.length;
  let newString = "";

  for (let index = endIndex; index !== text.length; index++) {
    newString += text[index];
  }

  return newString;
}


function sub(value1, value2) {
  return slice(value1, value2);
}

function multiply(multiplier, multiplicand) {
  if (multiplier === zero || multiplicand === zero) {
    return zero;
  }

  return multiplicand + multiply(sub(multiplier , one), multiplicand);
}

function fact(value) {
  if (value === zero) {
    return one;
  }

  if (value === one) {
    return one;
  }

  return multiply(value ,fact(sub(value, one)));
}

function nthFibonacciTerm(position) {
  if (position === one) {
    return zero;
  }

  if (position === two) {
    return one;
  }

  return nthFibonacciTerm(addition((sub(position, one)), nthFibonacciTerm(sub(position, two))));
}


console.log(nthFibonacciTerm(one).length);
console.log(nthFibonacciTerm(two).length);
console.log(nthFibonacciTerm(three).length);
// console.log(nthFibonacciTerm(four).length);// not working
// console.log(nthFibonacciTerm(five).length);// not working
