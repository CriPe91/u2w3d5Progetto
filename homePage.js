const URL = "https://striveschool-api.herokuapp.com/api/product/";

const productShop = function () {
  fetch(URL)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })

    .then((product) => {
      response.forEach((product) => {
        const card = document.createElement("div");
      });
    });
};
