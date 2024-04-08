async function getPromiseArr(...promises) {
  return await Promise.all(...promises);
}

const promiseA = new Promise((resolve) =>
  setTimeout(() => {
    resolve("text1");
  }, 1000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => {
    resolve("text2");
  }, 2000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => {
    resolve("text3");
  }, 3000)
);

const arr = [promiseA, promiseB, promiseC];

getPromiseArr(arr).then(console.log);
