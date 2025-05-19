function setupNavbar(youtuberIds, youtuberNames) {
  youtuberIds.forEach((id, index) => {
    document.getElementById(id).addEventListener("click", () => {
      const searchContainer = document.getElementById("search-container");
      searchContainer.style.display = "block";

      const GreetingMessage = document.getElementById("greeting");
      GreetingMessage.style.display = "none";

      const selectedYoutuber = document.getElementById("selected-youtuber");
      selectedYoutuber.innerHTML = youtuberNames[index];
    });
  });
}

window.setupNavbar = setupNavbar;
