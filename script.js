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
        const imageDiv = document.createElement("div");
        console.log(article);
        articleDiv.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;

        newsDiv.appendChild(articleDiv);
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
setInterval(() => {
  fetchTutorialData()
}, 3000);

async function fetchTutorialData() {
  try {
    const response = await fetch(`${apiUrl}&apiKey=${apiKey}`);
    const data = await response.json();

    if (data.articles) {
    
      const tutorialDiv = document.getElementById("tutorialDiv");

      // Create and display the news articles
      data.articles.forEach((article) => {
        const imageDiv = document.createElement("div");
        if (article.urlToImage)
          imageDiv.innerHTML = `<img src=${article.urlToImage} alt=${article.title}/>
                                  <h6>${article.title}</h6>`;
        tutorialDiv.appendChild(imageDiv);
      });
    } else {
      console.error("Unable to fetch news data.");
    }
  } catch (error) {
    console.error("An error occurred while fetching article data:", error);
  }
}
