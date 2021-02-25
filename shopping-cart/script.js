const minnes = document.getElementById('minnesQty');
const qtyPrice=document.getElementById('priceAmount').innerText;
var price =parseInt(qtyPrice);

minnes.addEventListener('click', function(){
    mines('inputQty',-1);
    amount('inputQty','priceAmount',price);
})

const plus = document.getElementById('plusQty');
plus.addEventListener('click', function(){
    mines('inputQty',1);
    mines('priceAmount', price);
})

const minnesp2 = document.getElementById('minnesQtyp2');
const qtyPrice2=document.getElementById('priceAmountp2').innerText;
var price2 =parseInt(qtyPrice2);

minnesp2.addEventListener('click', function(){
    mines('inputQtyp2',-1);
    amount('inputQtyp2','priceAmountp2',price2);
})

const plus2 = document.getElementById('plusQtyp2');
plus2.addEventListener('click', function(){
    mines('inputQtyp2',1);
    amount('inputQtyp2','priceAmountp2', price2);
})

function amount (inputId,priceId,price){
    const quantity = document.getElementById(inputId).innerText;
    let quantityNumber = parseInt(quantity);
    let newPrice= quantityNumber*price;
    document.getElementById(priceId).innerText=newPrice; 
}
 
function mines(id,num){
    const qty = document.getElementById(id).innerText;
    let qtyAmount= parseInt(qty);
    if(qtyAmount>0){
        qtyAmount = qtyAmount+num;
        document.getElementById(id).innerText=qtyAmount;
    };
}
const body = document.getElementById('body');
body.addEventListener('click',function(){
    const product1 =parseInt (document.getElementById('priceAmount').innerText);
    const product2 =parseInt (document.getElementById('priceAmountp2').innerText);
    const subPrice =product1+product2;
    var taxAmount=Math.round(subPrice*(15/100));
    document.getElementById('tax').innerText=taxAmount;
    const tax = parseInt(document.getElementById('tax').innerText); 
    document.getElementById('total').innerText =subPrice+tax;
    document.getElementById('subTotal').innerText=subPrice;
})
closeBtn('closeItem1', 'cartArea1');
closeBtn('closeItem2', 'cartArea2');

function closeBtn(id1,id2){
    const closebtn1 = document.getElementById(id1);
        closebtn1.addEventListener("click",function(){
        document.getElementById(id2).style.display="none";
    })
}

