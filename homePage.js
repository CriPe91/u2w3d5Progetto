const URL = "https://striveschool-api.herokuapp.com/api/product/";

const getProducts = function () {
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

    .then((products) => {
      console.log(products);

      products.forEach((product) => {
        const row = document.getElementById("rowCard");
        const col = document.createElement("div");
        col.className = "col gy-5";

        const img = document.createElement("img");
        img.src = product.imageUrl;

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = product.name;

        const p = document.createElement("p");
        p.classList.add("card-text");
        p.innerText = product.description;

        const p1 = document.createElement("p");
        p1.classList.add("card-text");
        p1.innerText = product.brand;

        const p2 = document.createElement("p");
        p2.classList.add("card-text");
        p2.innerText = product.price;

        const link2 = document.createElement("a");
        link2.innerText = "MODIFICA";
        link2.href = "./Backoffice.html?prodId=" + product._id;
        link2.className = "btn btn-danger";

        const link1 = document.createElement("a");
        link1.innerText = "DETTAGLI";
        link1.href = "./Details.html?prodId=" + product._id;
        link1.className = "btn btn-primary";

        // const btnModifica = document.createElement("button");
        // btnModifica.classList.add("btn btn-primary");
        // btnModifica.innerText = "Modifica";

        // const btnMoreInfo = document.createElement("button");
        // btnMoreInfo.classList.add("btn btn-primary");
        // btnMoreInfo.innerText = "More Info";

        col.append(img, h5, p, p1, p2, link2, link1);
        row.appendChild(col);

        // col.innerHTML = `
        // <img src="${product.imageUrl}" id="imageUrl" class="card-img-top" alt="${product.description}" />
        // <div class="card-body">
        //   <h5 id="name" class="card-title">${product.name}</h5>
        //   <p id="description" class="card-text">${product.description}</p>
        //   <p id="brand" class="card-text">${product.brand}</p>
        //   <p id="price" class="card-text">${product.price}€</p>
        //   <a id="btnModifica" href="./backOffice.html" class="btn btn-primary">Modifica</a>
        //   <a id="btnMoreInfo" href="#" class="btn btn-primary">More Info</a>
        // </div> `;

        // row.appendChild(col);
      });
    })

    .catch((error) => console.log(error));
};

window.addEventListener("DOMContentLoaded", function () {
  getProducts();
});
