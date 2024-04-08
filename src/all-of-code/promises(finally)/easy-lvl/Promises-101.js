async function getPromise(str) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(str);
    }, 2000);
  });
}

getPromise("text").then((data) => console.log(data));
