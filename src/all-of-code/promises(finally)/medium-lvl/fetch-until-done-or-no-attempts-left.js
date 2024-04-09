async function useFetch(promise, attemptsLeft) {
  if (attemptsLeft !== 0) {
    try {
      return await promise;
    } catch (error) {
      console.log(`attempts left: ${attemptsLeft}`);
      await useFetch(promise, attemptsLeft - 1);
    }
  }
  return `run out of attempts`;
}

useFetch(Promise.reject("ok!"), 3).then(console.log).catch(console.error);

// or that, no matter where "if" is placed
// async function useFetch(promise, attemptsLeft) {
//   try {
//     if (attemptsLeft !== 0) {
//       return await promise;
//     }
//   } catch (error) {
//     console.log(`attempts left: ${attemptsLeft}`);
//     await useFetch(promise, attemptsLeft - 1);
//   }
//   return `run out of attempts`;
// }

// useFetch(Promise.reject("ok!"), 3).then(console.log).catch(console.error);
