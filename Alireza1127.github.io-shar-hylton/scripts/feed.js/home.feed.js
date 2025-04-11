//--- fetching news data from NewsAPI.org ---

const apiKey = "221adb9d0efc4378bf1a13211c213319";
const feedUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${apiKey}`;

const fetchFeed = async () => {
  try {
    const response = await fetch(feedUrl);
    const feedData = await response.json();

    let feedOutput = "";

    feedData.articles.forEach((data) => {
      let name = data.source?.name || "";
      let title = data.title;
      let author = data.author;
      let description = data.description;
      let content = data.content || "";
      let publishDate = data.publishedAt? new Date(data.publishedAt).toLocaleDateString():"";
      let imageUrl = data.urlToImage;

        if(!title || !content || !imageUrl || !name || !author){
            
            return;
        }

      feedOutput += `
        
        <div class="feed-card">
            <div>
                <h4>${title}</h4>
                <span> ${publishDate} </span>
            </div>
            <img src="${imageUrl}" alt="" />
            <p class="article-description">${description}</p>
            <div>
              <span> ${name} </span>
              <span> ${author} </span>
            </div>
            <div class="full-article">
              <p>${content}</p>
            </div>
          </div>   
        
        `;
    });

    document.getElementById('feeds').innerHTML = feedOutput;
  } catch (error) {
    console.error("Could not fetch news data: ", error);
  }
}

fetchFeed();


// Weather details at top right of page API

const apiKey2 = "6349841e23794351bf7171317252303";

const fetchWeather = async (lat, lon) => {

    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey2}&q=${lat},${lon}&aqi=no`;
    
    try{

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
    };

    }catch(e){
        
        console.error("Weather data unavailable", e);

    };
}


const getLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            position =>{
                fetchWeather(position.coords.latitude, position.coords.longitude);

            },
            () => {
                document.getElementById("weather").innerText = "Location access denied";
            }
        );
    }else{
        document.getElementById("weather").innerText = "Geolocation Unsupported";
    }
}

getLocation();

// cleanContent(text) {
//   return text
//     .replace(/\[\+\d+ chars\]/g, "")
//     .replace(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g, "")
//     .replace(/https?:\/\/[^\s]+/g, "")
//     .replace(/\(this part.*?\)/gi, "")
//     .replace(/\s{2,}/g, " ")
//     .trim();
// }

// cleanTitle(text) {
//   return text.length > 60 ? text.slice(0, 57).trim() + "..." : text;
// }