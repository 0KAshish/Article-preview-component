const shareToggle = document.getElementById("share-btn");
const shareOpt = document.getElementById("share-option");
const footerShare = document.getElementById("footer-share");
const hideShareBtn = document.getElementById("hide-share-btn");
const profile = document.getElementById("profile");

// Share button click
shareToggle.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    profile.classList.add("hidden");
    shareOpt.classList.add("hidden");
    footerShare.classList.toggle("hidden");
  } else {
    shareOpt.classList.toggle("hidden");
    footerShare.classList.add("hidden");
    profile.classList.remove("hidden");
  }
});

// Hide button click
hideShareBtn.addEventListener("click", () => {
  footerShare.classList.add("hidden");
  profile.classList.remove("hidden");
});

// Handle screen resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    footerShare.classList.add("hidden");
    profile.classList.remove("hidden");
  } else {
    shareOpt.classList.add("hidden");
  }
});
