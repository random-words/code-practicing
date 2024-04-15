// data-agregation, but with Promise.allSettled - має бути легше написати

// - просто використати метод
// - потім в then зробити ітератор
// - і перевіряти умову, якщо fulfilled, то виводити

async function agregateDataPromiseAllSettled(urls) {
  const results = await urls.map(async (url) => {
    try {
      if (!url) {
        throw new Error("no url found");
      }
      const data = await fetch(url);
      return await data.json();
    } catch (error) {
      return error;
    }
  });

  return await Promise.allSettled(results);
}

const urls = ["", "", "https://jsonplaceholder.typicode.com/users/1"];

agregateDataPromiseAllSettled(urls)
  .then((data) => {
    for (const el of data) {
      if (el.status === "fulfilled") {
        console.log(el.value);
      }
      if (el.status === "rejected") {
        continue;
      }
    }
  })
  .catch(console.error);
