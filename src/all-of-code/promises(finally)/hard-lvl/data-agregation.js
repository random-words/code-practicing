async function agregateData(urls) {
  return await new Promise(async (resolve) => {
    const dataToAgregate = [];
    for (const url of urls) {
      try {
        if (!url) {
          throw new Error("error");
        }
        const data = await fetch(url);
        if (!data) {
          throw new Error("error");
        }
        const jsonData = await data.json();

        dataToAgregate.push(jsonData);
      } catch (error) {}
    }
    // const filteredData = dataToAgregate.filter((el) => el !== undefined);

    // umm, actually, так як в dataToAgregate вже просто значення,
    // а не проміси (бо await), то там буде масив значень

    // але Promise.all, якщо бачить не проміс, то ігнорує його і,
    // фактично, вважає це fulfilled value:

    /**
     * If the iterable contains non-promise values, they will be ignored,
     * but still counted in the returned promise array value
     * (if the promise is fulfilled)
     *
     * All values are non-promises, so the returned promise gets fulfilled
     * const p = Promise.all([1, 2, 3]);
     */
    const data = await Promise.all(dataToAgregate);
    await getReprot(data).then(console.log);
    resolve(data);
  });
}

async function getReprot(data) {
  return `we're obtained ${data.length} request from user, and reorded it in database in the form of an array of objects: `;
}

const urls = ["", "", "https://jsonplaceholder.typicode.com/users/1"];

agregateData(urls).then(console.log).catch(console.error);

////////////////////////////////////////////////

// це до пояснень в коді:

// const p1 = Promise.resolve(3);
// const p2 = 1337; <- вот тут
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); // [3, 1337, "foo"] <- 1337 всерівно повернулося як елемент масиву
// });
