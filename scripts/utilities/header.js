function loadHeader() {
    const headerHTML = `
      
        <div class="main-header">
          <div class="logo">
            <a href="home.html">
              <img src="/logo/MMN.png" alt="Multimedia News logo" height="100" width="100" />
            </a>
            <div id="weather">Loading...</div>
          </div>
  
         <div class="search-container">
            <div class="searchbar">
              <span class="search-icon material-symbols-outlined">search</span>
              <input id="search" type="search" placeholder="Search" maxlength="1000" />
            </div>
          </div>
        </div>
      
      <div id="results"></div>
    `;
    document.getElementById("site-header").innerHTML = headerHTML;
   
  }

  loadHeader();