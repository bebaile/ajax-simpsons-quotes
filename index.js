const API = "https://simpsons-quotes-api.herokuapp.com/quotes";
axios
  .get(API)
  .then((resp) => resp.data)
  .then((resp) => {
    display(resp[0]);
  });

function display(arr) {
  const divSelector = document.querySelector(".content");
  divSelector.innerHTML = `<h2>${arr.character}</h2><img src ="${arr.image}" alt= "${arr.character}"><div>${arr.quote}</div>`;
}
