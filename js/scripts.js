//variety
$(document).ready( function() {

    $('.drew').hover( function() {
        $(this).find('.rod').fadeIn(300);
    }, function() {
        $(this).find('.rod').fadeOut(100);
    });
});
var theForm = document.forms["pizzaform"];
//Prices

var size_prices= new Array();
size_prices["None"]=0;
size_prices["large"]=1000;
size_prices["medium"]=800;
size_prices["small"]=600;

function getSizePrice()
{
    var pizzaSizePrice=0;
    var theForm = document.forms["pizzaform"];
     var selectedSize = theForm.elements["size"];
    pizzaSizePrice = size_prices[selectedSize.value];
    return pizzaSizePrice;
}
//glutten-free
function gluttenFreePrice(){
    var gluttenFreePrice=0;
    var theForm = document.forms["pizzaform"];
    var includeGluttenFree = theForm.elements["includegluttenfree"];
    if(includeGluttenFree.checked==true){
        gluttenFreePrice=20;
    }return gluttenFreePrice;
}
//Crispy
function crispyPrice(){
    var crispyPrice=0;
    var theForm = document.forms["pizzaform"];
    var includeCrispy = theForm.elements["includecrispy"];
    if(includeCrispy.checked==true){
        crispyPrice=30;
    }return crispyPrice;
}
//stuffed
function stuffedPrice(){
    var stuffedPrice=0;
    var theForm = document.forms["pizzaform"];
    var includeStuffed = theForm.elements["includestuffed"];
    if(includeStuffed.checked==true){
        stuffedPrice=40;
    }return stuffedPrice;
}
//topping types
//Peperroni
function peperroniPrice(){
    var peperroniPrice=0;
    var theForm = document.forms["pizzaform"];
    var includePeperroni = theForm.elements["includepeperroni"];
    if(includePeperroni.checked==true){
        peperroniPrice=40;
    }return peperroniPrice;
}
//Mushrooms
function mushroomsPrice(){
    var mushroomsPrice=0;
    var theForm = document.forms["pizzaform"];
    var includeMushrooms = theForm.elements["includemushrooms"];
    if(includeMushrooms.checked==true){
        mushroomsPrice=30;
    }return mushroomsPrice;
}
//Onions
function onionsPrice(){
    var onionsPrice=0;
    var theForm = document.forms["pizzaform"];
    var includeOnions = theForm.elements["includeonions"];
    if(includeOnions.checked==true){
        onionsPrice=20;
    }return onionsPrice;
}

//total price function
function calculateTotal()
{
    var pizzaPrice =(getSizePrice() + gluttenFreePrice() + crispyPrice() +stuffedPrice() +onionsPrice() +mushroomsPrice() + peperroniPrice() )*getQuantity();

    //display on html page
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the pizza Ksh."+pizzaPrice;

}
//delivery
function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value.indexOf("@");
  var location = document.getElementById("location").value;

  if(name.length<10){
    alert("Enter your full name");
  }
  if (email == -1) {
   alert("Not a valid e-mail!");
 }
 if(location===""){
   alert("Enter location");
 }
if( name.length>10  && email>-1 && location!=="" ){
   alert( name +"we have received your location.You will receive at " + location + " by your ordered time");
 }
}
//checkOut
function getQuantity()
{
    //Assume form with id="theform"
    var theForm = document.forms["pizzaform"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["quantity"];
    var howmany =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
return howmany;
}
