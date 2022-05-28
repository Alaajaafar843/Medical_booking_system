$(document).ready(function () {
  fetch("https://countriesnow.space/api/v0.1/countries/positions", {
    method: "get",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost/",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.data.forEach((element) => {
        document.getElementById(
          "nationality"
        ).innerHTML += `<option value="${element.name}">
          ${element.name}
        </option>`;
      });
    })
    .catch((error) => console.log(error));

  const bloodTypes = ["A+", "A-", "B+", "B-", "O-", "O+", "AB+", "AB-"];

  let bloods = document.getElementById("blood");
  for (let i = 0; i < bloodTypes.length; i++) {
    bloods.innerHTML += `<option value="${bloodTypes[i]}">
      ${bloodTypes[i]}
    </option>`;
  }
});
