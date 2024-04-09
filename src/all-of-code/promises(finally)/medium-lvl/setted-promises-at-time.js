async function getSettedPromisesAtTime(arr, maxAtTime) {
  const splicedArr = arr.splice(0, maxAtTime);
  if (splicedArr.length !== 0) {
    console.log(await Promise.all(splicedArr));
    getSettedPromisesAtTime(arr, maxAtTime);
  }
}

const arr = [
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text1");
    }, 500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text2");
    }, 500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text3");
    }, 500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text4");
    }, 1500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text5");
    }, 1500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text4");
    }, 1500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text5");
    }, 5000);
  }),
];

getSettedPromisesAtTime(arr, 3);
