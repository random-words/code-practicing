const data = {
  cache: [],

  async getData(...urls) {
    const dataToProcess = [];
    for (const url of urls) {
      const cacheData = this.cache.find((dataObj) => dataObj.url == url);
      if (cacheData) {
        console.log("data obtained from cache; url: ", cacheData.url);
        dataToProcess.push(
          new Promise((resolve) => {
            resolve(cacheData.jsonData);
          })
        );
        continue;
      }

      const data = await fetch(url);
      const jsonData = await data.json();
      dataToProcess.push(
        new Promise((resolve) => {
          resolve(jsonData);
        })
      );

      this.cache.push({ url, jsonData });
    }
    return Promise.all(dataToProcess);
  },

  clearCache(timeBeforeClearing) {
    setTimeout(() => {
      this.cache = [];
      console.log("cache is cleared");
    }, timeBeforeClearing);
  },
};

data
  .getData(
    "https://dummyjson.com/products/1",
    "https://jsonplaceholder.typicode.com/users/1",
    "https://dummyjson.com/products/1"
  )
  .then(console.log)
  .catch(console.error);

data.clearCache(3000);
