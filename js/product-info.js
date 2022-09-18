let currentProduct;
let currentComment;

function showProduct(){

    let htmlContentToAppend = "";
    
            htmlContentToAppend += `
                <div class="text-center p-4">
                    <h2>${currentProduct.name}</h2>
                    <hr> </hr> 
                </div>
                <p> <b> Precio </b> <p>
                <p> ${currentProduct.currency} ${currentProduct.cost} </p>
                <p> <b> Descripcion </b> <p>
                <p> ${currentProduct.description} </p>
                <p> <b> Categoria </b> <p>
                <p> ${currentProduct.category} </p>
                <p> <b> Cantidad Vendidos </b> <p>
                <p> ${currentProduct.soldCount} </p>
                <p> <b> Imagenes ilustrativas </b> <p>

            `

        let htmlMostrar = "";

        for (let i = 0; i < currentProduct.images.length; i++){
            let product = currentProduct.images[i];

            htmlMostrar +=`
                <img src="${product}" class="imagenProd">
            `
        } 

        document.getElementById("product").innerHTML = htmlContentToAppend + htmlMostrar + '<p> <b> Comentarios </b> </p>';
}


function showComments(){

    let htmlContentToAppend = ""

    for (let i = 0; i < currentComment.length; i++){
        let product = currentComment[i];
  

        htmlContentToAppend +=` 

            <p class="img-thumbnail"> <b> ${product.user} </b> - ${product.dateTime} - 
            
            
            <br> ${product.description} </p>
     
        `

    } 

    document.getElementById("product").innerHTML += htmlContentToAppend;

}



document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(ProductINFO).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProduct = resultObj.data
            showProduct();
        }
    });


    getJSONData(ProductComment).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentComment = resultObj.data
            showComments();
        }
    });

});