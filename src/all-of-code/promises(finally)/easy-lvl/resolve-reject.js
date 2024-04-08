async function getResolve() {
  return Promise.resolve("Resolve");
}

async function getReject() {
  return Promise.reject("Reject");
}

getResolve().then(console.log);
getReject().catch(console.error);
