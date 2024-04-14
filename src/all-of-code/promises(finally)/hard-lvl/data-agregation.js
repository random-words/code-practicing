async function agregateData(...urls) {
  const dataToAgregate = [];
  for (const url of urls) {
    const data = await fetch(url);
    const jsonData = await data.json();

    dataToAgregate.push(Promise.resolve(jsonData));
  }

  const report = await Promise.all(dataToAgregate);
  console.log("here's your report: ");
  return report;
}

agregateData(
  "https://dummyjson.com/products/1",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://dummyjson.com/products/1"
)
  .then(console.log)
  .catch(console.error);
