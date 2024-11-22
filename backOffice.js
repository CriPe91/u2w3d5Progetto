const params = new URLSearchParams(window.location.search);
const id = params.get("prodId");
const URL = id ? "https://striveschool-api.herokuapp.com/api/product/" + id : "https://striveschool-api.herokuapp.com/api/product/";
const method = id ? "PUT" : "POST";

const handleSubmit = (event) => {
  event.preventDefault();

  const newProduct = {
    name: event.target.name.value,
    description: event.target.description.value,
    brand: event.target.brand.value,
    imageUrl: event.target.imageUrl.value,
    price: event.target.price.value,
  };

  fetch(URL, {
    method,
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
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
      console.log(product);
      if (id) {
        alert("abbiamo modificato la risorsa con id: " + product._id);
      } else {
        event.target.reset();
        alert("abbiamo creato una nuova risorsa con id: " + product._id);
      }
    })

    .catch((error) => console.log(error));
};

const handleDelete = () => {
  const hasConfirmed = confirm("sei sicuro di voler eliminare la risorsa?");
  if (hasConfirmed) {
    fetch(URL, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })

      .then((deletedObj) => {
        alert("la risorsa con id " + deletedObj._id + " è stata eliminata con successo");
        window.location.assign("/");
      })

      .catch((error) => console.log(error));
  }
};

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-product");
  form.onsubmit = handleSubmit;

  const submitBtn = document.getElementById("submitBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const subtitle = document.getElementById("subtitle");

  if (id) {
    subtitle.innerText = "-- Modifica Risorsa";
    submitBtn.classList.add("btn-primary");
    submitBtn.innerText = "Modifica";

    deleteBtn.classList.remove("d-none");
    deleteBtn.onclick = handleDelete;

    fetch(URL, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjAxMzhhZDEyOTAwMTU4NzZjNjgiLCJpYXQiOjE3MzE2NjU5MzksImV4cCI6MTczMjg3NTUzOX0.y9gCd_6H4ox4dt0sl5D0kD7MlB86hC7I8yvOM73_Bx4",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ci dispiace, non siamo riusciti a reperire i dati.");
        }
      })

      .then((product) => {
        console.log(product);
        const { name, description, brand, imageUrl, price } = product;

        document.getElementById("name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("imageUrl").value = imageUrl;
        document.getElementById("price").value = price;
      });
  } else {
    subtitle.innerText = "— Crea risorsa";
  }
});
