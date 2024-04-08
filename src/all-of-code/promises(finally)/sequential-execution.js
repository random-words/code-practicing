async function sequentialExecution(data, delay) {
  for (const promise of data) {
    try {
      const dataFromPromise = await getDelayedData(promise, delay);
      console.log(dataFromPromise);
    } catch (e) {
      console.log(e);
    }
  }
}

async function getDelayedData(data, delay) {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
  return result;
}

const data = [
  getDelayedData("text1", 1000),
  getDelayedData("text2", 1000),
  getDelayedData("text3", 1000),
];

sequentialExecution(data, 1000);

// робить, да, але... чи це все зрозуміло?..
