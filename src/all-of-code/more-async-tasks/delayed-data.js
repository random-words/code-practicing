async function getDelayedData(delay) {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, delay);
  });

  console.log("done");
  return data;
}

getDelayedData(1000).then(console.log).catch(console.error);
