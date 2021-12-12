
// Array med alla produkter
const products = [
    { id: 1, title: "God", description: "Hyfsat", price: 123 },
    { id: 2, title: "Godare", description: "Bra", price: 456 },
    { id: 3, title: "Godast", description: "Väldigt bra", price: 789 },
];

function getCustomerId() {
    let customerId = localStorage.getItem("customerid");

    if (customerId === null) {
        customerId = Math.floor(Math.random() * 1000000000) + 1000000000;
        localStorage.setItem("customerid", customerId);
        localStorage.setItem("cart", "");
    }

    return customerId;
}

// Funktion som lägger till produkt med ett visst ID till localstorage
function addToCart(id) {
    for (let product of products) {
        if (product.id === id) {
            localStorage.setItem("cart", localStorage.getItem("cart") + id + ",")
            
        }
    }
}
//funktion som rensar localstorage, går bara att komma åt från förstasidan.
//används för att rensa varukorgen.
//skulle gå att rensa individuela produkter från varukorgen genom att ge varje produkt ett individuelt id, men det han jag inte ge mig på.
function removeFromCart(){
    window.localStorage.clear();
    

}
// Returnerar varukorgens innehåll uppdelad i en array
function getCart() {
    return localStorage.getItem("cart").trim(",").split(",");
}

// Funktion som ritar upp alla produkter (se arrayen högst upp)
// till div med klassen container
function displayProducts() {
    let container = document.querySelector(".container");

    for (let product of products) {
        container.innerHTML +=
            `<div class="item">` +
            `<h2>${product.title}</h2>` +
            `<p>${product.description}</p>` +
            `<p>Pris: <b>${product.price}</b></p>` +
            `<button onclick="addToCart(${product.id})">Köp</button>`;
            
            
        } 

          
}
//funktion som validerar att checkboxen är checked i betalningsformuläret.
 
 var validatePay = function(){
    var pay=document.querySelector("#checked")
    if(pay.value.match){
        alert("tack för att du handlade på tuc!")
        
    }else{
        alert("felaktiga uppgifter!")
    }
    
}


//funktion som validerar att checkboxen är checked i kpntaktformuläret
//funktionen sparar också värdena för förnamn,efternamn,adress och postnummer i localstorage
 var validateForm =function (){
    var ph=document.querySelector("#checked") 
    if(ph.value.match){
    
    
    var förNamn = document.getElementById('fNamn').value,
      efterNamn = document.getElementById('eNamn').value;
      adress = document.getElementById('adress').value
      postNummer = document.getElementById('postNummer').value

      
       window.localStorage.setItem("förNamn", förNamn);
       window.localStorage.setItem("efterNamn", efterNamn); 
       window.localStorage.setItem("adress", adress);
       window.localStorage.setItem("postNummer",postNummer);
      
     window.localStorage.getItem("förNamn");
      window.localStorage.getItem("efterNamn");
      window.localStorage.getItem("adress");
      window.localStorage.getItem("postNummer");
    alert("Uppgifter Godkända")
}else{
    alert("uppgifter felaktiga")
}
}

//funktion för att skriva ut lokalstorage variabler.
function displayCustomerName(){
    for (var i = 0; i < localStorage.length; i++){
        document.getElementById('fenamn').innerHTML=window.localStorage.getItem("förNamn") + " " + window.localStorage.getItem("efterNamn");
        document.getElementById('adress').innerHTML=window.localStorage.getItem("adress");
        document.getElementById("postNummer").innerHTML=window.localStorage.getItem("postNummer");
    }


    
}



// Funktion som ritar upp innehållet i varukorgen till div
// med klass cartcontainer
function displayCart() {
    let container = document.querySelector(".cartcontainer");

    let cart = getCart();

    let totalPrice = 0;

    for (let id of cart) {
        for (let product of products) {
            if (product.id == id) {
                container.innerHTML +=
                    `<div class="cartitem">` +
                    `<p><b>${product.title}</b>: ${product.price} SEK</p>` +
                    `</div>`;

                totalPrice += product.price;
            }
        }
    }

    container.innerHTML +=
        `<div class="cartitem">` +
        `<p><b>Totalt</b>: ${totalPrice} SEK</p>` +
        `</div>`;
}

// Se alltid till att försöka hitta customerID på varje sida
getCustomerId();






