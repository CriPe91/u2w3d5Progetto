const params = new URLSearchParams(window.location.search);
const id = params.get("prodId");
const URL = "https://striveschool-api.herokuapp.com/api/product/" + id;

const getDetails = function () {
  fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjAxMzhhZDEyOTAwMTU4NzZjNjgiLCJpYXQiOjE3MzE2NjU5MzksImV4cCI6MTczMjg3NTUzOX0.y9gCd_6H4ox4dt0sl5D0kD7MlB86hC7I8yvOM73_Bx4",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })

    .then((product) => {
      const row = document.getElementById("row-prod");

      const col = document.createElement("div");

      col.className = "col col-4";

      const h1 = document.createElement("h1");
      h1.className = "display-4 $red-400";

      const img = document.createElement("img");
      img.src = product.imageUrl;

      const h2 = document.createElement("h2");
      h2.innerText = product.name;

      const p = document.createElement("p");
      p.innerText = product.description;

      const p1 = document.createElement("p");
      p1.innerText = product.brand;

      const p2 = document.createElement("p");
      p2.innerText = product.price;

      col.append(h1, img, h2, p, p1, p2);
      row.appendChild(col);
    })

    .catch((error) => console.log(error));
};

window.addEventListener("DOMContentLoaded", function () {
  getDetails();
});
