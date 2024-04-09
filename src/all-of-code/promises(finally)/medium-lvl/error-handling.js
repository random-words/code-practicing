async function catchError(promise) {
  try {
    return await promise;
  } catch (error) {
    return error;
  }
}

catchError(Promise.reject("error!")).then(console.log).catch(console.error);
