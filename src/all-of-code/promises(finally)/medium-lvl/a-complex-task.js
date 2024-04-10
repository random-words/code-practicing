function promisify(fn) {
  return async function (...args) {
    return await new Promise((resolve, reject) => {
      fn(...args, (res, error) => {
        if (res) {
          resolve(res);
        }
        reject(error);
      });
    });
  };
}

function getData(x, y, callback) {
  if (typeof x !== "number" || typeof y !== "number") {
    callback(undefined, new Error("NaN bruh"));
  }
  callback(x + y, undefined);
}

const promisifiedFunction = promisify(getData);

promisifiedFunction(2, 3).then(console.log).catch(console.error);
