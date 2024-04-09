async function getParallelSolve(arr) {
  return await Promise.all(arr);
}

const arr = [
  (promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, 1000);
  })),
  (promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error!");
    }, 1500);
  })),
  (promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, 2000);
  })),
];

getParallelSolve(arr).then(console.log).catch(console.error);
