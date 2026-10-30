
// 1. Le tableau global (Catalogue complet incluant les accessoires)
const makeupProducts = [
    { id: "m1", name: "Fond de Teint Mat", category: "Visage", shade: "Beige Clair", price: 25.00, image: "foundation1.png" },
    { id: "m2", name: "Rouge à Lèvres Velours", category: "Lèvres", shade: "Rouge Intense", price: 18.50, image: "lipstick-red.png" },
    { id: "m3", name: "Rouge à Lèvres Velours", category: "Lèvres", shade: "Nude Rosé", price: 18.50, image: "lipstick-nude.png" },
    { id: "m4", name: "Mascara Volume", category: "Yeux", shade: "Noir", price: 15.00, image: "mascara.png" },
    { id: "m5", name: "Palette Fards à Paupières", category: "Yeux", shade: "Automne", price: 35.00, image: "palette.png" },
    { id: "m6", name: "Blush Poudre", category: "Visage", shade: "Pêche", price: 20.00, image: "blush.png" },
    { id: "m7", name: "Set de 5 Pinceaux Pro", category: "Accessoire", shade: "N/A", price: 28.00, image: "brushes.png" },
    { id: "m8", name: "Éponge Beauty Blender", category: "Accessoire", shade: "Rose", price: 8.50, image: "blender.png" },
    { id: "m9", name: "Trousse de Voyage", category: "Accessoire", shade: "Noir", price: 16.00, image: "bag.png" },
    { id: "m10", name: "Recourbe-cils Précision", category: "Accessoire", shade: "Métal", price: 12.00, image: "curler.png" }
];

// 2. Le tableau des produits dans le panier par défaut (avec des accessoires)
let makeupCart = [
    { id: "m1", name: "Fond de Teint Mat", shade: "Beige Clair", price: 25.00, quantity: 1, image: "foundation1.png" },
    { id: "m2", name: "Rouge à Lèvres Velours", shade: "Rouge Intense", price: 18.50, quantity: 2, image: "lipstick-red.png" },
    { id: "m7", name: "Set de 5 Pinceaux Pro", shade: "N/A", price: 28.00, quantity: 1, image: "brushes.png" },
    { id: "m8", name: "Éponge Beauty Blender", shade: "Rose", price: 8.50, quantity: 2, image: "blender.png" }
];
const productsList = document.querySelector(".products-list");

//creation 

function creatCart(element) {

    // Créer la carte du produit
    const cart = document.createElement("div");
    cart.className = "produit";

    // Créer l'image
    const image = document.createElement("img");
    image.src = "assets/image/" + element.image;
    image.alt = element.name;
    image.className = "image-produit";
    cart.appendChild(image);

    // Creer la zone des informations
    const div1 = document.createElement("div");
    div1.className = "info";
    cart.appendChild(div1);

    // Creer le nom
    const nameProduct = document.createElement("h3");
    nameProduct.textContent = element.name;
    nameProduct.className = "nomproduct";
    div1.appendChild(nameProduct);

    // Creer la teinte
    const shade = document.createElement("p");
    shade.textContent = element.shade;
    shade.className = "teinte";
    div1.appendChild(shade);

    // Creer le prix
    const price = document.createElement("p");
    price.textContent = element.price.toFixed(2) + " DH";
    price.className = "prix";
    div1.appendChild(price);

    // Creer la zone des boutons
    const div2 = document.createElement("div");
    div2.className = "addorremove";
    cart.appendChild(div2);

    // Bouton +
    const addbtn = document.createElement("button");
    addbtn.textContent = "+";
    addbtn.className = "btn";
    addbtn.type = "button";
    div2.appendChild(addbtn);

    addbtn.addEventListener("click", function () {
        element.quantity++;
        console.log(element.name, element.quantity);
        quantity.textContent = element.quantity;
        afficherTotale()

    })

    // quantite
    const quantity = document.createElement("span");
    quantity.textContent = element.quantity;
    quantity.className = "quantite";
    div2.appendChild(quantity);

    // Bouton -
    const removebtn = document.createElement("button");
    removebtn.textContent = "-";
    removebtn.className = "btn";
    removebtn.type = "button";
    div2.appendChild(removebtn);
    removebtn.addEventListener("click", function () {
        if (element.quantity > 1) {
            element.quantity--;
            quantity.textContent = element.quantity;
            afficherTotale()
        }
        // }else if (element.quantity === 1){


        // }
    })


    return cart;
}

function affichage() {
    productsList.innerHTML = ""
    for (let i = 0; i < makeupCart.length; i++) {

        const carteElement = creatCart(makeupCart[i]);

        productsList.appendChild(carteElement);
    }
}

affichage();



// console.log(cart)
const subtotalprice = document.getElementById("subtotal");
subtotalprice.textContent = calculerTotal().toFixed(2) + "DH";

function calculerTotal() {
    let total = 0;
    for (let produit of makeupCart) {
        total += produit.price * produit.quantity;

    }
    return total;
}
// console.log(calculerTotal())
const fraisalivraison = 25;

function afficherTotale() {
    let soustotal = calculerTotal();
    let livraison = fraisalivraison;
    let totalcommande = soustotal + livraison;

    const subtotalprice = document.getElementById("subtotal");
    const totalprice = document.getElementById("total-price");
    const shippingPrice = document.getElementById("shipping");
    subtotalprice.textContent = calculerTotal().toFixed(2) + " DH";
    shippingPrice.textContent = livraison.toFixed(2) + " DH";
    totalprice.textContent = totalcommande.toFixed(2) + " DH";

}
afficherTotale();





const openmadale = document.getElementById("open-madale");
const searchContainer = document.querySelector(".search-container");
// const dialog = document.getElementById("dialog-message");
// const closeDialog = document.getElementById("dialog-btn");

openmadale.addEventListener("click", function () {
    searchContainer.style.display = "block";
    affichageRecu()
});
document.querySelector("#close").addEventListener("click",()=>{
    searchContainer.style.display = "none"
})
// closeDialog.addEventListener("click", function () {
//     dialog.closest();
    
// })







const searchInput = document.getElementById("search-product");
const searchResultat = document.getElementById("search-resultat");
searchInput.addEventListener("input", function () {
    // console.log(searchInput.value);

    affichageRecu()

})
function affichageRecu() {
    searchResultat.innerHTML = "";
    let valeur = searchInput.value.toLowerCase();
    for (let produit of makeupProducts) {
        if (produit.name.toLowerCase().includes(valeur)) {
            produit.quantity = 1;
            let resultat = creatCart(produit);
            let btn = document.createElement("button");
            btn.textContent = "add";
            btn.name = produit.id;
            btn.addEventListener("click", function () {
                addNewProduct(produit);
            })

            resultat.appendChild(btn)
            // resultat.textContent=produit.name;
            searchResultat.appendChild(resultat);

        }
        console.log(produit.name);
    }
}

function addNewProduct(product) {

    for (let p of makeupCart) {
        if (p.id === product.id) {
            p.quantity++;
            affichage();
            subtotalprice.textContent = calculerTotal().toFixed(2) + "DH";
            return
        }
    }
    makeupCart.push(product);
    productsList.appendChild(creatCart(product));
    subtotalprice.textContent = calculerTotal().toFixed(2) + "DH";
    

} 








