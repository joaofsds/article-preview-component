const sharebtn = document.querySelector(".share-button");
const sectionAuthor = document.getElementById("section-author");

sharebtn.addEventListener("click", function () {
  sectionAuthor.remove();
  console.log("now include the other div");
});
