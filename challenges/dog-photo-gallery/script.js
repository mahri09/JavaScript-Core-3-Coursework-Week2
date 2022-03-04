const submitBtn = document.getElementById("submit");
const image = document.querySelector("img");

submitBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      image.setAttribute("src", json.message);
    })
    .catch((error) => {
      console.log(error);
    });
});
