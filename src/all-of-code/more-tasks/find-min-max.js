function findMinMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { max, min };
}

console.log(findMinMax([1, 2, 3, 4, 5]));
