//variety
$(document).ready( function() {

    $('.drew').hover( function() {
        $(this).find('.rod').fadeIn(300);
    }, function() {
        $(this).find('.rod').fadeOut(100);
    });
});

//Prices
var topping_prices= new Array();
 topping_prices["None"]=0;
 topping_prices["peperroni"]=50;
 topping_prices["mushrooms"]=50;
 topping_prices["onions"]=40;

//This function finds the filling price based on the
//drop down selection
function getToppingPrice()
{
    var pizzaToppingPrice=0;
    var theForm = document.forms["pizzaform"];//Get a reference to the form id="cakeform"
     var selectedTopping = theForm.elements["topping"];  //Get a reference to the select id="filling"
    pizzaToppingPrice = topping_prices[selectedTopping.value];//set cakeFilling Price equal to value user chose
    return pizzaToppingPrice;  //finally we return cakeFillingPrice
}

var crust_prices= new Array();
crust_prices["None"]=0;
crust_prices["gluten-free"]=30;
crust_prices["crispy"]=40;
crust_prices["stuffed"]=70;

function getCrustPrice()
{
    var pizzaCrustPrice=0;
    var theForm = document.forms["pizzaform"];//Get a reference to the form id="cakeform"
     var selectedCrust = theForm.elements["crust"];  //Get a reference to the select id="filling"
    pizzaCrustPrice = crust_prices[selectedCrust.value];//set cakeFilling Price equal to value user chose
    return pizzaCrustPrice;  //finally we return cakeFillingPrice
}

var size_prices= new Array();
size_prices["None"]=0;
size_prices["large"]=1000;
size_prices["medium"]=800;
size_prices["small"]=600;

function getSizePrice()
{
    var pizzaSizePrice=0;
    var theForm = document.forms["pizzaform"];//Get a reference to the form id="cakeform"
     var selectedSize = theForm.elements["size"];  //Get a reference to the select id="filling"
    pizzaSizePrice = size_prices[selectedSize.value];//set cakeFilling Price equal to value user chose
    return pizzaSizePrice;  //finally we return cakeFillingPrice
}
function getQuantity(){
    var theForm = document.forms["pizzaform"];
    var quantity = theForm.elements["quantity"];
    var pizzaQuantity=0;
    if(quantity.value!="")
    {
        pizzaQuantity =parseInt(document.getElementById("quantity").value);
    }
    return pizzaQuantity;
}
