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
        let stars = '';

        for (let a = 0; a < product.score; a++){
            stars +=`
            <span class="fa fa-star checked"></span>
            `   
        } 

        for (let a = 0; a < (5- product.score); a++){
            stars +=`
            <span class="fa fa-star"></span>
            `   
            } 

        htmlContentToAppend +=` 

            <p class="img-thumbnail"> <b> ${product.user} </b> - ${product.dateTime} - ${stars}
            
            
            
            <br> ${product.description} </p>
     
        `

    } 

    document.getElementById("product").innerHTML += htmlContentToAppend;

}

function addOpinion(){
    let htmlContentToAppend = ' ';

    htmlContentToAppend += `
        <p> <b> Comentar </b> </p> 
            <label>Tu opinion:</label><br>
            <input type="text" id="ImputOpinion" class="ImputOpinion" > <br>
            <label>Tu puntuacion:</label><br>
            <input type="number" id="ImputPunt" class="ImputPunt"  value="1" min="1" max="5" > <br> </br> 
            <input type="button" onclick="addComment()" value="Enviar" class="submitButton">
            <hr>
            <p> <b> Productos Relacionados </b> </p>
         `

    document.getElementById("opinion").innerHTML += htmlContentToAppend;

}

function addComment(){
    commentary = document.getElementById('ImputOpinion').value
    points = document.getElementById('ImputPunt').value
    let stars = ' ';
    let htmlContentToAppend = ' ';
    const date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    let time = date.getHours();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds= date.getSeconds();



    for (let a = 0; a < points; a++){
        stars +=`
        <span class="fa fa-star checked"></span>
        `   
    } 

    for (let a = 0; a < (5- points); a++){
        stars +=`
        <span class="fa fa-star"></span>
        `   
        } 

    htmlContentToAppend +=` 

        <p class="img-thumbnail"> <b> ${localStorage.getItem("nombre")} </b> - ${year}-${month}-${day} ${hour}:${minute}:${seconds} - ${stars}
        
        
        
        <br> ${commentary} </p>
 
    `

    document.getElementById("product").innerHTML += htmlContentToAppend;

 }

function showRelacionados() {
    let htmlContentToAppend = ' ';

    for (let i = 0; i < currentProduct.relatedProducts.length; i++){
        let product = currentProduct.relatedProducts[i];

        htmlContentToAppend +=`

        <div class = "imagenProd"> 
            <div onclick="setProdID(${product.id})" class="card mb-4 shadow-sm custom-card cursor-active" >
              <img class="bd-placeholder-img card-img-top" src="${product.image}">
              <p class="m-3"> ${product.name} </p>
            </div>
        </div>  
        `
    } 



    document.getElementById("relacionados").innerHTML += htmlContentToAppend;

}



document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(ProductINFO).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProduct = resultObj.data
            showProduct();
            addOpinion();
            showRelacionados();
        }
    });


    getJSONData(ProductComment).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentComment = resultObj.data
            showComments();
        }
    });

});

function setProdID(id) {
    localStorage.setItem("ProdID", id);
    window.location = "product-info.html"
}