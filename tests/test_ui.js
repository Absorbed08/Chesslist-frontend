// test_ui.js
import { setupNavbar } from "./Navbar.js";
import { clearElementContent } from "./helpers.js";

export function runUITests() {
  console.log("Running UI tests...");

  // 테스트: Navbar 클릭 이벤트
  const fakeYoutuberIds = ["chessinside", "chessfreak"];
  const fakeYoutuberNames = ["ChessInside", "ChessFreak"];
  setupNavbar(fakeYoutuberIds, fakeYoutuberNames);

  // 테스트: DOM 요소 초기화
  clearElementContent("results");
  console.log("UI tests completed.");
}
