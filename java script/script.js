var btn1 = document.querySelector("#prdct1")
btn1.addEventListener('click', foo);
var Qprod2=0;
function foo(){
    Qprod2 +=1
    var price = document.getElementById('price1').innerHTML;
    var total= price*Qprod2;
    console.log(total);
    var total1=document.getElementById("total1");
    total1.innerHTML=total;
    totalCart();
}




var btn2 = document.querySelector("#product2")
btn2.addEventListener('click', foo2);
var Qprod1 =0;
function foo2(){
 Qprod1 +=1
var price2 = document.getElementById('price2').innerHTML;
var total2= price2*Qprod1;
console.log(total2);
var total2_element=document.getElementById("total2")
total2_element.innerHTML=total2;
totalCart();
}


function totalCart(){
    var total1=document.getElementById("total1").innerHTML;
    var total2=document.getElementById("total2").innerHTML;
    var total=document.getElementById("totalCart");
    total.innerHTML= parseInt(total1)+parseInt(total2);

}


var removebtn1 = document.querySelector("#remooveprod1")
removebtn1.addEventListener('click', poo);


 function poo(){
    var total1=document.getElementById("total1").innerHTML;
    var price = document.getElementById('price1').innerHTML;
    var total = parseInt(total1)-parseInt(price);
    if (total>=0){
    var total1_el=document.getElementById("total1");
    total1_el.innerHTML=total;
    totalCart();
}
 }


 var removebtn2 = document.querySelector("#removeprod2")
removebtn2.addEventListener('click', poo2);


 function poo2(){
    var total2=document.getElementById("total2").innerHTML;
    var price = document.getElementById('price2').innerHTML;
    var total = parseInt(total2)-parseInt(price);
    if (total>=0){
    var total2_el=document.getElementById("total2");
    total2_el.innerHTML=total;
    totalCart();
}
 }

