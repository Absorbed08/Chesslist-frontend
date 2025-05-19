// Navbar 설정
const YoutubersId = [
  "chessinside",
  "chessfreak",
  "ssgssg2",
  "hanging_pawns",
  "daniel_naroditsky",
];

const YoutubersName = [
  "chessinside",
  "체스프릭",
  "슥슥이",
  "Hanging Pawns",
  "Daniel Naroditsky",
];

setupNavbar(YoutubersId, YoutubersName);

// 검색 이벤트 핸들러
const searchForm = document.getElementById("search-container");
const searchBar = document.getElementById("search-bar");
const resultsContainer = document.getElementById("results");
const selectedYoutuberElement = document.getElementById("selected-youtuber");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // 폼 기본 동작 방지

  const youtuber = selectedYoutuberElement.innerText;
  const opening = searchBar.value.trim();

  if (!opening) {
    resultsContainer.innerHTML = "<p>검색어를 입력하세요.</p>";
    return;
  }

  try {
    const videos = await fetchVideosByYoutuber(youtuber, opening);

    if (videos.length === 0) {
      resultsContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
      return;
    }

    // 결과 렌더링
    resultsContainer.innerHTML = videos
      .map(
        (video) => `
        <div class="video-item">
          <img src="${video.thumbnail}" alt="Thumbnail" />
          <div class="video-info">
            <h3>${video.title}</h3>
            <p>${video.opening}</p>
            <a href="${video.url}" target="_blank">Watch Video</a>
            <p class="video-date">Uploaded on: ${new Date(
              video.date
            ).toLocaleDateString()}</p>
          </div>
        </div>
      `
      )
      .join("");
  } catch (error) {
    resultsContainer.innerHTML = `<p>영상을 불러오는 중 오류가 발생했습니다: ${error.message}</p>`;
  }
});
