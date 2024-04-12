function calc(arr) {
  return arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
}

console.log(calc([1, 2, 3, 4, 5]));
