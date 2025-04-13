
/*** This code is not being used. filtering query from feeds.js instead *****/



document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or page reload
      const query = searchInput.value.trim().toLowerCase();

      if (query) {
        performSearch(query); // Call the search function
      } else {
        resetPageContent(); // Reset the page if the input is empty
      }
    }
  });

  function performSearch(query) {
    // Example: Filter and update the page content
    const allItems = document.querySelectorAll(".content-item"); // Select all content items
    let hasResults = false;

    allItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = ""; // Show matching items
        hasResults = true;
      } else {
        item.style.display = "none"; // Hide non-matching items
      }
    });

    if (!hasResults) {
      alert(`No results found for "${query}".`);
    }
  }

  function resetPageContent() {
    // Reset the page to show all content items
    const allItems = document.querySelectorAll(".content-item");
    allItems.forEach((item) => {
      item.style.display = ""; // Show all items
    });
  }
});