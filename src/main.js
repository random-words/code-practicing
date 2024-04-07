async function getData(data, delay) {
  await new Promise((resolve, reject) => {
    const isSuccessful = true;

    setTimeout(() => {
      if (!isSuccessful) {
        return resolve("this is data");
      }
      return reject("error");
    }, delay);
  });
}

getData("text", 1000)
  .then((text) => console.log(text))
  .catch((e) => console.log(e));
