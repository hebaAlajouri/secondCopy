document.addEventListener("DOMContentLoaded", function () {
    console.log("Fetching books.json...");

    fetch('./books.json')  // This now works because you're using a local HTTP server
        .then(response => response.json())
        .then(books => {
            console.log("Books loaded successfully:", books);
            
            // Process the books array and populate the carousel here
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});
