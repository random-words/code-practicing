function calculate(arr) {
  const quantity = arr.reduce((acc, { quantity }) => acc + quantity, 0);
  const price = arr.reduce((acc, { price }) => acc + price, 0);

  return { quantity, price };
}

const arr = [
  { quantity: 3, price: 90 },
  { quantity: 2, price: 60 },
  { quantity: 1, price: 10 },
];

console.log(calculate(arr));
