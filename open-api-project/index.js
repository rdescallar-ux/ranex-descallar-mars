const button = document.querySelector("#loadBtn");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = `
        <img src="${data[0].url}" width="300">
      `;
    })
    .catch(error => {
      console.log("Error:", error);
    });
});