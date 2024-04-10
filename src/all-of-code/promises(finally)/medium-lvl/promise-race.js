async function foo(arr, deadline) {
  return await Promise.race([
    ...arr,
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("too slow");
      }, deadline);
    }),
  ]);
}

const arr = [
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text1");
    }, 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text2");
    }, 1500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text3");
    }, 2000);
  }),
];

foo(arr, 200).then(console.log).catch(console.error);
