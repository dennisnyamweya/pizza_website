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
