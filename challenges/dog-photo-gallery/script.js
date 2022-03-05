const submitBtn = document.getElementById("submit");
const ulEl = document.getElementById("imageLine");

const addImage = (data) => {
  let liEl = document.createElement("li");
  let image = document.createElement("img");
  ulEl.appendChild(liEl);
  liEl.append(image);
  image.setAttribute("src", data);
};
submitBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addImage(data.message);
    })
    .catch((error) => {
      console.log(error);
    });
});
