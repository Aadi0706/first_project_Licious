function openFormm() {
  document.getElementById("myFormm").style.display = "block";
}

function closeFormm() {
  document.getElementById("myFormm").style.display = "none";
}



var cartarr = JSON.parse(localStorage.getItem("cartitems"));
    
console.log(cartarr);

cartarr.map(function(item){

        var div = document.createElement("div");

        var megaName = document.createElement("p");
        megaName.textContent = item.name;
        megaName.setAttribute("class", "cartNme1")

        var divWt = document.createElement("div");
        divWt.setAttribute("class" , "cartflex1")

        var cp1 = document.createElement("p");
        cp1.textContent = item.netWt;
        cp1.setAttribute("class" , "cp1")

        var cp3 = document.createElement("p");
        cp3.textContent = item.price;
        cp3.setAttribute("class" , "cp3")

        divWt.append(cp1, cp3);

        divcarthr = document.createElement("hr")
        divcarthr.setAttribute("class" , "divcarthr")


        var megabutton = document.createElement("button");
        megabutton.textContent = "ADD TO CART";
        //
        megabutton.addEventListener("click", function(){
            addTocart(item);
        
        });


        div.append( megaName,  divWt, divcarthr);

        document.querySelector("#Container-cart").append(div)

        })


        var total = cartarr.reduce(function (acc,cv){
          return acc+ Number(cv.price);
         },0);
    document.querySelector("#total").textContent = `₹${total}`

         
    
    if(total > 749){
    var finaltotal = total +0;
    document.querySelector("#total").textContent = `₹${total}`  
    document.querySelector("#deliverycharge").textContent = `₹${0}`  
    document.querySelector("#finaltotal").textContent = finaltotal;
    }
    else if (total < 749 && total > 0){
        finaltotal = total + 39;
        document.querySelector("#total").textContent = `₹${total}`  
        document.querySelector("#deliverycharge").textContent = `₹${39}`
        document.querySelector("#finaltotal").textContent = `₹${finaltotal}`;
    }
    else{
        finaltotal = total + 0;
        document.querySelector("#total").textContent = `₹${total}`  
        document.querySelector("#deliverycharge").textContent = `₹${0}`
        document.querySelector("#finaltotal").textContent = `₹${finaltotal}`;

    }


        document.querySelector("#leftcheck").textContent = `Total : ₹${finaltotal}`;

        localStorage.setItem("finaltotal" ,JSON.stringify(finaltotal));
        localStorage.setItem("total" ,JSON.stringify(total));


console.log(total)
console.log(finaltotal)