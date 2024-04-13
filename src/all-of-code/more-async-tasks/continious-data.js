async function getDataContunious(data) {
  const resolvedData = [];
  for (const promise of data) {
    const data = await getData(promise);
    console.log("ok");
    resolvedData.push(data);
  }
  return resolvedData;
}

async function getData(promise) {
  return await promise;
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
    }, 3000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("text3");
    }, 5000);
  }),
];

getDataContunious(arr).then(console.log).catch(console.error);
