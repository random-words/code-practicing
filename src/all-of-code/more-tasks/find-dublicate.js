function findDublicate(arr) {
  const dublicate = arr.find((el, idx, arr) => arr.indexOf(el) !== idx);
  if (dublicate) {
    return dublicate;
  }
  return null;
}

console.log(findDublicate([1, 1, 2, 3, 4]));
