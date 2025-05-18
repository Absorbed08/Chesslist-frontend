// Navbar.js
export function setupNavbar(youtuberIds, youtuberNames) {
  youtuberIds.forEach((id, index) => {
    document.getElementById(id).addEventListener("click", () => {
      const searchContainer = document.getElementById("search-container");
      searchContainer.style.display = "block";

      // 환영 메시지 숨기기
      const GreetingMessage = document.getElementById("greeting");
      GreetingMessage.style.display = "none";

      const selectedYoutuber = document.getElementById("selected-youtuber");
      selectedYoutuber.innerHTML = youtuberNames[index];
    });
  });
}
