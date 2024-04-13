async function getParallelData(data) {
  const dataToResolve = [];
  for (const promise of data) {
    dataToResolve.push(getData(promise));
  }
  return await Promise.all(dataToResolve);
}

async function getData(promise) {
  const data = await Promise.resolve(promise);
  console.log("ok");
  return data;
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
    }, 5000);
  }),
];

getParallelData(arr).then(console.log).catch(console.error);
