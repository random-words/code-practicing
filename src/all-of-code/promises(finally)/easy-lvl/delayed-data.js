async function getDelayedData(data, delay, isSuccessful = true) {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccessful) {
        resolve(data);
      }
      reject("error");
    }, delay);
  });
  return result;
}

getDelayedData("text", 1000)
  .then((text) => console.log(text))
  .catch(console.log);
