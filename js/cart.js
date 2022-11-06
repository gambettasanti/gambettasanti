let currentCartArray = [];
let DOLLAR_SYMBOL = "USD ";
let amount = '1';

document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCartArray = resultObj;
            ShowCart();
        }
    });


    document.getElementById("premiumRadio").addEventListener("change", function(){
      mailingCostToShow = (currentCartArray.data.articles[0].unitCost * amount) * 0.15;
      updateTotalCosts();
  });
  
  document.getElementById("expressRadio").addEventListener("change", function(){
      mailingCostToShow = (currentCartArray.data.articles[0].unitCost * amount) * 0.07;
      updateTotalCosts();
  });

  document.getElementById("standardRadio").addEventListener("change", function(){
      mailingCostToShow = (currentCartArray.data.articles[0].unitCost * amount) * 0.05;
      updateTotalCosts();
  });

});

function TotalPrice(quantity){ 
    currentCartArray.data.articles[0].count = quantity; 
    amount = quantity;
    ShowCart();
}

function ShowCart () {
    let htmlContentToAppend = '';
    let product = currentCartArray.data.articles[0];

    htmlContentToAppend +=`

    <div class="text-center p-2">
      <div class="row align-items-start">
        <div class="col">
            <img src='${product.image}' style='width:100px'> </img> 
        </div>
        <div class="col">
            ${product.name} 
        </div>
        <div class="col">
            USD ${product.unitCost}
        </div>
        <div class="col">
            <input value="${product.count}" onchange='TotalPrice(this.value)' type="number" id="InputPunt" class="InputPunt" min="1">
        </div>
        <div class="col">
            <b> USD ${product.count * product.unitCost} <b>
        </div>
      </div> 
    </div> 
    
`

    document.getElementById("mostrar").innerHTML = htmlContentToAppend;

}


document.getElementById("form").addEventListener('submit', event =>{
    if(!validation()){
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
    ['change', 'input'].forEach(elemento => {document.body.addEventListener(elemento, validation)})

})

  function validation(){
    let validity = true;
   
    if (terminos.checked) {
      validity = true;
      btn.classList.remove("text-danger");
      btn.classList.add("text-primary");
      document.getElementById("payMetod").innerHTML = ""
  
    } else  {
      validity = false;
      btn.classList.add("text-danger")
      document.getElementById("payMetod").innerHTML = `Debe seleccionar metodo de pago `
    }
    return validity;
  }

  function updateTotalCosts(){
    let unitProductCostHTML = document.getElementById("productCostText");
    let mailingCostHTML = document.getElementById("mailingText");
    let totalCostHTML = document.getElementById("totalCostText");

    let unitCostToShow = DOLLAR_SYMBOL + currentCartArray.data.articles[0].unitCost;

    unitProductCostHTML.innerHTML = unitCostToShow;
    mailingCostHTML.innerHTML = DOLLAR_SYMBOL + mailingCostToShow;
    totalCostHTML.innerHTML = DOLLAR_SYMBOL + ((currentCartArray.data.articles[0].unitCost * amount)+ mailingCostToShow);
  }
