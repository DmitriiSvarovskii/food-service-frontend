const images = ["static/1.png", "static/2.png"];
let index = 0;

const imgEl = document.getElementById("fullscreen-image");

imgEl.addEventListener("click", () => {
    index = (index + 1) % images.length;
    imgEl.src = images[index];
});