async function getCallbackText(callback, text) {
  return await callback(text);
}

function getText(text) {
  return new Promise((resolve) => {
    resolve(text);
  });
}

getCallbackText(getText, "text").then(console.log);
