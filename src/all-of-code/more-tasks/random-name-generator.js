function generateName(colors, animals) {
  const randomColorIdx = Math.round(Math.random() * (colors.length - 1));
  const randomAnimalIdx = Math.round(Math.random() * (animals.length - 1));

  const color = colors[randomColorIdx];
  const animal = animals[randomAnimalIdx];

  const splittedColor = color.split("");
  const splittedAnimal = animal.split("");

  const letterUpColor = splittedColor[0].toUpperCase();
  const letterUpAnimal = splittedAnimal[0].toUpperCase();

  splittedColor[0] = letterUpColor;
  splittedAnimal[0] = letterUpAnimal;

  const joinedColor = splittedColor.join("");
  const joinedAnimal = splittedAnimal.join("");

  return `${joinedColor}${joinedAnimal}`;
}

const colors = ["blue", "purple", "yellow", "green"];
const animals = ["dog", "cat", "dolphin"];

console.log(generateName(colors, animals));
