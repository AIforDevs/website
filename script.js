const apiKey = "daf526a9e0a7456e91441a6436ddbc50"; // Replace with your News API key
const apiUrl =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology";

// Function to fetch and display data
async function fetchNewsData() {
  try {
    const response = await fetch(`${apiUrl}&apiKey=${apiKey}`);
    const data = await response.json();

    if (data.articles) {
      const newsDiv = document.getElementById("newsDiv");
      const tutorialDiv = document.getElementById("tutorialDiv");
      // Create and display the news articles
      data.articles.forEach((article) => {
        const articleDiv = document.createElement("div");
        articleDiv.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
        newsDiv.appendChild(articleDiv);
        const video = document.createElement("video");
        video.src = "${article.url}";
        video.poster = "${article.urlToImage}";
        tutorialDiv.appendChild(video);
      });
    } else {
      console.error("Unable to fetch news data.");
    }
  } catch (error) {
    console.error("An error occurred while fetching news data:", error);
  }
}

// Call the fetchNewsData function when the page loads
fetchNewsData();
