async function getData(url) {
  return await new Promise(async (resolve, reject) => {
    try {
      if (url === "" || url === undefined) {
        reject("this is an error");
      }
      const data = await fetch(url);
      const jsonData = data.json();
      resolve(jsonData);
    } catch (error) {
      console.log(error);
      return;
    }
  });
}

getData("https://jsonplaceholder.typicode.com/users?_limit=1")
  .then(console.log)
  .catch(console.error);
