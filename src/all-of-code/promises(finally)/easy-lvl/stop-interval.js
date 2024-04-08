function getTextInterval() {
  let secondsCounter = 0;
  const id = setInterval(() => {
    secondsCounter += 1;
    if (secondsCounter === 10) {
      stopInterval(id);
    }
    console.log("interval");
  }, 1000);
}

function stopInterval(id) {
  clearInterval(id);
}

getTextInterval();
