 function loadjson(file,callback){
     var xhr=new XMLHttpRequest();
     xhr.overrideMimeType("application/json");
     xhr.open("GET",file,true);
     xhr.onreadystatechange=function(){
         if(xhr.readyState===4 && xhr.status=="200"){
             callback(xhr.responseText);
         }

     };
     xhr.send(null);
 }

 loadjson("data.json",function(text){
     var data =JSON.parse(text);
     console.log(data);
     display(data.cards)
 })

 

 function display(mob){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
    console.log(deck)
    for(var i in mob){
        // console.log(mob[i].offerprice)
         var caddiv=document.createElement("div")
         caddiv.classList.add("card")
     var cadimg=document.createElement("img")
     cadimg.src=mob[i].img
     console.log(cadimg)
     caddiv.appendChild(cadimg)
     deck.appendChild(caddiv)
//name area
     var cname=document.createElement("h2")
     cname.textContent=mob[i].name;
     caddiv.appendChild(cname)
//   //rate area   
     var price=document.createElement("h3")
     price.textContent=mob[i].price;
     caddiv.appendChild(price)
 // offer price
 var offerprice=document.createElement("h3")
     offerprice.textContent=mob[i].offerprice;
     caddiv.appendChild(offerprice)
    //button area
    var btn=document.createElement("button")
    btn.classList.add("btn-info")
    btn.textContent=mob[i].button;
    caddiv.appendChild(btn)
    }
 }

