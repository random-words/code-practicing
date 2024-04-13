async function getErrorLol(url = "") {
  return await new Promise(async (resolve, reject) => {
    try {
      if (url === "") {
        throw new Error("don't have url");
      }
      const data = await fetch(url);
      const jsonData = await data.json();

      resolve(jsonData);
    } catch (error) {
      reject(error);
    }
  });
}

const url = "https://jsonplaceholder.typicode.com/users?_limit=1";

getErrorLol(url).then(console.log).catch(console.error);
