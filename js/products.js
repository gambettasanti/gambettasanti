const AUTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const container = document.getElementById("container");

function showData(dataArray) {

    for (const item of dataArray) {
         container.innerHTML += `<p> ${item.name} <p>`;

    }

}

fetch(AUTOS_URL)
    .then(function (response) {
        return resoponse.json();
    })
    .then(function (json) {
        showData(json.catID);
    })