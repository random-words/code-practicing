async function getResult() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });
}

getResult().then(console.log);
