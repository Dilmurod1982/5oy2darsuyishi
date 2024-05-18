const openBtn = document.querySelector(".btn");
const cover = document.getElementById("cover");
const close = document.querySelector(".close");

openBtn.addEventListener("click", function () {
  cover.style.display = "flex";
});

close.addEventListener("click", function () {
  cover.style.display = "none";
});
