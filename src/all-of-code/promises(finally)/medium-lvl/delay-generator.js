async function getDelay(promise, delay, counter) {
  if (counter !== 0) {
    setTimeout(async () => {
      //   console.log(await callback());
      console.log(await promise);
      getDelay(promise, delay, counter - 1);
    }, delay * counter);
  }
}

// або просто так, або через колбек-функцію
async function getPromise() {
  return await Promise.resolve("ok!");
}

getDelay(Promise.resolve("ok!"), 1000, 3);
