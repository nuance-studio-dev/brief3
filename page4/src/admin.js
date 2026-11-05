const product={}


const page1=document.getElementById("etape1");
const page2=document.getElementById("etape2");



const formProduit = document.getElementById("productForm");
const btnNext = document.getElementById("nextBtn");

const stockProduit=document.getElementById("stock");
const nomProduit = document.getElementById("productName");
const typeProduit=document.getElementById("articleType");
const priceProduit = document.getElementById("price");
const description = document.getElementById("description");

const promotion = document.getElementById("promotion");
const promotionFields = document.getElementById("promotionFields");
const discount = document.getElementById("discount");
const date = document.getElementById("endDate");




const nameEror = document.getElementById("erorName");
const priceEror = document.getElementById("erorPrice");
const descriEror = document.getElementById("erorDescri");
const promoError = document.getElementById("promo");
const dateError = document.getElementById("time");
const stockError=document.getElementById("stocke");
const typeError=document.getElementById("errorType")


const regexNom = /^[a-zA-ZÀ-ÿ0-9\s'-]{3,50}$/;
const regexprice = /^\d+(\.\d{1,2})?$/;



//validation 
btnNext.addEventListener("click", function (event) {
    event.preventDefault();
    nameEror.textContent = "";
    priceEror.textContent = "";
    descriEror.textContent = "";
    promoError.textContent = "";
    stockError.textContent="";
    typeError.textContent="";
    


    const texte = description.value.trim();
    let valide = true;

    if (!regexNom.test(nomProduit.value.trim())) {
        nameEror.textContent = "Nom invalide";
        valide = false;
    }
    if(typeProduit.value===""){
        typeError.textContent="Veuillez choisir un type";
        valide=false;
    }
    if (
        !regexprice.test(priceProduit.value) ||
        Number(priceProduit.value) <= 0){

        priceEror.textContent = "Veuillez saisir un prix valide";
        valide = false;
    }

    // Descrip
    if (texte.length < 10 || texte.length > 500) {
        descriEror.textContent = "La description doit contenir entre 10 et 500 caractères.";
        valide = false;
    }
    
    
    if( Number(stockProduit.value) <= 0){
        stockError.textContent="Veuillez saisir un stock valide.";
        valide=false;
        console.log(stockProduit.value);
    }
    if (promotion.checked) {

    if (discount.value === "" || Number(discount.value) < 1 || Number(discount.value) > 100) {
        promoError.textContent = "Veuillez saisir une réduction entre 1 et 100%.";
        valide = false;
    }

    if (date.value === "") {
        dateError.textContent = "Veuillez choisir une date de fin.";
        valide = false;
    }

}
     if (valide) {
            product.name=nomProduit.value.trim();
            product.prix=Number(priceProduit.value);
            product.stock=Number(stockProduit.value);
            product.description=description.value.trim();
            product.type=typeProduit.value;
            console.log(product);

            page1.hidden=true;
            page2.hidden=false;


            
        }else{
            Swal.fire({
            icon: "error",
            title: "Formulaire invalide",
            text: "Veuillez corriger les erreurs avant de continuer."
        });
        }
    })


promotion.addEventListener("change", function () {

    if (promotion.checked) {
        promotionFields.hidden = false;
    } else {
        promotionFields.hidden = true;
    }

});


// PAGE2
const nextBtn=document.getElementById("suivi");

const textureProduit=document.querySelectorAll('input[name="Texture"]');
const textError=document.getElementById("textureError");

const veganEthiques=document.getElementById("Vegan");
const cruelty=document.getElementById("Cruelty-free");
const page3=document.getElementById("etape3");


nextBtn.addEventListener("click",function(){
    let valide=true;
    textError.textContent="";
    const produitTexture = document.querySelector('input[name="Texture"]:checked');
    const typeSkin=document.querySelectorAll('input[name="skinType"]:checked');

    if(!produitTexture){
        textError.textContent="Veuillez choisir une texture.";
        valide=false;
    } 
    if(valide){

         product.skinType = [];

        typeSkin.forEach(function(element) {
            product.skinType.push(element.value.trim());
        });

        product.texture=produitTexture.value;
        product.vegan=veganEthiques.checked;
        product.Crueltyfree = cruelty.checked;
        console.log(product);
        page2.hidden=true;
            page3.hidden=false;

    } else{
        Swal.fire({
            icon: "error",
            title: "Formulaire invalide",
            text: "Veuillez corriger les erreurs avant de continuer."
        });

    }


})



const productCont=document.getElementById("productContainer");
function affichage(){
    productCont.innerHTML="";
    const card=document.createElement("div");
    card.classList.add("product-card");
    const title=document.createElement("h3");
    title.textContent=product.name;
    const type = document.createElement("p");
    type.textContent="Type : " + product.articleType;
    const prix=document.createElement("p");
    prix.textContent="Prix : " + product.price + " DH";
    card.append(title,type,prix);
    productCont.appendChild(card)


}








