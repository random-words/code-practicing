const cache = {
  storage: [],

  pushToCache(data) {
    this.storage.push(data);
  },

  async useAsync(promise) {
    const data = await promise;
    this.pushToCache(data);
    return data;
  },
};

(async () => {
  await cache.useAsync(Promise.resolve("somewhat text"));
  console.log(cache.storage);
})();
