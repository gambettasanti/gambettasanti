const AUTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let currentProductArray = [];
let minCount = undefined;
let maxCount = undefined;

function showProductList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductArray.products.length; i++){
        let product = currentProductArray.products[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.productCount) <= maxCount))){

            htmlContentToAppend += `
            <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost} </h4>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
    }
}


document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(AUTOS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductArray = resultObj.data
            showProductList()
            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

   
});


