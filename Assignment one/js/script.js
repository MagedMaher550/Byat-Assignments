// Start Dropdown Logic
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "inline" ? "none" : "inline";
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    dropdownContent.style.display = "none";
  }
 
});
// End Dropdown Logic

// Start Toggle Button Logic
const toggleButton = document.getElementById("toggle-view");
const linksContainer = document.getElementById("links-container");

toggleButton.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});
// End Toggle Button Logic
