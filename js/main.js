var imageIndex = 1;
setInterval(changeImage, 5000);

function activeMenu() {
  document.querySelector(".big-wrapper").classList.toggle("active");
}

function goHome() {
  document.location.href = '/';
}

function changeImage() {
  var myImage = document.getElementById("brandImage");
  imageIndex++;
  if (imageIndex > 10) {
    imageIndex = 1;
  }
  myImage.src = "../img/brand/" + imageIndex + ".webp";
}