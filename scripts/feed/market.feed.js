// Alternative APIKEYS

// const apiKey = "21a5cc266b474704b8e6035ae92a7d90";
// const apiKey = "a577c6c8fdc7451db9fed7ca041c61c8";
// const apiKey = "221adb9d0efc4378bf1a13211c213319";


const apiKey = "21a5cc266b474704b8e6035ae92a7d90";

const feedUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

let allArticles = [];

const fetchFeed = async () => {
  try {
    const response = await fetch(feedUrl);
    const feedData = await response.json();

    allArticles = feedData.articles;
    displayArticles(allArticles);
  } catch (error) {
    console.error("Could not fetch news data: ", error);
  }
};

const cleanContent = (text) => {
  return text
    .replace(/\[\+\d+ chars\]/g, "")
    .replace(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g, "")
    .replace(/https?:\/\/[^\s]+/g, "")
    .replace(/\(this part.*?\)/gi, "")
    .replace(/\bnull\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
};

const cleanTitle = (text) => {
  return text.length > 60 ? text.slice(0, 57).trim() + "..." : text;
};

const displayArticles = (articles) => {
  let feedOutput = "";

  articles.forEach((data) => {
    let name = data.source?.name || "";
    let title = cleanTitle(data.title);
    let url = data.url || "#";
    let description = data.description;
    let content = cleanContent(data.content || "");
    let publishDate = data.publishedAt
      ? new Date(data.publishedAt).toLocaleDateString()
      : "";
    let imageUrl = data.urlToImage;

    if (!title || !content || !imageUrl || !name) {
      return;
    }

    let feedId = Math.random().toString(36).substr(2, 9); // Generate a unique ID for each feed card

    feedOutput += `
      <div class="feed-card" data-id="${feedId}">
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>${title}</h4>
            <span><p> Published on: ${publishDate}</p></span>
          </div>
          <img src="${imageUrl}" alt="${title}" />
          <div style="display: flex; flex-direction: column;">
            <span><p>Source: ${name}</p></span>
          </div>
          <p class="article-description">${description}</p>
          <div class="full-article">
            <p>${content}</p>
          </div></a>
          <div class="icon-container">
            <span class="icon thumbs-up" data-action="like">
              <i class="fas fa-thumbs-up"></i>
              <span class="count" style="color: red;">0</span>
            </span>
            <span class="icon thumbs-down" data-action="dislike">
              <i class="fas fa-thumbs-down"></i>
              <span class="count" style="color: red;">0</span>
            </span>
            <span class="icon share" data-action="share">
              <i class="fas fa-share"></i>
              <span class="count" style="color: red;">0</span>
            </span>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("feeds").innerHTML = feedOutput;
};

// Search functionality
const searchArticles = (query) => {
  const filteredArticles = allArticles.filter((article) => {
    const title = article.title.toLowerCase();
    const description = article.description?.toLowerCase() || "";
    const content = article.content?.toLowerCase() || "";

    return (
      title.includes(query) ||
      description.includes(query) ||
      content.includes(query)
    );
  });

  if (filteredArticles.length > 0) {
    displayArticles(filteredArticles); // Display filtered articles
  } else {
    document.getElementById("feeds").innerHTML = `
      <div class="no-results">
        <p>No results found for "<strong>${query}</strong>". Please try a different search term.</p>
      </div>
    `;
  }
};

// Event listener for search bar
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or page reload
      const query = searchInput.value.trim().toLowerCase();
      searchArticles(query); // Filter articles based on the query
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    fetchFeed();
  }, 500); // Slight delay to allow initial rendering
});

// Weather details at top right of page API

const apiKey2 = "6349841e23794351bf7171317252303";

const fetchWeather = async (lat, lon) => {
  const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey2}&q=${lat},${lon}&aqi=no`;

  try {
    const response = await fetch(weatherUrl);
    const weatherData = await response.json();

    if (weatherData && weatherData.location && weatherData.current) {
      let city = weatherData.location.name;
      let temp = Math.round(weatherData.current.temp_c);
      let icon = weatherData.current.condition.icon;

      document.getElementById("weather").innerHTML = `
         <img src="https:${icon}" alt="Weather Icon">
         <span>${city}: ${temp}°C</span>
      `;
    } else {
      document.getElementById("weather").innerText = "Weather data unavailable";
    }
  } catch (e) {
    console.error("Weather data unavailable", e);
  }
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      () => {
        document.getElementById("weather").innerText = "Location access denied";
      }
    );
  } else {
    document.getElementById("weather").innerText = "Geolocation Unsupported";
  }
};

getLocation();

document.addEventListener("DOMContentLoaded", () => {
  const feedsContainer = document.getElementById("feeds");

  // Store counts for each button in a Map
  const countsMap = new Map();

  // Handle button clicks to increment counts
  feedsContainer.addEventListener("click", (event) => {
    const target = event.target.closest(".icon");
    if (target) {
      const action = target.dataset.action; // Get the action (like, dislike, share)
      const feedCard = target.closest(".feed-card");
      const feedId = feedCard.dataset.id; // Use a unique ID for each feed card

      // Initialize counts for this feed card if not already set
      if (!countsMap.has(feedId)) {
        countsMap.set(feedId, { like: 0, dislike: 0, share: 0 });
      }

      // Increment the count for the specific action
      const counts = countsMap.get(feedId);
      counts[action] += 1;
      countsMap.set(feedId, counts);

      // Update the count display
      const countSpan = target.querySelector(".count");
      countSpan.textContent = counts[action];
    }
  });

  // Handle hover to animate counts
  feedsContainer.addEventListener("mouseover", (event) => {
    const feedCard = event.target.closest(".feed-card");
    if (feedCard) {
      const feedId = feedCard.dataset.id; // Use the unique ID for the feed card

      // Get the counts for this feed card
      const counts = countsMap.get(feedId) || { like: 0, dislike: 0, share: 0 };

      // Animate the counts for each button
      const buttons = feedCard.querySelectorAll(".icon");
      buttons.forEach((button) => {
        const action = button.dataset.action;
        const countSpan = button.querySelector(".count");
        const totalCount = counts[action];

        // Animate the count from 0 to the total count
        let currentCount = 0;
        const interval = setInterval(() => {
          if (currentCount < totalCount) {
            currentCount += 1;
            countSpan.textContent = currentCount;
          } else {
            clearInterval(interval);
          }
        }, 50); // Adjust the speed of the animation
      });
    }
  });
});