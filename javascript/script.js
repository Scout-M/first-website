document.addEventListener("DOMContentLoaded", function () {
  imageChange();
});

function setNewImage() {
  document.getElementById("G-Fish").src = "images/shark.jpg";
}

function setOldImage() {
  document.getElementById("G-Fish").src = "images/gFish.png";
}

function imageChange() {
  const images = document.querySelectorAll(".myFace");
  let i = 0;
  setInterval(function () {
    images.forEach((img, i) => {
      img.style.display = "none";
    });
    if (i == images.length) {
      i = 0;
    }
    images[i].style.display = "block";
    i++;
  }, 3000);
}
