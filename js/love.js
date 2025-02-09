// document.addEventListener("DOMContentLoaded", () => {
//   loadFavorites();

//   document.querySelectorAll(".heart").forEach((heart) => {
//     heart.addEventListener("click", () => {
//       const bookId = heart.closest(".card").dataset.id;
//       toggleFavorite(bookId, heart);
//     });
//   });
// });

// function toggleFavorite(bookId, heart) {
//   let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//   const bookCard = document.querySelector(`.card[data-id="${bookId}"]`);
//   const bookData = {
//     id: bookId,
//     imgSrc: bookCard.querySelector("img").src,
//     div: bookCard.querySelector("div").outerHTML,

//     // description: bookCard.querySelector("p").textContent,
//   };

//   const index = favorites.findIndex((book) => book.id === bookId);

//   if (index === -1) {
//     favorites.push(bookData);
//     heart.classList.add("liked");
//   } else {
//     favorites.splice(index, 1);
//     heart.classList.remove("liked");
//   }

//   localStorage.setItem("favorites", JSON.stringify(favorites));
// }

// function loadFavorites() {
//   let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//   favorites.forEach((favorite) => {
//     const bookCard = document.querySelector(`.card[data-id="${favorite.id}"]`);
//     if (bookCard) {
//       const heart = bookCard.querySelector(".heart");
//       heart.classList.add("liked");
//     }
//   });
// }
document.addEventListener("DOMContentLoaded", () => {
    loadFavorites();
  
    document.querySelectorAll(".heart").forEach((heart) => {
        heart.addEventListener("click", () => {
            const bookId = heart.closest(".card").dataset.id;
            toggleFavorite(bookId, heart);
        });
    });
});
  
function toggleFavorite(bookId, heart) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const bookCard = document.querySelector(`.card[data-id="${bookId}"]`);
    const bookData = {
        id: bookId,
        imgSrc: bookCard.querySelector("img").src,
        // div: bookCard.querySelector(".info").outerHTML,
        more: bookCard.querySelector("a").outerHTML,
        love: bookCard.querySelector("button").outerHTML,
    };

    const index = favorites.findIndex((book) => book.id === bookId);

    if (index === -1) {
        favorites.push(bookData);
        heart.classList.add("liked");
    } else {
        favorites.splice(index, 1);
        heart.classList.remove("liked");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}
  
function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.forEach((favorite) => {
        const bookCard = document.querySelector(`.card[data-id="${favorite.id}"]`);
        if (bookCard) {
            const heart = bookCard.querySelector(".heart");
            heart.classList.add("liked");
        }
    });
}


