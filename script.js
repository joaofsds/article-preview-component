const shareBtn = document.querySelector(".share-button");
const shareBtnDark = document.querySelector(".share-button-alt");
const authorSection = document.getElementById("section-author");
const authorMedia = document.getElementById("section-media");
const shareAlt = document.getElementById("share-alt");

function showHideMobile() {
  shareBtn.addEventListener("click", () => {
    authorMedia.classList.toggle("active");
    authorSection.classList.toggle("active");
  });

  shareBtnDark.addEventListener("click", () => {
    authorMedia.classList.toggle("active");
    authorSection.classList.toggle("active");
  });
}

function showHideDesktop() {
  shareBtn.addEventListener("click", () => {
    authorMedia.classList.toggle("active-desktop");
    shareAlt.classList.add("inactive");
  });
}

function showHide() {
  if (window.innerWidth <= 768) {
    showHideMobile();
  } else {
    showHideDesktop();
  }
}

shareBtn.addEventListener("click", showHide());
