document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("posts-container");

  fetch("https://dev.to/api/articles?per_page=5")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      return response.json();
    })
    .then((articles) => {
      articles.forEach((article) => {
        const post = document.createElement("div");
        post.className = "post";
        post.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read More</a>
        `;
        container.appendChild(post);
      });
    })
    .catch((error) => {
      container.innerHTML = "<p>Could not load articles at this time.</p>";
      console.error(error);
    });
});
