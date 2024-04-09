function countdown(countdownTime) {
  let count = 0;
  const id = setInterval(() => {
    console.log(countdownTime - count);
    count += 1;
    if (count === countdownTime) {
      stopCountdown(id);
    }
  }, 1000);
}

function stopCountdown(id) {
  clearInterval(id);
  console.log("Час вийшов!");
}

countdown(3);
