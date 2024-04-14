async function foo(arr) {
  return Promise.allSettled(arr);
}

const arr = [
  new Promise((resolve) => {
    setTimeout(resolve("text1"), 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(reject("error"), 3000);
  }),
  new Promise((resolve) => {
    setTimeout(resolve("text2"), 2000);
  }),
];

foo(arr).then(console.log).catch(console.error);
