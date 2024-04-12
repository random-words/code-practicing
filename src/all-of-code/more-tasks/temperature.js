function convertTo(temperature, isCelsius = true) {
  if (isCelsius) {
    return (temperature * 9) / 5 + 32;
  }
  return ((temperature - 32) * 5) / 9;
}

console.log(convertTo(0, false));
