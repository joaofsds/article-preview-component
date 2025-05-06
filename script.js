const shareBtn = document.querySelector(".share-button");
const shareBtnDark = document.querySelector(".share-button-alt")
const bodyClick = document.body;

const authorSection = document.getElementById("section-author");
const authorMedia = document.getElementById("section-media");

shareBtn.addEventListener("click", () => {
  authorSection.classList.toggle("active");
  authorMedia.classList.toggle("active");
})

shareBtnDark.addEventListener("click", () => {
  authorSection.classList.toggle("active");
  authorMedia.classList.toggle("active");

})






