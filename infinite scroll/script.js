const container = document.querySelector(".container");

const URL = `https://randomfox.ca/images/`;

function loadImages(numImages = 6) {
  let i = 0;
  while (i < numImages) {
    const img = document.createElement("img");
    img.src = `${URL}${getRandomNumber()}.jpg`;
    container.appendChild(img);
    i++;
  }
}

loadImages();

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});