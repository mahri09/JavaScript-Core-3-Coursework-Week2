const submitBtn = document.getElementById("submit");
const image = document.querySelector("img");
const title = document.querySelector("h3");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
    title.innerText = json.title + " " + json.year;
    image.setAttribute("src", json.img);
  })
  .catch((error) => {
    console.log(error);
  });
