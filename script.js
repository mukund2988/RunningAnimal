const RunningAnimalimg = document.getElementById("animal");
const RunningAnimalimages = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
  "/assets/5.png",
  "/assets/6.png",
  "/assets/7.png",
  "/assets/8.png",
];

let imageIndex = 0;
function changeImage() {
  RunningAnimalimg.src = RunningAnimalimages[imageIndex];
  imageIndex++;
  if (imageIndex >= RunningAnimalimages.length) {
    imageIndex = 0;
  }
}
setInterval(changeImage, 100);
