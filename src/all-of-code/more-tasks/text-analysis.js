function analyze(string) {
  const splittedStr = string.split("");
  const obj = {};

  for (const letter of splittedStr) {
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = 0;
    }

    obj[letter] += 1;
  }

  return obj;
}

console.log(analyze("aabaccac"));
