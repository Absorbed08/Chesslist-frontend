const API_BASE_URL = "https://chesslist-api.onrender.com";

async function fetchVideosByYoutuber(youtuber, opening) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/videos?youtuber=${youtuber}&opening=${opening}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}

window.fetchVideosByYoutuber = fetchVideosByYoutuber;
