async function getInterval(delay) {
  setTimeout(() => {
    console.log("text");
    getInterval(delay);
  }, delay);
}

getInterval(1000);
