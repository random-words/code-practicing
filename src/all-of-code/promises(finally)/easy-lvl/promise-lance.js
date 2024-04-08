async function getPromiseLance(...promises) {
  return await new Promise(async (resolve) => {
    let counter = "";
    for (const promise of promises) {
      counter += await getSum(promise);
    }
    resolve(counter);
  });
}

function getSum(number) {
  return new Promise((resolve) => resolve(number));
}

getPromiseLance(
  Promise.resolve("1"),
  Promise.resolve("2"),
  Promise.resolve("3")
).then(console.log);
