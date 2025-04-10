const rssUrl = "https://feeds.bbci.co.uk/news/rss.xml";

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
  .then(response => response.json())
  .then(data => {
      let output = "";
      data.items.forEach(item => {
          output += `<h2>${item.title}</h2><p>${item.description}</p><a href="${item.link}">Read more</a><hr>`;
      });
      document.getElementById("news-container").innerHTML = output;
  })
  .catch(error => console.error("Error fetching RSS:", error));