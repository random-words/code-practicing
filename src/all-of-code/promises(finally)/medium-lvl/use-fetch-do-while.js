async function useFetchDoWhile(promise, attemptsLeft) {
  do {
    try {
      return await promise;
    } catch (error) {
      console.log(`attempts left: ${attemptsLeft}`);
      attemptsLeft -= 1;
    }
  } while (attemptsLeft !== 0);
  return "run out of attempts";
}

useFetchDoWhile(Promise.reject("bruh"), 3).then(console.log);

// do...while inside try...catch - don't know
