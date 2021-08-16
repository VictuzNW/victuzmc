var images = [
  "https://becraft.es/assets/images/header.png",
  "https://becraft.es/assets/images/header4.png",
];

function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById('imager').src = images[x];
}

randImg();
