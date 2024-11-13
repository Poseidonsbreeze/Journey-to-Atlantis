function toggleSearchbar() {
    var searchBar = document.getElementById("search-bar");
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
        searchBar.style.maxHeight = "100px"; // Adjust max height as needed
    } else {
        searchBar.style.maxHeight = "0";
        setTimeout(function() {
            searchBar.style.display = "none";
        }, 500); // Match this time with the CSS transition duration
    }
}